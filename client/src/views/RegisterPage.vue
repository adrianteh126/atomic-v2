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

    <!-- Register page body -->
    <section class="form mx-5 mt-5">
      <div class="container-fluid">
        <div class="row no-gutters">
          <div class="col-lg-7">
            <img
              src="/images/Register.png"
              class="'img-fluid float-end d-none d-lg-block"
              width="990px"
              height="760px"
            />
          </div>
          <div class="col-lg-5 px-5 pt-5">
            <h1 class="font-weight-bold py-1">Atomic</h1>
            <h4>Register to Atomic!</h4>
            <form @submit="handleSubmit">
              <div class="form-row">
                <div class="col-lg-8">
                  <input
                    type="text"
                    v-model="username"
                    placeholder="User Name"
                    class="form-control my-3 p-3"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <input
                    type="email"
                    v-model="email"
                    placeholder="Email Address"
                    class="form-control my-3 p-3"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <input
                    type="password"
                    v-model="password1"
                    placeholder="Password"
                    class="form-control my-3 p-3"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <input
                    type="password"
                    v-model="password2"
                    placeholder="Confirm Password"
                    class="form-control my-3 p-3"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <a href=" ">
                    <button 
                      type="submit"
                      id="registerButton" 
                      class="btn1 mt-3 mb-5"
                    >
                      Register
                    </button>
                  </a>
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
    data() {
      return {
        username: '',
        email: '',
        password1: '',
        password2: ''
      }
    },

    methods: {
      async handleSubmit(e) {
        e.preventDefault()

        try {
          const res = await fetch('http://localhost:3000/signup', {
            method: 'POST',
            body: JSON.stringify({
              username: this.username,
              email: this.email,
              password1: this.password1,
              password2: this.password2
            }),
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include' // Include this option to send cookie
          });

          // Handle the response from the backend
          const data = await res.json();

          if (data.user) {
            alert("Dear user, you have successfully registered an Atomic account. Welcome!!!");
            location.assign('/dashboard');
          }

          if (data.error && data.error.password) {
            console.log(data.error.password);
            alert("Error: " + data.error.password);
          }

          if (data.errors) {
            if (data.errors.email) {
              alert(data.errors.email);
            }
            if (data.errors.password) {
              alert(data.errors.password);
            }
          }
        } catch (err) {
          console.log(err);
        }
      }
    }
  }

  </script>

  <style>
    a {
      color: var(--purple-color);
    }
    a:hover {
      color: var(--dark-color); 
    }
  </style>