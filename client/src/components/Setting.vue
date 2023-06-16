<template>
  <h5 class="p-3 ps-4 mx-2 fw-bold ">Profile Setting ⚙️</h5>
  <div class="container-fluid">
    <div class="row justify-content-center">
      <div class="col-lg-4 d-flex align-items-center justify-content-center flex-column">
        <!-- replce img src with current user img_url -->
        <img :src="state.user.image_url" alt="Profile picture" class="py-5 rounded-circle img-fluid" style="max-width: 400px; max-height: 400px;" />
        <button id="uploadImg" @click="openUploadWidget()" class="btn btn-dark mt-2">Upload Image</button>
      </div>
      <div class="col-lg-6 my-3">
        <!-- <p>
          State : user {{ state.user }}
        </p>
        <br>
        <p>State : input 
          <br>
          newUserName - {{ state.newUserName }}
          <br>
          newEmail - {{ state.newEmail }}
          <br>
          newPassword - {{ state.newPassword }}
          <br>
          newConfirmPassword - {{ state.newConfirmPassword }}
          <br>
          newImageUrl - {{  state.newImageUrl }}
        </p> -->
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
              @click="deleteUser(state.user._id)"
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
import usercrud from '../modules/usercrud'

export default {
  name : 'SettingComponent',
  components : {
  },

  setup() {
    const { 
      state,
      getUserById,
      deleteUser,
      updateUser  } = usercrud()

    getUserById('64897209f049858a942b8039') //using the current logged in userid

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
    methods : {
    
      // showSaveChangesModal() {
      //   // Logic to show the save changes modal
      // },
      // showDeleteAccountModal() {
      //   // Logic to show the delete account modal
      // },
      // async saveChanges() {
      //   // Logic to save changes
      //   const { updateUser } = getUser()
      //   const newUserData = {
      //     user_name: this.username,
      //     email: this.email,
      //     password: this.password
      //   }
      //   await updateUser(newUserData)
      // },
      // async deleteAccount() {
      //   // Logic to delete the account
      //   const { deleteUser } = getUser()
      //   await deleteUser()
      // }
    }
}
</script>
