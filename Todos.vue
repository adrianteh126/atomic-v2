<template>
<section>
<div class="d-flex justify-content-between align-items-center">
  <h4 class="p-4 fw-bold">Dashboard📝</h4>
  <button id="toDoListAddBtn" class="btn fw-bold btn-dark" style="margin-right: 50px;">+ Add new task</button>
</div>
    <section class="content">
            <div class="row">
              <!-- To do List --------------------------------------------------------------------------------------------------->
              <div id="to-do-list-col" class="col-lg-4 border">
                <div class="d-flex mt-4 mx-5 justify-content-between">
                  <p class="text-secondary">To Do</p>
                </div>
                <div v-for="todo in state.todos" :key="todo._id">
                  <div v-if="todo.t_priority === 'High'">
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
              </div>
                

              <!-- In Progress  ---------------------------------------------------------------------------------------------->
              <div id="to-do-list-col" class="col-lg-4 border">
                <div class="d-flex mt-4 mx-5 justify-content-between">
                  <p class="text-secondary">In Progress</p>
                </div>
                <div v-for="todo in state.todos" :key="todo._id">
                  <div v-if="todo.t_priority === 'Medium'">
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
              </div>

              <!-- Done---------------------------------------------------------------------------------------------------------- -->
              <div id="to-do-list-col" class="col-lg-4 border">
                <div class="d-flex mt-4 mx-5 justify-content-between">
                  <p class="text-secondary">Done</p>
                </div>
                <div v-for="todo in state.todos" :key="todo._id">
                  <div v-if="todo.t_priority === 'Low' && isDueDateLessThanThreeDays(todo)">
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
                </div>
            </div>
    </section>
</section>
</template>

<script>
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
        name : 'TodosComponent',
    }
</script>
<style>
  
</style>