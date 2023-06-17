<template>
    <!-- Header(Navbar) -->
    <TopNavBar></TopNavBar>

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
            <form @submit="handleSubmit">
              <div class="email error">{{ emailError }}</div>
              <div class="password error">{{ passwordError }}</div>
              <div class="form-row">
                <div class="col-lg-8">
                  <input
                    type="email"
                    v-model="email"
                    placeholder="Email Address"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <input
                    type="password"
                    v-model="password"
                    placeholder="Password"
                    class="form-control my-3 p-4"
                  />
                </div>
              </div>
              <div class="form-row">
                <div class="col-lg-8">
                  <a href=" ">
                    <button
                      type="submit"
                      id="loginButton"
                      class="btn1 mt-3 mb-5"
                      data-bs-target="#loginModal"
                    >
                      Login
                    </button>
                  </a>
                </div>
              </div>
              <a href="/forgotPassword">Forgot Password</a>
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
  import TopNavBar from '@/components/TopNavBar.vue';

  export default {
    components: { TopNavBar },

    data() {
      return {
        email: '',
        password: '',
        emailError: '',
        passwordError: ''
      };
    },
  methods: {
    async handleSubmit(e) {
      e.preventDefault();

      this.emailError = '';
      this.passwordError = '';

      try {
        const res = await fetch('http://localhost:3000/login', {
          method: 'POST',
          body: JSON.stringify({
            email: this.email,
            password: this.password
          }),
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include' // Include this option to send cookie
        });

        // Handle the response from the backend
        const data = await res.json();

        console.log('data = ' + JSON.stringify(data));
        
        if (data.errors) {
          this.emailError = data.errors.email;
          this.passwordError = data.errors.password;
        }

        if (data.user) {
          // hardcode : pass value from :3000/login
          const token = data.token;
          console.log('token = '+ token);
          // const maxAge = 3 * 24 * 60 * 60;
          // document.cookie = `jwt=${token}; SameSite=None; Max-Age=${maxAge};`;
          console.log(document.cookie);
          alert('Stop')
          location.assign('/dashboard');
        }
      } catch (err) {
        console.log(err);
      }
    }
  }
  };
  </script>
  
  <style>
    .image-display {
      display: none;

      @media (min-width: 992px) {
        display: block;
      }
    }
  </style>