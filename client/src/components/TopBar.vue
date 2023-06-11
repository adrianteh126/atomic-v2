<template >
    <!-- Top Bar with Username -->
    <section class="header">
            <div class="row border-bottom py-2">
              <div class="col-4">
                <h5 class="fw-bold mx-4 mt-2">Keat's Atomic</h5>
              </div>
              <div class="col-8">
                <div class="d-flex justify-content-end align-items-center">
                  <i
                    class="mx-2 bx bx-bell"
                    data-toggle="modal"
                    data-target="#reminderModal"
                    id="reminderButton"
                  ></i>
                  <h6 class="mx-2 mt-2 text-secondary">3rd May 2023</h6>
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
export default {
    name : 'TopBar',
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