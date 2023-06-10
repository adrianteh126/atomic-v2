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

    <section class="form mx-5 mt-5">
      <div class="container-fluid">
        <div class="row no-gutters">
          <div class="col-lg-7">
            <img
              src="/images/Register.png"
              class="'img-fluid float-end"
              width="990px"
              height="760px"
            />
          </div>
          <div class="col-lg-5 px-5 pt-5">
            <h1 class="font-weight-bold py-1">Atomic</h1>
            <h4>Register to Atomic!</h4>
            <form>
              <div class="form-row">
                <div class="col-lg-8">
                  <input
                    type="email"
                    placeholder="Email Address"
                    class="form-control my-3 p-3"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <input
                    type="password"
                    placeholder="Password"
                    class="form-control my-3 p-3"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    class="form-control my-3 p-3"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <button type="button" class="btn1 mt-3 mb-5">Register</button>
                </div>
              </div>
              <p>Already have account? <a href="./login">Sign in here</a></p>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
  }

  </script>