<template>
    <!-- Side Navbar -->
    <SideNavBar/>
    <!-- The To-Do-List Body -->
    <section class="home">
      <div class="container-fluid">
        <div class="row"> 
          <!-- Header -->
          <TopBar :currentUserID="currentUserID"/>
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
                <input type="text" class="form-control" id="modalTaskName" />
              </div>
              <div class="mb-3">
                <label for="modalTaskDesc" class="form-label"
                  >Task Description</label
                >
                <input type="text" class="form-control" id="modalTaskDesc" />
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
                  value="0"
                />
              </div>
              <div class="mb-3">
                <label for="modalTaskDueDate" class="form-label"
                  >Task Due Date</label
                >
                <input type="text" class="form-control" id="modalTaskDueDate" />
              </div>
              <div class="mb-3">
                <label for="modalTaskPriority">Task Priority</label>
                <select class="form-select" id="modalTaskPriority">
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
              <button type="button" id="modalSaveBtn" class="btn btn-success">
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
          <!-- card 1 -->
          <div class="p-3">
            <div class="card-body border border-1 p-3 rounded-3">
              <h5 class="card-title fw-bold">Mid Term test for WIA2004</h5>
              <h5 class="card-subtitle text-secondary">
                Lecture 1 - Lecture 4
              </h5>
              <div class="progress-state my-2">
                <i class="bx bx-list-ul icon"></i>
                <span class="text-secondary">Progress</span>
                <span class="bx-pull-right float-end fw-bold">1/10</span>
              </div>
              <div class="progress" style="height: 3px">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 10%"
                  aria-valuenow="10"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="d-flex gap-1">
                <div class="">
                  <p class="card-text mt-1">
                    <span
                      class="badge bg-body-secondary circle mr-2"
                      style="color: #ff7979"
                      >4 May 2023</span
                    >
                  </p>
                </div>
                <div class="">
                  <p class="card-priority mt-1">
                    <span
                      class="badge bg-body-secondary circle mr-2"
                      style="color: #ff7979"
                      >High Priority</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- card 2 -->
          <div class="p-3">
            <div class="card-body border border-1 p-3 rounded-3">
              <h5 class="card-title fw-bold">Submission of TCS tutorial</h5>
              <h5 class="card-subtitle text-secondary">TCS tutorial 3 & 4</h5>
              <div class="progress-state my-2">
                <i class="bx bx-list-ul icon"></i>
                <span class="text-secondary">Progress</span>
                <span class="bx-pull-right float-end fw-bold">3/10</span>
              </div>
              <div class="progress" style="height: 3px">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 30%"
                  aria-valuenow="30"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="d-flex gap-1">
                <div class="">
                  <p class="card-text mt-1">
                    <span
                      class="badge bg-body-secondary circle mr-2"
                      style="color: #ff7979"
                      >5 May 2023</span
                    >
                  </p>
                </div>
                <div class="">
                  <p class="card-priority mt-1">
                    <span
                      class="badge bg-body-secondary circle mr-2"
                      style="color: #ff7979"
                      >High Priority</span
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
          <!-- card 3 -->
          <div class="p-3">
            <div class="card-body border border-1 p-3 rounded-3">
              <h5 class="card-title fw-bold">Design new UI presentation</h5>
              <h5 class="card-subtitle text-secondary">Web Programming 1</h5>
              <div class="progress-state my-2">
                <i class="bx bx-list-ul icon"></i>
                <span class="text-secondary">Progress</span>
                <span class="bx-pull-right float-end fw-bold">2/10</span>
              </div>
              <div class="progress" style="height: 3px">
                <div
                  class="progress-bar bg-danger"
                  role="progressbar"
                  style="width: 20%"
                  aria-valuenow="20"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              <div class="d-flex gap-1">
                <div class="">
                  <p class="card-text mt-1">
                    <span
                      class="badge bg-body-secondary circle mr-2"
                      style="color: #ff7979"
                      >5 May 2023</span
                    >
                  </p>
                </div>
                <div class="">
                  <p class="card-priority mt-1">
                    <span
                      class="badge bg-body-secondary circle mr-2"
                      style="color: #ff7979"
                      >High Priority</span
                    >
                  </p>
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

  export default {
      components: { SideNavBar, TopBar },
      data() {
        return {
          currentUserID: null          
        }
      },
      mounted() {
        //check current userID using JWT token
        fetch('http://localhost:3000/checkUser', {
          method: 'GET',
          credentials: 'include' // Include this option to send cookies
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response data
            this.currentUserID = data._id;
            console.log('CurrentUserID = ' + data._id);
          })
          .catch(error => {
            // Handle any errors
            console.error('Error:', error);
          });


        // // Retrieve the JWT token from cookies
        // const cookies = document.cookie.split(';');
        // const JWTToken = cookies.find(cookie => cookie.trim().startsWith('jwt='));

        // // Request with the JWT token included in the headers
        // fetch('http://localhost:3000/authUser', {
        //   method: 'GET',
        //   credentials: 'include',
        //   headers: {
        //     Authorization: `Bearer ${JWTToken}`
        //   }
        // })
        //   .then(response => {
        //     if (response.ok) {
        //       // Handle the successful response
        //       return response.json();
        //     } else {
        //       location.assign('/login');
        //       // throw new Error('Request failed.');
        //     }
        //   })
        //   .then(data => {
        //     // Handle the response data
        //     console.log(data);
        //   })
        //   .catch(error => {
        //     // Handle any errors that occurred during the request
        //     console.error('Request error: ', error);
        //   });

      },

    };
  </script>

  
  
  <style>
    @import '../assets/css/dashboard.css';
    @import 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css';
  </style>