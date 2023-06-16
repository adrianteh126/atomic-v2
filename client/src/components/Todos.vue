<template>
<section>
<div class="d-flex justify-content-between align-items-center">
  <h4 class="p-4 fw-bold">Dashboard 📝</h4>
  <div class="col-8">
      <div class="d-flex justify-content-end align-items-center">
        <i class="bi bi-arrow-clockwise" style="margin-right: 20px; font-size: 25px;" @click="refreshPage"></i>
        <i class="bi bi-funnel" style="margin-right: 20px; font-size: 24px;" @click="sortTodosByDueDate('asc')"></i>
        <i class="bi bi-clock-history" style="margin-right: 20px; font-size: 24px;" @click="openModal('1')"></i>
        <button id="toDoListAddBtn" class="btn fw-bold btn-dark" @click="openModalAdd" style="margin-right: 50px;">+ Add new task</button>
      </div>
  </div>
</div>
    <section class="content">
            <div class="row">
              <!-- To do List --------------------------------------------------------------------------------------------------->
              <div id="to-do-list-col" class="col-lg-4 border">
                <div class="d-flex mt-4 mx-5 justify-content-between">
                  <p class="text-secondary" style="font-size: 20px;">To Do❗</p>
                </div>
                <div v-for="todo in state.todos" :key="todo._id">
                  <div v-if="todo.t_priority === 'High'">
                <div class="card my-4 mx-5 col">
                  <div class="card-body">
                    <span> <i class="bx bx-edit bx-pull-right icon text-secondary" style="font-size: 20px;" @click="openEditModal(todo)"></i> </span>
                    <h5 class="card-title fw-bold">
                      {{todo.t_name}}
                    </h5>
                    <h5 class="card-subtitle text-secondary">
                      {{todo.t_description}}
                    </h5>
                    <div class="progress-state my-2">
                      <i class="bx bx-list-ul icon"></i>
                      <span class="text-secondary">Progress</span>
                      <span class="bx-pull-right float-end fw-bold">{{todo.t_progress}}/10</span>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        :class="{
                          'bg-danger': todo.t_progress >= 0 && todo.t_progress <= 3,
                          'bg-warning': todo.t_progress >= 4 && todo.t_progress <= 6,
                          'bg-success': todo.t_progress >= 7 && todo.t_progress <= 10
                          }"
                        role="progressbar"
                        :style="{ width: todo.t_progress*10 + '%' }"
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
                            :style="{ color: getPriorityColor(todo.t_priority) }"
                            >{{todo.t_due_date.slice(0, 10)}}</span
                          >
                        </p>
                      </div>
                      <div class="">
                        <p class="card-priority mt-1">
                          <span class="badge bg-body-secondary circle mr-2"
                                :style="{ color: getPriorityColor(todo.t_priority) }">
                                {{ todo.t_priority }} Priority
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
  <div class="modal fade" id="modal2"  tabindex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="taskModalLabel">Modify Task Information 🖌️</h5>
            
          </div>
          <div class="modal-body" v-if="selectedTodo">
            <form>
              <div class="mb-3">
                <label for="modalTaskName" class="form-label">{{ selectedTodo.t_name }}</label>
                <br>
                <input type="text" class="form-control" v-model="state.EditT_name" placeholder="New task name" >
              </div>
              <div class="mb-3">
                <label for="modalTaskDesc" class="form-label"
                  >Task Description</label
                >
                <input type="text" class="form-control" placeholder="Task Description" >
              </div>
              <div class="mb-3">
                <label for="modalTaskProgress">Task Progress (1-10)</label>
                <input
                  type="range"
                  class="form-range"
                  min="0"
                  max="100"
                  step="10"
                  id="modalTaskProgress"
                  
                />
              </div>
              <div class="mb-3">
                <label for="modalTaskDueDate" class="form-label"
                  >Task Due Date</label
                >
                <input type="text" class="form-control" placeholder="YEAR-MM-DD" >
              </div>
              <div class="mb-3">
                <label for="modalTaskPriority">Task Priority</label>
                <select class="form-select" id="modalTaskPriority">
                  <option value="Low Priority">Low</option>
                  <option value="Medium Priority">Medium</option>
                  <option value="High Priority">High</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" id="modalCloseBtn" @click="closeModal('2')" class="btn btn-secondary"> Close </button>
            <div id="button-container">
              <button  type="button" id="modalSaveBtn" @click="editTodo" class="btn btn-success">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

              </div>
              </div>
                

              <!-- In Progress  ---------------------------------------------------------------------------------------------->
              <div id="to-do-list-col" class="col-lg-4 border">
                <div class="d-flex mt-4 mx-5 justify-content-between">
                  <p class="text-secondary" style="font-size: 20px;">In Progress ✏️</p>
                </div>
                <div v-for="todo in state.todos" :key="todo._id">
                  <div v-if="todo.t_priority === 'Medium'">
                  <div class="card my-4 mx-5 col">
                    <div class="card-body">
                      <span>
                        <a href="#"> <i class="bx bx-edit bx-pull-right icon text-secondary" style="font-size: 20px;" @click="openModal('2')" ></i> </a>
                      </span>
                      <h5 class="card-title fw-bold">
                        {{todo.t_name}}
                      </h5>
                      <h5 class="card-subtitle text-secondary">
                        {{todo.t_description}}
                      </h5>
                      <div class="progress-state my-2">
                        <i class="bx bx-list-ul icon"></i>
                        <span class="text-secondary">Progress</span>
                        <span class="bx-pull-right float-end fw-bold">{{todo.t_progress}}/10</span>
                      </div>
                      <div class="progress" style="height: 3px">
                        <div
                          :class="{
                            'bg-danger': todo.t_progress >= 0 && todo.t_progress <= 3,
                            'bg-warning': todo.t_progress >= 4 && todo.t_progress <= 6,
                            'bg-success': todo.t_progress >= 7 && todo.t_progress <= 10
                            }"
                          role="progressbar"
                          :style="{ width: todo.t_progress*10 + '%' }"
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
                              :style="{ color: getPriorityColor(todo.t_priority) }"
                              >{{todo.t_due_date.slice(0, 10)}}</span
                            >
                          </p>
                        </div>
                        <div class="">
                          <p class="card-priority mt-1">
                            <span class="badge bg-body-secondary circle mr-2"
                                  :style="{ color: getPriorityColor(todo.t_priority) }">
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

              <!-- Done---------------------------------------------------------------------------------------------------------- -->
              <div id="to-do-list-col" class="col-lg-4 border">
                <div class="d-flex mt-4 mx-5 justify-content-between">
                  <p class="text-secondary" style="font-size: 20px;">Done ✅</p>
                </div>
                <div v-for="todo in state.todos" :key="todo._id">
                  <div v-if="todo.t_priority === 'Low' && isDueDateLessThanThreeDays(todo)">
                  <div class="card my-4 mx-5 col">
                  <div class="card-body">
                    <span>
                      <a href="#">
                        <i
                          class="bx bx-edit bx-pull-right icon text-secondary" style="font-size: 20px;" @click="openModal('2')"
                        ></i>
                      </a>
                    </span>
                    <h5 class="card-title fw-bold">
                      {{todo.t_name}}
                    </h5>
                    <h5 class="card-subtitle text-secondary">
                      {{todo.t_description}}
                    </h5>
                    <div class="progress-state my-2">
                      <i class="bx bx-list-ul icon"></i>
                      <span class="text-secondary">Progress</span>
                      <span class="bx-pull-right float-end fw-bold">{{todo.t_progress}}/10</span>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        :class="{
                          'bg-danger': todo.t_progress >= 0 && todo.t_progress <= 3,
                          'bg-warning': todo.t_progress >= 4 && todo.t_progress <= 6,
                          'bg-success': todo.t_progress >= 7 && todo.t_progress <= 10
                          }"
                        role="progressbar"
                        :style="{ width: todo.t_progress*10 + '%' }"
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
                            :style="{ color: getPriorityColor(todo.t_priority) }">{{todo.t_due_date.slice(0, 10)}}</span>
                        </p>
                      </div>
                      <div class="">
                        <p class="card-priority mt-1">
                          <span class="badge bg-body-secondary circle mr-2"
                                :style="{ color: getPriorityColor(todo.t_priority) }">{{ todo.t_priority }} Priority</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
                  </div>
                </div>

            </div>
    </section>

    <section>
      <div>
      <!-- Add Task Modal -->
      <div class="modal fade" id="modal_demo" tabindex="-1" aria-labelledby="modal_demo_label" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="taskModalLabel">
                  New Task Name
              </h5>
            </div>
            <div class="modal-body">
              <form>
                <div class="mb-3">
                  <label for="modalTaskName" class="form-label">Task Name</label>
                  <input type="text" class="form-control" id="modalTaskName" v-model="state.NewT_name" placeholder="Enter Task Name" />
                </div>
                <div class="mb-3">
                  <label for="modalTaskDesc" class="form-label"
                    >Task Description</label
                  >
                  <input type="text" class="form-control" id="modalTaskDesc" v-model="state.NewT_description" placeholder="Enter Task Description"/>
                </div>
                <div class="mb-3">
                  <label for="modalTaskProgress">Task Progress (1-10)</label>
                  <input
                    type="range"
                    class="form-range"
                    min="0"
                    max="10"
                    step="1"
                    id="modalTaskProgress"
                    v-model="state.NewT_progress"
                  />
                </div>
                <div class="mb-3">
                  <label for="modalTaskDueDate" class="form-label"
                    >Task Due Date</label
                  >
                  <input type="text" class="form-control" id="modalTaskDueDate" v-model="state.NewT_due_date" placeholder="YYYY-MM--DD"/>
                </div>
                <div class="mb-3">
                  <label for="modalTaskPriority">Task Priority</label>
                  <select class="form-select" id="modalTaskPriority" v-model="state.NewT_priority">
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </select>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"  @click="closeModalAdd">Close</button>
              <button type="button" class="btn btn-success" @click="saveAndClose">Add task</button>
              <!-- <button type="button" class="btn btn-success" @click="getUserId">getUserId</button> -->
            </div>
          </div>
        </div>
      </div>
      </div>

       <!-- History modal ---------------------------------------------------------------------------------------------------------- -->
    <div class="modal" tabindex="-1" role="dialog" id="modal1">
      <div class="modal-dialog model-lg" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">History ⏳</h5>
            <i class="bi bi-x" style="font-size: 30px;" @click="closeModal('1')">
              </i>
          </div>
          <div class="modal-body">
            <div v-for="todo in state.todos" :key="todo._id">
                  <div v-if="todo.t_priority === 'Low'">
                  <div class="card my-4 mx-5 col">
                  <div class="card-body">
                    <h5 class="card-title fw-bold">
                      {{todo.t_name}}
                    </h5>
                    <h5 class="card-subtitle text-secondary">
                      {{todo.t_description}}
                    </h5>
                    <div class="progress-state my-2">
                      <i class="bx bx-list-ul icon"></i>
                      <span class="text-secondary">Progress</span>
                      <span class="bx-pull-right float-end fw-bold">{{todo.t_progress}}/10</span>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        :class="{
                          'bg-danger': todo.t_progress >= 0 && todo.t_progress <= 3,
                          'bg-warning': todo.t_progress >= 4 && todo.t_progress <= 6,
                          'bg-success': todo.t_progress >= 7 && todo.t_progress <= 10
                          }"
                        role="progressbar"
                        :style="{ width: todo.t_progress*10 + '%' }"
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
                            :style="{ color: getPriorityColor(todo.t_priority) }"
                            >{{todo.t_due_date.slice(0, 10)}}</span
                          >
                        </p>
                      </div>
                      <div class="">
                        <p class="card-priority mt-1">
                          <span class="badge bg-body-secondary circle mr-2"
                                :style="{ color: getPriorityColor(todo.t_priority) }">
                                {{ todo.t_priority }} Priority
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                  </div>
                  </div>
                  </div>
          <div class="modal-footer">
          </div>
        </div>
      </div>
      </div>
    </div>

    <!-- Edit Modal -->
    



    </section>
