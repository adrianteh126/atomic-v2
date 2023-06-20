<template>
  <div>
    <!-- Bootstrap modal -->
    <div
      class="modal fade"
      :id="modalID"
      tabindex="-1"
      aria-labelledby="modalLabel"
      aria-hidden="true"
    >
      <!-- Modal content -->
      <div class="modal-dialog">
        <div class="modal-content">
          <!-- Modal header -->
          <div class="modal-header">
            <h5 class="modal-title">{{ modalTitle }}</h5>
            <button type="button" class="btn-close" @click="hideModal"></button>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div v-if="modalTitle !== 'Task History ⏳'">
              <form>
                <div class="mb-3">
                  <label for="modalTaskName" class="form-label"
                    >Task Name</label
                  >
                  <br />
                  <input
                    type="text"
                    class="form-control"
                    :placeholder="selectedTodoName"
                    v-model="state.NewT_name"
                    style="color: grey"
                  />
                </div>
                <div class="mb-3">
                  <label for="modalTaskDesc" class="form-label"
                    >Task Description</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    :placeholder="selectedTodoDesc"
                    v-model="state.NewT_description"
                    style="color: grey"
                  />
                </div>
                <div class="mb-3">
                  <label for="modalTaskProgress">Task Progress (1-10)</label>
                  <input
                    type="range"
                    class="slider"
                    min="0"
                    max="10"
                    step="1"
                    id="modalTaskProgress"
                    v-model="state.NewT_progress"
                  />
                  <p class="small-text">
                    Selected task progress : {{ state.NewT_progress }}
                  </p>
                </div>
                <div class="mb-3">
                  <label for="modalTaskDueDate" class="form-label"
                    >Task Due Date</label
                  >
                  <br />
                  <VueDatePicker
                    id="modalTaskDueDate"
                    class="form-control"
                    :placeholder="selectedTodoDueDate"
                    v-model="dueDate"
                    :format="format"
                  >
                  </VueDatePicker>
                </div>
                <div class="mb-3">
                  <label for="modalTaskPriority">Task Priority</label>
                  <select
                    class="form-select"
                    id="modalTaskPriority"
                    v-model="state.NewT_priority"
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </form>
            </div>
            <div v-else>
              <div v-for="todo in state.todos" :key="todo._id">
                <div v-if="todo.t_progress === 10">
                  <div class="card my-4 mx-5 col">
                    <div class="card-body">
                      <h5 class="card-title fw-bold">
                        {{ todo.t_name }}
                      </h5>
                      <h5 class="card-subtitle text-secondary">
                        {{ todo.t_description }}
                      </h5>
                      <div class="progress-state my-2">
                        <i class="bx bx-list-ul icon"></i>
                        <span class="text-secondary">Progress</span>
                        <span class="bx-pull-right float-end fw-bold"
                          >{{ todo.t_progress }}/10</span
                        >
                      </div>
                      <div class="progress" style="height: 3px">
                        <div
                          :class="{
                            'bg-danger':
                              todo.t_progress >= 0 && todo.t_progress <= 3,
                            'bg-warning':
                              todo.t_progress >= 4 && todo.t_progress <= 6,
                            'bg-success':
                              todo.t_progress >= 7 && todo.t_progress <= 10,
                          }"
                          role="progressbar"
                          :style="{ width: todo.t_progress * 10 + '%' }"
                          :aria-valuenow="todo.t_progress"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                      <div class="d-flex gap-1">
                        <div class="">
                          <p class="card-text mt-1">
                            <span
                              class="badge bg-body-secondary circle mr-2"
                              :style="{
                                color: getPriorityColor(todo.t_priority),
                              }"
                              >{{ todo.t_due_date.slice(0, 10) }}</span
                            >
                          </p>
                        </div>
                        <div class="">
                          <p class="card-priority mt-1">
                            <span
                              class="badge bg-body-secondary circle mr-2"
                              :style="{
                                color: getPriorityColor(todo.t_priority),
                              }"
                            >
                              {{ todo.t_priority }} Priority
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <!-- <button type="button" class="btn btn-secondary" @click="hideModal">Close</button> -->
            <button
              v-if="modalTitle === 'Add New Task'"
              type="button"
              class="btn btn-primary"
              @click="createNewTask"
            >
              Add Task
            </button>
            <div v-if="modalTitle === 'Edit Task'">
              <button
                type="button"
                class="btn btn-success ms-1"
                @click="saveChanges"
              >
                Save Changes
              </button>
              <button
                type="button"
                class="btn btn-danger"
                @click="deleteAndHideModal(selectedTodoID)"
              >
                Delete Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import moment from "moment";
import todocrud from "../modules/todocrud";
// import { format } from 'date-fns';
// import $ from 'jquery';

const bootstrap = require("bootstrap");

