<template>
    <!-- Side Navbar -->
    <SideNavBar/>
    <!-- The To-Do-List Body -->
    <section class="home">
      <div class="container-fluid">
        <div class="row"> 
          <!-- Header -->
          <TopBar/>
          <!-- The Dashboard Body(Todos, Settings & Statistic) -->
          <router-view></router-view>
        </div>
      </div>
    </section>

    <!-- Task modal -->
    <div
      class="modal fade"
      id="taskModal"
      tabindex="-1"
      aria-labelledby="taskModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="taskModalLabel">
              Modify Task Information
            </h5>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="modalTaskName" class="form-label">Task Name</label>
                <br>
                <input type="text" class="form-control" placeholder="Task Name" v-model="state.newt_name">
              </div>
              <div class="mb-3">
                <label for="modalTaskDesc" class="form-label"
                  >Task Description</label
                >
                <input type="text" class="form-control" placeholder="Task Description" v-model="state.newt_description">
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
                  v-model="t_progress"
                />
              </div>
              <div class="mb-3">
                <label for="modalTaskDueDate" class="form-label"
                  >Task Due Date</label
                >
                <input type="text" class="form-control" placeholder="YEAR-MM-DD" v-model="state.newt_due_date">
              </div>
              <div class="mb-3">
                <label for="modalTaskPriority">Task Priority</label>
                <select class="form-select" id="modalTaskPriority" v-model="state.newt_priority">
                  <option value="Low Priority">Low Priority</option>
                  <option value="Medium Priority">Medium Priority</option>
                  <option value="High Priority">High Priority</option>
                </select>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              id="modalCloseBtn"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <div id="button-container">
              <button @click="editTodo()" type="button" id="modalSaveBtn" class="btn btn-success">
                Save changes
              </button>
              <button type="button" id="modalAddBtn" class="btn btn-success">
                Add Task
              </button>
              <button type="button" id="modalDltBtn" class="btn btn-danger">
                Delete Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Reminder modal -->
    <div class="modal fade" id="reminderModal">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              Your due date is approaching. Don't forget to complete your task
              on time!
            </h5>
          </div>
          <div v-for="todo in state.todos" :key="todo._id">
                  <div v-if="todo.t_priority === 'High' && isDueDateLessThanThreeDays(todo)">
                  <div class="card my-4 mx-5 col">
                  <div class="card-body">
                    <span>
                      <a href="#">
                        <i
                          class="bx bx-edit bx-pull-right icon text-secondary"
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
            <button
              type="button"
              class="btn btn-default"
              data-dismiss="modal"
              id="closeReminderModal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
  import SideNavBar from '@/components/SideNavBar.vue';
  import TopBar from '@/components/TopBar.vue';
    import todocrud from '../modules/todocrud';
  import { onMounted } from 'vue';

  export default {

    methods: {
    isDueDateLessThanThreeDays(todo) {
      // Parse the due date from the string format
      const dueDate = new Date(todo.t_due_date);

      // Get the current date
      const currentDate = new Date();

      // Calculate the difference between the due date and the current date
      const differenceInTime = dueDate.getTime() - currentDate.getTime();
      const differenceInDays = differenceInTime / (1000 * 3600 * 24);

      // Return true if the difference is less than 3 days, otherwise false
      return differenceInDays < 3;
    }
  },
    setup() {

      const { state, GetAllTodos, newTodo, deleteTodo, editTodo, GetTodoInProgress,GetTodoDone,GetTodoNow} = todocrud()


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

      return { state, GetAllTodos, newTodo, deleteTodo, editTodo,GetTodoInProgress,GetTodoDone,GetTodoNow,getPriorityColor}
    },
      components : {
        SideNavBar,
        TopBar,

      }
    }
  </script>
  
  <style>
    @import '../assets/css/dashboard.css';
    @import 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
  </style>