</section>
</template>

<script>
  import todocrud from '../modules/todocrud';
  import { onMounted } from 'vue';
  import $ from 'jquery';
  import { createApp, ref } from 'vue';
  const bootstrap = require('bootstrap');

const app1 = createApp({
  setup() {
    const modalTitle = ref('Add New Task');
    const taskName = ref('');
    const taskDesc = ref('');
    const taskProgress = ref('');  
    const taskDueDate = ref('');
    const taskPriority = ref('');
    const taskStatus = ref('');
    const selectedTodo = ref(null); // Initialize with null

    const openModalAdd = () => {
      modalTitle.value = 'Add New Task';
      taskName.value = '';
      taskDesc.value = '';
      taskProgress.value = '';
      taskDueDate.value = '';
      taskPriority.value = '';
      taskStatus.value = '';
      let modal = new modal(document.getElementById('taskModal'));
      modal.show();
 
    };

    const openEditModal = () => {
      taskName.value = '';

      // Function to set the selected todo
      const selectTodo = (todo) => {
      selectedTodo.value = todo;
      };

      // Example usage:
      const todo = { t_name:todo.t_name };
      selectTodo(todo);

      selectedTodo.value = todo; // Set the selectedTodo value
      let modal = new modal(document.getElementById('modal2'));
      modal.show();
    };
  
    return {
      modalTitle,
      openEditModal,
      selectedTodo,
      taskName,
      taskDesc,
      taskDueDate,
      openModalAdd
    };
  }
})
app1.mount('#app1');

