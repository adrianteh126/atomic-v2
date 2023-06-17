<template>
  <!-- Header(Navbar) -->
  <TopNavBar class="">
    <div class="justify-content-end" id="navbarNav">
      <!-- <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="/login">
            <img src="/icons/profile.svg" srcset="" />
            <span class="fs-6 ms-1">Login</span>
          </a>
        </li>
      </ul> -->
    </div>
  </TopNavBar>

  <div
    id="carouselExampleCaptions"
    class="carousel slide full-height"
    data-bs-ride="carousel"
  >
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="0"
        class="active"
        aria-current="true"
        aria-label="Slide 1"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="1"
        aria-label="Slide 2"
      ></button>
      <button
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide-to="2"
        aria-label="Slide 3"
      ></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active c-item">
        <img src="images/Thinking.png" class="d-block w-100 c-img" alt="..." />
        <div
          class="carousel-caption d-none d-md-block top-left-caption text-start"
        >
          <!-- <h1 class="text-dark">Atomic</h1> -->
          <h1 class="text-dark my-4">
            Welcome to the ultimate <br />productivity tool
          </h1>
          <h4 class="text-dark">Say goodbye to</h4>
          <h5 class="fw-bold" style="color: var(--purple-color)">
            missed deadlines, forgotten tasks,<br />
            and cluttered schedules.
          </h5>
          <br />
          <a class="btn btn-dark mt-2 btn-lg" href="/login">Sign in</a>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="images/Planning.png" class="d-block w-100 c-img" alt="..." />
        <div
          class="carousel-caption d-none d-md-block top-right-caption text-start"
        >
          <h1 class="text-dark my-4">
            Powerful analysis tools <br />optimize your productivity
          </h1>
          <h4 class="text-dark">Customize your task categories</h4>
          <h5 class="fw-bold" style="color: var(--purple-color)">
            and add notes and attachments to each task <br />
            for extra clarity and detail.
          </h5>
          <br />
          <a class="btn btn-dark mt-2 btn-lg" href="/login">Sign in</a>
        </div>
      </div>
      <div class="carousel-item c-item">
        <img src="images/Chess.png" class="d-block w-100 c-img" alt="..." />
        <div
          class="carousel-caption d-none d-md-block top-left-caption text-start"
        >
          <h1 class="text-dark my-4">
            Stay on top of your game, <br />all in one place
          </h1>
          <h4 class="text-dark">Our sleek and</h4>
          <h5 class="fw-bold" style="color: var(--purple-color)">
            intuitive interface makes it easy to create new tasks, <br />
            set priorities, and organize your day-to-day schedule
          </h5>
          <br />
          <a class="btn btn-dark mt-2 btn-lg" href="/login">Sign in</a>
        </div>
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
import TopNavBar from "@/components/TopNavBar.vue";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/js/bootstrap.js";

    export default {
      components : {
        TopNavBar,
      }
    }

  </script>
  
  <style>
    @import '../assets/css/style.css';
    @import '../assets/css/bootstrap.min.css';
    @import url('https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/4.0.19/fullpage.min.css');    

.logo-title {
  font-family: "Arial", sans-serif;
  font-weight: 700;
}

#body {
  height: 100%;
}

.page {
  height: calc(100vh - 63px);
}

.side-columns {
  padding-top: 63px;
}

.vertical-line-left {
  border-right: 1px solid black;
  height: calc((100vh - 63px) * 0.17);
  margin-right: 2px;
}

.vertical-line-right {
  border-left: 1px solid black;
  height: calc((100vh - 63px) * 0.17);
  margin-left: 2px;
}

.page-indicator > ul > li {
  transform: rotate(90deg);
}

.fp-watermark {
  display: none;
}

/* == Page 2 ==  */
.profile-pic div img {
  width: 180px;
  border-radius: 10%;
}

.c-item {
  height: 100vh;
}

.c-img {
  height: 100%;
  width: 100%;
  object-fit: cover;
  /* filter: brightness(0.6); */
}

.top-left-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(0%, -75%);
}

.top-right-caption {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(55%, -75%);
}

.full-height {
  height: calc(100vh - 63px);
}

</style>
