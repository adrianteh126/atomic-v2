<template>
    <!-- Header(Navbar) -->
    <section id="header">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-white border border-1 border-top-0 border-start-0 border-end-0 border-dark fixed-top"
      >
        <div class="container-fluid mx-4">
          <a
            class="navbar-brand text-center d-flex align-items-center"
            href="/"
          >
            <img
              src="/images/icon-black.svg"
              alt="Logo"
              width="36"
              height="36"
              class="d-inline-block align-text-top me-2"
            />
            <span class="fs-4 ms-2 logo-title">Atomic</span>
          </a>
        </div>
      </nav>
    </section>

    <!-- Login body -->
    <section class="form mt-5">
      <div class="container-fluid">
        <div class="row no-gutters">
          <div class="col-lg-7 g-0 image-display">
            <img
              src="/images/Login.png"
              class="'img-fluid float-end"
              width="100%"
              height="760px"
            />
          </div>
          <div class="col-lg-5 px-5 pt-5">
            <h1 class="font-weight-bold py-3">Atomic</h1>
            <h4>Sign into your account</h4>
            <form>
              <div class="form-row">
                <div class="col-lg-8">
                  <input
                    type="email"
                    placeholder="Email Address"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <input
                    type="password"
                    placeholder="Password"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <a href=" ">
                    <button
                      type="button"
                      id="loginButton"
                      class="btn1 mt-3 mb-5"
                      data-bs-target="#loginModal"
                    >
                      Login
                    </button>
                  </a>
                </div>
              </div>
              <a href="#">Forgot Password</a>
              <p>
                Don't Have an account?
                <a href="./register">Register Here</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Modal ----------------->
    <div
      class="modal fade"
      id="loginModal"
      tabindex="-1"
      aria-labelledby="loginModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="loginModalLabel">Login Successful!</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <p>You are now logged in.</p>
          </div>
          <div class="modal-footer">
            <a href="./dashboard">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script>
    export default {
  }

  </script>
  
  <style>
    .image-display {
      display: none;

      @media (min-width: 992px) {
        display: block;
      }
    }
  </style>