// const app2 = createApp({
//   setup() {
//     const selectedTodo = ref(null); // Initialize with null

//     // Function to set the selected todo
//       const selectTodo = (todo) => {
//       selectedTodo.value = todo;
//       };

//       // Example usage:
//       const todo = { t_name:todo.t_name };
//       selectTodo(todo);
//     };

//     const openEditModal = (todo) => {
//     selectedTodo.value = todo; // Set the selectedTodo value
//     let modal = new modal(document.getElementById('modal2'));
//     modal.show();
//   };
//   }
//     });

// app2.mount('#app2');

// createApp({
//   setup() {
//     const modalTitle = ref('Add New Task');
//     const taskName = ref('');
//     const taskDesc = ref('');
//     const taskProgress = ref('');  
//     const taskDueDate = ref('');
//     const taskPriority = ref('');
//     const taskStatus = ref('');

//     const openModalEdit = (todo) => {
//       modalTitle.value = 'Add New Task';
//       taskName.value = todo.t_name;
//       taskDesc.value = todo.t_description;
//       taskProgress.value = todo.t_progress;  
//       taskDueDate.value = todo.t_due_date;
//       taskPriority.value = todo.t_priority;
//       taskStatus.value = todo.t_status;
//       let modal = new modal(document.getElementById('editModal'));
   
