<template>
  <h5 class="p-3 ps-4 mx-2 fw-bold ">Profile Settings ⚙️</h5>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg-4 d-flex align-items-center justify-content-center flex-column">
        <!-- replce img src with current user img_url -->
        <img :src="state.user.image_url" alt="Profile picture" class="py-5 rounded-circle img-fluid" style="max-width: 400px; max-height: 400px;" />
        <button id="uploadImg" @click="openUploadWidget()" class="btn btn-dark mt-2">Upload Image</button>
      </div>
      <div class="col-lg-6 my-3">
        <form @submit.prevent="updateUser(state.user._id)">
          <div class="form-row">
            <div class="col-lg-8">
              <label for="username"><b>Username:</b></label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username"
                v-model="state.newUserName"
                class="form-control my-3 p-4 custom-input"
                required
                minlength="3"
                maxlength="12"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="col-lg-8">
              <label for="email"><b>Email Address:</b></label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                v-model="state.newEmail"
                class="form-control my-3 p-4"
                required

              />
            </div>
          </div>
          <div class="form-row">
            <div class="col-lg-8">
              <label for="password"><b>Password:</b></label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                v-model="state.newPassword"
                class="form-control my-3 p-4"
                minlength="6"
              />
            </div>
          </div>
          <div class="form-row">
            <div class="col-lg-8">
              <label for="confirm-password"><b>Confirm Password:</b></label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm your password"
                v-model="state.newConfirmPassword"
                class="form-control my-3 p-4"
                minlength="6"
              />
            </div>
          </div>
          <div class="form-row py-3">
            <button
              type="submit"
              class="btn btn-secondary me-3"
              id="btnSavechanges"
            >
              Save Changes
            </button>
            <button
              type="button"
              class="btn btn-danger"
              id="btnDeleteaccount"
              @click="quit(state.user._id)"
            >
              Delete Account
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { toRef } from 'vue';
import usercrud from '../modules/usercrud'
import router from '@/router';

export default {
  name : 'SettingComponent',
  components : {
  },
  props:{
    currentUserID: {
      type : String,
      required: true,
    },
  },

  setup(props) {

    const { 
      state,
      getUserById,
      deleteUser,
      updateUser  } = usercrud()

    const currentUserID = toRef(props.currentUserID);
    console.log('currentUserID.value = '+currentUserID.value);

    const widget = window.cloudinary.createUploadWidget(
      {cloud_name: "dt2tgkzda", upload_preset:"yzkmtsuc", maxFiles: 1},
      (error, result) => {
        if (!error && result && result.event === "success") {
          console.log("Done uploading!",result.info );
          const newUrl = result.info.secure_url;
          state.value.newImageUrl = newUrl;
          state.value.user.image_url = newUrl;
          console.log('Assigned URL = '+state.value.newImageUrl);
        }
      }
      );
      
      const openUploadWidget = () => {
        widget.open();
      }
      
      //hardcode : redirect to dashboard to get the props userID 
      const redirectToDashboard = async () => {
        if (currentUserID.value == null) {
          router.replace('/dashboard') // Push to a temporary route
        }
      };
      
      redirectToDashboard();
      getUserById(currentUserID.value) //using the current logged in userid
      
      return { 
        state,
      getUserById,
      deleteUser,
      updateUser,
      openUploadWidget
    }
    },
    data() {
      return {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
      }
    },
    methods: {
      quit(currentUserID) {
        // Display a confirmation prompt
        const confirmDelete = confirm("Are you sure you want to delete your account? This action cannot be undone.");

        if (confirmDelete) {
          this.deleteUser(currentUserID);
          fetch('http://localhost:3000/logout', {
            method: 'GET',
            credentials: 'include'
          })
            .then(response => {
              if (response.ok) {
                // Redirect or perform any necessary actions after successful logout
                window.location.href = '/';
              } else {
                throw new Error('Logout request failed.');
              }
            })
            .catch(error => {
              // Handle any errors that occurred during the logout request
              console.error('Logout error: ', error);
            });
        }
      }
    }

}
</script>
