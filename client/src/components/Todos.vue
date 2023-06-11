<template >
    <section class="content">
            <div class="row">
              <!-- To do List --------------------------------------------------------------------------------------------------->
              <div id="to-do-list-col" class="col-lg-4 border">
                <div class="d-flex mt-4 mx-5 justify-content-between">
                  <p class="text-secondary">To Do</p>
                  <button id="toDoListAddBtn" class="btn fw-bold btn-dark">
                    + Add new task
                  </button>
                </div>
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
                      Mid Term test for WIA2004
                    </h5>
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
                      Submission of TCS tutorial
                    </h5>
                    <h5 class="card-title text-secondary">
                      TCS tutorial 3 & 4
                    </h5>
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
                      Design new UI presentation
                    </h5>
                    <h5 class="card-title text-secondary">Web Programming 1</h5>
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
              </div>

              <!-- In Progress  ---------------------------------------------------------------------------------------------->
              <div id="in-progress-col" class="col-lg-4 border">
                <div class="d-flex mt-4 mx-5 justify-content-between">
                  <p class="text-secondary">In Progress</p>
                  <button id="inProgressAddBtn" class="btn fw-bold btn-dark">
                    + Add new task
                  </button>
                </div>
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
                      Create infographic for WIA2004
                    </h5>
                    <h5 class="card-title text-secondary">
                      2 pages infographic
                    </h5>
                    <div class="progress-state my-2">
                      <i class="bx bx-list-ul icon"></i>
                      <span class="text-secondary">Progress</span>
                      <span class="bx-pull-right float-end fw-bold">6/10</span>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style="width: 60%"
                        aria-valuenow="60"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="d-flex gap-1">
                      <div class="">
                        <p class="card-text mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #ffa048"
                            >7 May 2023</span
                          >
                        </p>
                      </div>
                      <div class="">
                        <p class="card-priority mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #ffa048"
                            >Medium Priority</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card my-4 mx-5 col">
                  <div class="card-body">
                    <span>
                      <a href="#">
                        <i
                          class="bx bx-edit bx-pull-right icon text-secondary"
                        ></i>
                      </a>
                    </span>
                    <h5 class="card-title fw-bold">Add new Linkedin post</h5>
                    <h5 class="card-title text-secondary">2 posts per week</h5>
                    <div class="progress-state my-2">
                      <i class="bx bx-list-ul icon"></i>
                      <span class="text-secondary">Progress</span>
                      <span class="bx-pull-right float-end fw-bold">5/10</span>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style="width: 50%"
                        aria-valuenow="50"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="d-flex gap-1">
                      <div class="">
                        <p class="card-text mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #ffa048"
                            >10 May 2023</span
                          >
                        </p>
                      </div>
                      <div class="">
                        <p class="card-priority mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #ffa048"
                            >Medium Priority</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

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
                      Register a new SAP account
                    </h5>
                    <h5 class="card-title text-secondary">learn new things</h5>
                    <div class="progress-state my-2">
                      <i class="bx bx-list-ul icon"></i>
                      <span class="text-secondary">Progress</span>
                      <span class="bx-pull-right float-end fw-bold">4/10</span>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        class="progress-bar bg-warning"
                        role="progressbar"
                        style="width: 40%"
                        aria-valuenow="40"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="d-flex gap-1">
                      <div class="">
                        <p class="card-text mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #ffa048"
                            >12 May 2023</span
                          >
                        </p>
                      </div>
                      <div class="">
                        <p class="card-priority mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #ffa048"
                            >Medium Priority</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Done---------------------------------------------------------------------------------------------------------- -->
              <div id="done-col" class="col-lg-4 border">
                <div class="d-flex mt-4 mx-5 justify-content-between">
                  <p class="text-secondary">Done</p>
                  <button id="doneAddBtn" class="btn fw-bold btn-dark">
                    + Add new task
                  </button>
                </div>
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
                      Web Programming Online Project Presentation 1
                    </h5>
                    <h5 class="card-title text-secondary">Group Project</h5>
                    <div class="progress-state my-2">
                      <i class="bx bx-list-ul icon"></i>
                      <span class="text-secondary">Progress</span>
                      <span class="bx-pull-right float-end fw-bold">9/10</span>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 90%"
                        aria-valuenow="90"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="d-flex gap-1">
                      <div class="">
                        <p class="card-text mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #78d700"
                            >3 May 2023</span
                          >
                        </p>
                      </div>
                      <div class="">
                        <p class="card-priority mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #78d700"
                            >Low Priority</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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
                      Activate MAYA Module Selection
                    </h5>
                    <h5 class="card-title text-secondary">18 Credits</h5>
                    <div class="progress-state my-2">
                      <i class="bx bx-list-ul icon"></i>
                      <span class="text-secondary">Progress</span>
                      <span class="bx-pull-right float-end fw-bold">10/10</span>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 100%"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="d-flex gap-1">
                      <div class="">
                        <p class="card-text mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #78d700"
                            >18 March 2023</span
                          >
                        </p>
                      </div>
                      <div class="">
                        <p class="card-priority mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #78d700"
                            >Low Priority</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="card my-4 mx-5 col">
                  <div class="card-body">
                    <span>
                      <a href="#">
                        <i
                          class="bx bx-edit bx-pull-right icon text-secondary"
                        ></i>
                      </a>
                    </span>
                    <h5 class="card-title fw-bold">Update driving license</h5>
                    <h5 class="card-title text-secondary">
                      2 years car license
                    </h5>
                    <div class="progress-state my-2">
                      <i class="bx bx-list-ul icon"></i>
                      <span class="text-secondary">Progress</span>
                      <span class="bx-pull-right float-end fw-bold">10/10</span>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 100%"
                        aria-valuenow="100"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="d-flex gap-1">
                      <div class="">
                        <p class="card-text mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #78d700"
                            >28 April 2023</span
                          >
                        </p>
                      </div>
                      <div class="">
                        <p class="card-priority mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #78d700"
                            >Low Priority</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

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
                      Buy a present for mother's day
                    </h5>
                    <h5 class="card-title text-secondary">
                      a bouquet of flowers
                    </h5>
                    <div class="progress-state my-2">
                      <i class="bx bx-list-ul icon"></i>
                      <span class="text-secondary">Progress</span>
                      <span class="bx-pull-right float-end fw-bold">8/10</span>
                    </div>
                    <div class="progress" style="height: 3px">
                      <div
                        class="progress-bar bg-success"
                        role="progressbar"
                        style="width: 80%"
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <div class="d-flex gap-1">
                      <div class="">
                        <p class="card-text mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #78d700"
                            >8 May 2023</span
                          >
                        </p>
                      </div>
                      <div class="">
                        <p class="card-priority mt-1">
                          <span
                            class="badge bg-body-secondary circle mr-2"
                            style="color: #78d700"
                            >Low Priority</span
                          >
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    </section>
</template>

<script>
    export default {
        name : 'TodosComponent',
    }
</script>
<style>
  
</style>