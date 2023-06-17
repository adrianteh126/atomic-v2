<template >
    <!-- Top Bar with Username -->
    <section class="header">
            <div class="row border-bottom py-2">
              <div class="col-4">
                <h5 class="fw-bold mx-4 mt-2">{{ currentUserName }}'s Atomic</h5>
              </div>
              <div class="col-8">
                <div class="d-flex justify-content-end align-items-center">
                  <i class="mx-2 bx bx-bell" style="font-size: 20px" @click="openModal('3')" ></i>
                  <h6 class="mx-2 mt-2 text-secondary">{{ currentDate }}</h6>
                  <div
                    class="mx-3 pp"
                  >
                    <img
                     :src="currentUserImageUrl"
                      alt="your_image_alt_text"
                    />
                  </div>
                </div>
              </div>
            </div>
    </section>

    <!-- Reminder modal -->
    <div class="modal fade" id="modal3">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title"> Your due date is approaching. Don't forget to complete your task on time! ⏰</h5>
            <i class="bi bi-x" style="font-size: 30px;" @click="closeModal('3')"></i>
          </div>
          <div v-for="todo in state.todos" :key="todo._id">
                  <div v-if="todo.t_priority === 'High' && isDueDateLessThanThreeDays(todo)">
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

    
</template>
<script>
import { onMounted, ref, watch  } from 'vue';
import $ from 'jquery';
import todocrud from '../modules/todocrud';

export default {
    name : 'TopBar',

    methods: {

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
      return differenceInDays < 3;
    }

    },
    props: ['currentUserName','currentUserImageUrl'],
    setup(props) {
      const currentDate = ref('');
      
      onMounted(() => {
        setCurrentDate(currentDate);
        startUpdatingCurrentDate(currentDate);
      });

      // Watch for changes in currentUserName
      watch(() => {
        props.currentUserName;
        props.currentUserImageUrl; 
      },
      () => {
        // Perform any action when currentUserName changes
        console.log('Current User Name in topbar:', props.currentUserName);
        console.log('Current User Image Url in topbar:', props.currentUserImageUrl);
      });

      const setCurrentDate = (dateRef) => {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        dateRef.value = date.toLocaleDateString('en-US', options);
      };

      const startUpdatingCurrentDate = (dateRef) => {
        setInterval(() => {
          setCurrentDate(dateRef);
        }, 1000); // Update every 1 second
      };

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

      return { state, GetAllTodos, newTodo, deleteTodo, currentDate, editTodo,GetTodoInProgress,GetTodoDone,GetTodoNow,getPriorityColor}
      
    },
}
</script>
<style>
  .pp {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    overflow: hidden;
  }
  .pp > img {
    width: 100%; 
    height: 100%; 
    object-fit: cover
  }
</style>