export default {
  components: { VueDatePicker },
  watch: {
    dueDate(newValue) {
      console.log(this.formatDate(newValue));
      this.state.NewT_due_date = this.formatDate(newValue);
    },
  },
  methods: {
    // General modal method
    showModal(type) {
      if (type === "new") {
        console.log("ModalComponent.vue : New");
        this.modalTitle = "Add New Task";
      } else if (type === "edit") {
        console.log("ModalComponent.vue : Edit");
        this.modalTitle = "Edit Task";
      } else if (type === "history") {
        console.log("ModalComponent.vue : History");
        this.modalTitle = "Task History ⏳";
      }
      this.selectedModal.show();
    },
    hideModal() {
      this.selectedModal.hide();
    },
    saveChanges() {
      // Clear input fields
      // this.state.NewT_name = '';
      // this.state.NewT_description = '';
      // this.state.NewT_progress = '';
      // this.state.NewT_due_date = '';
      // this.state.NewT_priority = '';
      this.editTodo(this.selectedTodoID);
      console.log("this.state = " + this.state);
      this.hideModal();
    },
    createNewTask() {
      this.newTodo(); // Call the newTodo method
      // this.saveChanges(); // Call the saveChanges method
      this.hideModal(); // Call the closeModal method
    },
    deleteAndHideModal(selectedTodoID) {
      this.deleteTodo(selectedTodoID);
      this.hideModal();
    },

    // Ultility method
    formatDate(date) {
      if (typeof date !== "string") {
        date = date.toString();
      }
      const [dayOfWeek, month, day, year, time, timeZone] = date.split(" ");
      console.log(dayOfWeek);
      const convertedDate = moment(
        `${month} ${day} ${year} ${time} ${timeZone}`,
        "MMM DD YYYY HH:mm:ss [GMT]ZZ"
      ).format("YYYY/MM/DD");
      return convertedDate;
    },
    isDueDateLessThanThreeDays(todo) {
      // Parse the due date from the string format
      const dueDate = new Date(todo.t_due_date);

      // Get the current date
      const currentDate = new Date();

      // Calculate the difference between the due date and the current date
      const differenceInTime = dueDate.getTime() - currentDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);

      // Return true if the difference is less than 3 days, otherwise false
      return differenceInDays >= -3;
    },
    getTodo(todo) {
      this.selectedTodo = todo;
      console.log(
        "ModalComponent.vue : GotTodo - " + JSON.stringify(this.selectedTodo)
      );
      this.selectedTodoID = todo._id;
      this.selectedTodoName = todo.t_name;
      this.selectedTodoDesc = todo.t_description;
      this.selectedTodoProgress = todo.t_progress;
      this.selectedTodoDueDate = todo.t_due_date;
      this.selectedTodoPriority = todo.t_priority;
    },
    getPriorityColor(priority) {
      if (priority === 'Low') {
        return '#78d700';
      } else if (priority === 'Medium') {
        return '#ffa048';
      } else if (priority === 'High') {
        return '#ff7979';
      }
      return '';
    },
  },

  setup() {
    const modalID = ref("editModal"); //getModalID from parent
    const dueDate = ref();
    const taskProgress = ref();

    const modalTitle = ref("Title here");
    const selectedTodo = ref(null);

    // retrieved selected todo for modal placeholder value
    const selectedTodoID = ref();
    const selectedTodoName = ref();
    const selectedTodoDesc = ref();
    const selectedTodoProgress = ref();
    const selectedTodoDueDate = ref();
    const selectedTodoPriority = ref();
    // selectedTodo structure
    // _id : "648b28412ab52888d0de6d6a"
    // t_name : "Task 2"
    // t_description : "Desc 2"
    // t_progress : 0
    // t_due_date : "2023-06-14T00:00:00.000Z"
    // t_priority : "High"

    const { state, GetAllTodos, newTodo, deleteTodo, editTodo } = todocrud();

    const format = (date) => {
      const day = date.getDate();
      const month = date.getMonth() + 1;
      const year = date.getFullYear();

      return `Selected date is ${day}/${month}/${year}`;
    };


    return {
      modalID,
      dueDate,
      taskProgress,
      format,
      state,
      newTodo,
      deleteTodo,
      editTodo,
      GetAllTodos,
      modalTitle,
      selectedTodo,
      selectedTodoID,
      selectedTodoName,
      selectedTodoDesc,
      selectedTodoProgress,
      selectedTodoDueDate,
      selectedTodoPriority,
    };
  },

  mounted() {
    this.selectedModal = new bootstrap.Modal("#" + this.modalID, {});
    this.GetAllTodos();
  },
};

</script>

<style scoped>
.slider {
  width: 100%;
}
label {
  font-weight: 600;
}
.small-text {
  font-size: smaller;
  color: var(--dark-color);
}
</style>
