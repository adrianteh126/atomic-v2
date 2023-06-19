<template>
  <!-- <p>modalComponentRef :</p>
  <p>{{ modalComponentRef }}</p> -->

  <!-- <p>state.todos :</p>
  <p>{{ state.todos }}</p> -->

  <!-- Header with utility button at right -->
  <div>
  <div class="d-flex justify-content-between align-items-center">
      <h5 class="p-3 ps-3 mx-2 fw-bold ">Dashboard 📝</h5>
      <div class="col-8">
          <div class="d-flex justify-content-end align-items-center">
          <i class="bi bi-arrow-clockwise" style="margin-right: 20px; font-size: 25px;" @click="refreshPage"></i>
          <i
              v-if="!toggleSort"
              class="bi bi-funnel"
              style="margin-right: 20px; font-size: 24px;"
              @click="sortTodosByDueDate('asc')"
          ></i>
          <i
              v-else
              class="bi bi-funnel-fill"
              style="margin-right: 20px; font-size: 24px;"
              @click="sortTodosByDueDate('asc')"
          ></i>
          <i class="bi bi-clock-history" style="margin-right: 20px; font-size: 24px;" @click="showModal('history')"></i>
          <button id="toDoListAddBtn" class="btn fw-bold btn-dark" @click="showModal('new')" style="margin-right: 50px;">+ Add new task</button>
          </div>
      </div>
  </div>

  <div class="content">
      <div class="row">
          <!-- To do -->
          <div id="to-do-list-col" class="col-lg-4 ">
              <div class="d-flex mt-2 mx-5 justify-content-between">
                  <p class="text-secondary" style="font-size: 20px;">To Do❗</p>
              </div>
              <div v-for="todo in state.todos" :key="todo._id">
                  <div v-if="todo.t_progress ===0">
                      <div class="card my-4 mx-5 col">
                          <div class="card-body">
                              <!-- Edit task button -->
                              <span> 
                                  <i class="bx bx-edit bx-pull-right icon text-secondary" style="font-size: 20px;" @click="showModal('edit',todo)"></i> 
                              </span>
                              <!-- Title & Description -->
                              <h5 class="card-title fw-bold">
                                  {{todo.t_name}}
                              </h5>
                              <h5 class="card-subtitle text-secondary">
                                  {{todo.t_description}}
                              </h5>
                              <!-- Progress bar -->
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
                              <!-- Date & Task priority -->
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

          <!-- In Progress  -->
          <div id="to-do-list-col" class="col-lg-4 ">
              <div class="d-flex mt-2 mx-5 justify-content-between">
                  <p class="text-secondary" style="font-size: 20px;">In Progress ✏️</p>
              </div>
              <div v-for="todo in state.todos" :key="todo._id">
                  <div v-if="todo.t_progress > 1 && todo.t_progress<10">
                      <div class="card my-4 mx-5 col">
                          <div class="card-body">
                              <!-- Edit task button -->
                              <span> 
                                  <i class="bx bx-edit bx-pull-right icon text-secondary" style="font-size: 20px;" @click="showModal('edit',todo)"></i> 
                              </span>
                              <!-- Title & Description -->
                              <h5 class="card-title fw-bold">
                                  {{todo.t_name}}
                              </h5>
                              <h5 class="card-subtitle text-secondary">
                                  {{todo.t_description}}
                              </h5>
                              <!-- Progress bar -->
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
                              <!-- Date & Task priority -->
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

          <!-- Done -->
          <div id="to-do-list-col" class="col-lg-4 ">
              <div class="d-flex mt-2 mx-5 justify-content-between">
                  <p class="text-secondary" style="font-size: 20px;">Done ✅</p>
              </div>
              <div v-for="todo in state.todos" :key="todo._id">
                  <div v-if="todo.t_progress === 10 && isDueDateLessThanThreeDays(todo)">
                      <div class="card my-4 mx-5 col">
                          <div class="card-body">
                              <!-- Edit task button -->
                              <span> 
                                  <i class="bx bx-edit bx-pull-right icon text-secondary" style="font-size: 20px;" @click="showModal('edit',todo)"></i> 
                              </span>
                              <!-- Title & Description -->
                              <h5 class="card-title fw-bold">
                                  {{todo.t_name}}
                              </h5>
                              <h5 class="card-subtitle text-secondary">
                                  {{todo.t_description}}
                              </h5>
                              <!-- Progress bar -->
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
                              <!-- Date & Task priority -->
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
  </div>

  <!-- Include the child component -->
  <modal-component ref="modalComponentRef">
  </modal-component>
</div>
</template>

<script setup>
import { ref,onMounted } from 'vue';
import ModalComponent from './ModalComponent.vue';
import todocrud from '../modules/todocrud'

const modalComponentRef = ref('null'); // Create a ref for the child component
const toggleSort = ref(false); 

const { state, GetAllTodos, GetSpecificTodo  } = todocrud()

// Refresh icon : refresh current page
const refreshPage = () => {
  location.reload();
}

// Sort icon : sort the todos by due date
const sortTodosByDueDate = (order) => {
  toggleSort.value = !toggleSort.value;
  if (toggleSort.value) {
      state.value.todos.sort((a, b) => {
      const dateA = new Date(a.t_due_date);
      const dateB = new Date(b.t_due_date);
      return order === 'asc' ? dateA - dateB : dateB - dateA;
      });
  } else {
      state.value.todos.sort((a, b) => {
      const dateA = new Date(a.t_due_date);
      const dateB = new Date(b.t_due_date);
      return order === 'dsc' ? dateA - dateB : dateB - dateA;
      });
  }
}
  
GetSpecificTodo() //not sure for what
  
const showModal = (type,todo) => {
  console.log('Dashboard.vue : Call '+ type + " Modal");
  if (todo) {
      console.log('Dashboard.vue : Selected Todo -'+JSON.stringify(todo));
      modalComponentRef.value.getTodo(todo); // Set the received todo object value in modal
  }
  modalComponentRef.value.showModal(type); // Call the child component's toggleModal method
};

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

const isDueDateLessThanThreeDays = ref((todo) => {
  // Parse the due date from the string format
  const dueDate = new Date(todo.t_due_date);

  // Get the current date
  const currentDate = new Date();

  // Calculate the difference between the due date and the current date
  const differenceInTime = dueDate.getTime() - currentDate.getTime();
  const differenceInDays = differenceInTime / (1000 * 3600 * 24);

  // Return true if the difference is less than 3 days, otherwise false
  return differenceInDays >= -3;
});

onMounted(() => {
  GetAllTodos();
});

</script>
