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
          <h4>Reset your password</h4>
          <form @submit="handleSubmit">
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
                    id="loginButton"
                    class="btn1 mt-3 mb-5"
                    data-bs-target="#loginModal"
                  >
                    Reset Password
                  </button>
                </a>
              </div>
            </div>
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
import TopNavBar from "@/components/TopNavBar.vue";

export default {
  components: { TopNavBar },

    data() {
      return {
        password1: '',
        password2: ''
      };
    },

    methods: {
      async handleSubmit(e) {
        e.preventDefault();

        const currentURL = new URL(window.location.href);
        const email = currentURL.searchParams.get("email");

        try {
          const res = await fetch('http://localhost:3000/resetPassword/:id/:token', {
          method: 'POST',
          body: JSON.stringify({
            password1: this.password1,
            password2: this.password2,
            email: email
          }),
          headers: { 'Content-Type': 'application/json' },
          credentials: 'include' // Include this option to send cookie
          });

          // Handle the response from the backend
          const data = await res.json();
        
          if (data.status) {
            alert("Status: Your Atomic account password has been successfully reset");
            location.assign("/login");
          }
          if (data.error && data.error.password) {
            console.log(data.error.password);
            alert("Error: " + data.error.password);
          }
        } catch (err) {
          console.log(err);
        }
      }
    },

      mounted() {
        const currentURL = window.location.href;
        const urlParts = currentURL.split('/');
        const id = urlParts[4];
        const token = urlParts[5];
        console.log("ID: " + id);
        console.log("Token: " + token);

        fetch(`http://localhost:3000/resetPassword/${id}/${token}`, {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json'
          }
        })
          .then(response => {
            if (response.ok) {
              // Handle the successful response
              return response.json();
            } else {
              console.log("Request failed!!!");
              throw new Error('Request failed.');
            }
          })
          .then(data => {
            // Handle the response data
            if (data.query) {
              this.$router.push({
                name: 'resetPasswordPage',
                params: {
                  id: id,
                  token: token
                },
                query: {
                  email: data.query.email,
                  status: data.query.status
                }
              });
            }
            else {
              console.log(data);
            }
          })
          .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Request error: ', error);
          });
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
