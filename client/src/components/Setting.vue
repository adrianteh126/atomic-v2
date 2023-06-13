<template>
    <section >
        <h4 class="p-4 fw-bold">Profile Setting⚙️</h4>
        <section class="home">
      <!-- Manage User Profile -->
      <div class="container-fluid">
        <div class="row">
          <div
            class="col-lg-4 align-items-center justify-content-center px-5 py-5"
          >
            <img src="/images/Profile.svg" class="py-5" />
          </div>
          <div class="col-lg-5 px-5 pt-5">
            <form>
              <div class="form-row py-4">
                <div class="col-lg-8">
                  <label for="username">Username:</label>
                  <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    value="Keat"
                    class="form-control my-3 p-4 custom-input"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <label for="email">Email Address:</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    value="adrianteh126@hotmail.com"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <label for="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <label for="confirm-password">Confirm Password:</label>
                  <input
                    type="password"
                    id="confirm-password"
                    placeholder="Confirm your password"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>

              <!-- Button to trigger the modal -->
              <div class="form-row">
                <div class="col-lg-8">
                  <button
                    type="button"
                    class="btn btn-secondary my-3"
                    id="btnSavechanges"
                    data-toggle="modal"
                    data-target="#myModal1"
                  >
                    Save Changes
                  </button>
                </div>
              </div>

              <div class="form-row">
                <div class="col-lg-8">
                  <button
                    type="button"
                    class="btn btn-danger"
                    id="btnDeleteaccount"
                    data-toggle="modal"
                    data-target="#myModal2"
                  >
                    Delete Account
                  </button>
                </div>
              </div>
            </form>

            <!-- Modal -->
            <div
              class="modal fade"
              id="myModal1"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title text-left" id="myModalLabel">
                      Save Changes
                    </h4>
                  </div>
                  <div class="modal-body">
                    Are you sure you want to save the changes?
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-default"
                      data-dismiss="modal"
                      id="btnCloseSave"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      class="btn btn-dark"
                      id="btConfirmsave"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <!-- modal 2  -->
            <div
              class="modal fade"
              id="myModal2"
              tabindex="-1"
              role="dialog"
              aria-labelledby="myModalLabel"
            >
              <div class="modal-dialog" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h4 class="modal-title text-left" id="myModalLabel">
                      Delete Account
                    </h4>
                  </div>
                  <div class="modal-body">
                    Are you sure you want to delete your account?
                  </div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-default"
                      data-dismiss="modal"
                      id="btnDCancel"
                    >
                      Cancel
                    </button>
                    <button
                      type="button"
                      class="btn btn-danger"
                      id="btnDConfirmDelete"
                    >
                      Confirm Delete
                    </button>
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
    export default {
        name : 'SettingComponent',
    }
</script>

<style>
</style>