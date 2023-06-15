<template >
    <!-- Top Bar with Username -->
    <section class="header">
            <div class="row border-bottom py-2">
              <div class="col-4">
                <h5 class="fw-bold mx-4 mt-2">{{ currentUserID }}'s Atomic</h5>
              </div>
              <div class="col-8">
                <div class="d-flex justify-content-end align-items-center">
                  <i
                    class="mx-2 bx bx-bell"
                    data-toggle="modal"
                    data-target="#reminderModal"
                    id="reminderButton"
                  ></i>
                  <h6 class="mx-2 mt-2 text-secondary">{{ currentDate }}</h6>
                  <div
                    class="mx-3 pp"
                  >
                    <img
                      src="/images/Profile.svg"
                      alt="your_image_alt_text"
                    />
                  </div>
                </div>
              </div>
            </div>
    </section>
    
</template>
<script>
import { onMounted, ref, watch  } from 'vue';

export default {
    name : 'TopBar',
    props: ['currentUserID'],
    setup(props) {
      const currentDate = ref('');
      
      onMounted(() => {
        setCurrentDate(currentDate);
        startUpdatingCurrentDate(currentDate);
      });

      // Watch for changes in currentUserID
      watch(() => props.currentUserID, () => {
        // Perform any action when currentUserID changes
        console.log('Current User ID:', props.currentUserID);
      });

      const setCurrentDate = (dateRef) => {
        const date = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric' };
        dateRef.value = date.toLocaleDateString('en-US', options);
      };

      const startUpdatingCurrentDate = (dateRef) => {
        setInterval(() => {
          setCurrentDate(dateRef);
        }, 1000); // Update every 1 second
      };

      return {
        currentDate,
      }
    },
}
</script>
<style>
  .pp {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    overflow: hidden;
  }
  .pp > img {
    width: 100%; 
    height: 100%; 
    object-fit: cover
  }
</style>