//       modal.show();
//     };
  
//     return {
//       modalTitle,
//       taskName,
//       taskDesc,
//       taskDueDate,
//       openModalEdit
//     };
//   }
// }).mount('#app');


  export default {

    mounted() {
          this.modal_demo = new bootstrap.Modal('#modal_demo', {});
          this.hideModalAdd();
        },
   
    methods: {

      openEditModal(todo) {
        this.state.EditT_name = todo.t_name;
        this.modal_demo.show();
          },

      openModalAdd() {
            this.modal_demo.show();
          },
          closeModalAdd() {
            this.modal_demo.hide();
          },
          hideModalAdd() {
            this.modal_demo.hide();
          },
          saveChanges() {   
            // Clear input fields
            this.state.NewT_name = '';
            this.state.NewT_description = '';
            this.state.NewT_progress = '';
            this.state.NewT_due_date = '';
            this.state.NewT_priority = '';
          },
          saveAndClose() {
            this.newTodo(); // Call the newTodo method
            this.saveChanges(); // Call the saveChanges method
            this.modal_demo.hide(); // Call the closeModal method
          },

      refreshPage() {
         location.reload();
      },
      sortTodosByDueDate(order) {
    this.state.todos.sort((a, b) => {
      const dateA = new Date(a.t_due_date);
      const dateB = new Date(b.t_due_date);
      return order === 'asc' ? dateA - dateB : dateB - dateA;
    });
  },
  // ...

  //   openModalEdit(todo) {
  //   // Set the values of the input fields with the selected todo's data
  //   this.taskName = todo.t_name;
  //   console.log(todo.t_name)
  //   this.taskDesc = todo.t_description;
  //   this.taskDueDate = todo.t_due_date;
  //   this.taskPriority = todo.t_priority;
  //   this.taskStatus = todo.t_status;
  //   // Open the modal using jQuery
  //   $('#editModal').modal('show');
  // },
    openModal(modalId) {
      // Open the specified modal using jQuery
      $(`#modal${modalId}`).modal('show');
    },
    closeModal(modalId) {
      // Close the specified modal using jQuery
      $(`#modal${modalId}`).modal('hide');
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
    }
  },
    setup() {

      const { state, GetAllTodos, newTodo, deleteTodo, editTodo, GetTodoInProgress,GetSpecificTodo, GetTodoDone,GetTodoNow} = todocrud()

      GetSpecificTodo()

      onMounted(() => {
        GetAllTodos()
      })

    const getPriorityColor = (priority) => {
      if (priority === 'Low') {
        return '#78d700';
      } else if (priority === 'Medium') {
        return '#ffa048';
      } else if (priority === 'High') {
        return '#ff7979';
      }
      return '';
    };

      return { state, GetAllTodos, newTodo, deleteTodo, editTodo,GetTodoInProgress, GetTodoDone,GetTodoNow,getPriorityColor}
    },
        name : 'TodosComponent',
    }
</script>
<style>
  
</style>