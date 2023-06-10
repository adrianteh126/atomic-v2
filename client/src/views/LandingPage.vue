  <template>
    <!-- Header(Navbar) -->
    <section id="header">
      <nav
        class="navbar navbar-expand-lg navbar-light bg-white border border-1 border-top-0 border-start-0 border-end-0 border-dark fixed-top"
      >
        <div class="container-fluid mx-4">
          <a
            class="navbar-brand text-center d-flex align-items-center"
            href="#page1"
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
          
          <div class="justify-content-end" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/login">
                  <img src="/icons/profile.svg" srcset="" />
                  <span class="fs-6 ms-1">Login</span>
                </a>
              </li>
              <!-- Can add more nav bar item here -->
            </ul>
          </div>
        </div>
      </nav>
    </section>

    <section id="body">
      <div class="container-fluid">
        <div class="row">
          <!-- Left fixed column -->
          <div
            class="col-1 d-flex flex-column justify-content-around side-columns"
          >
            <div class="vertical-line-left mb-5"></div>
            <div class="mt-5">
              <div
                class="vertical-line-left border-3 position-relative page-indicator-bar"
                style="margin-right: 1.5px"
              >
                <span class="position-absolute bottom-0 end-0 pe-3"> 01 </span>
              </div>
              <div class="vertical-line-left"></div>
            </div>
          </div>
          <!-- Center pages column -->
          <div class="col-10">
            <div id="fullpage">
              <!-- Page 1 -->
              <section class="section">
                <div class="row">
                  <div class="container-fluid px-5">
                    <div class="row flex-nowrap page">
                      <div
                        class="col-5 d-flex flex-column align-items-start justify-content-center px-5"
                        style="text-align: justify"
                      >
                        <span>
                          Welcome to the ultimate productivity tool
                          <span class="bg-dark text-white px-1">Atomic.</span>
                        </span>
                        <br />
                        <span>
                          Say goodbye to
                          <span
                            class="fw-bold"
                            style="color: var(--purple-color)"
                          >
                            missed deadlines, forgotten tasks, and cluttered
                            schedules.</span
                          >
                          With our app, you'll have everything you need to stay
                          on top of your game, all in one place.
                        </span>
                        <br />
                        <span>
                          Our sleek and
                          <span class="fw-bold text-decoration-underline"
                            >intuitive interface makes it easy to create new
                            tasks, set priorities, and organize your day-to-day
                            schedule.</span
                          >
                          You can even customize your task categories and add
                          notes and attachments to each task for extra clarity
                          and detail.
                        </span>
                        <br />
                        <span>
                          But that's not all - our app also includes powerful
                          tracking and analysis tools to help you optimize your
                          productivity and achieve your goals faster. Whether
                          you're a busy professional, a student, or just someone
                          who wants to get more done in less time, our app has
                          everything you need to succeed. So why wait?
                          <span class="fw-bold"
                            >Sign up now and start conquering your to-do list
                            today!</span
                          >
                        </span>
                      </div>
                      <div class="col-7 d-flex align-items-end">
                        <img
                          class="mx-auto d-block"
                          src="/images/gizz-gizz-pattern-2.gif"
                          alt="landing-page-david"
                          height="100%"
                          width="100%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <!-- Page 2 -->
              <section
                class="section page d-flex align-items-center justify-content-center fw-bolder text-light"
                style="background-color: var(--dark-color)"
              >
                <div
                  class="px-5 d-flex flex-wrap flex-column justify-content-center align-items-center"
                >
                  <h1>Our Team</h1>
                  <div class="row profile-pic py-3">
                    <div class="col d-flex flex-column">
                      <img src="/images/profile-pic/peiwei.jpg" alt="lengzai" />
                      <h3 class="pt-3 text-center">NG PEI WEI</h3>
                    </div>
                    <div class="col d-flex flex-column">
                      <img src="/images/profile-pic/keat.png" alt="lengzai" />
                      <h3 class="pt-3 text-center">TEH KUAN KIAT</h3>
                    </div>
                    <div class="col d-flex flex-column">
                      <img src="/images/profile-pic/alvin.jpg" alt="lengzai" />
                      <h3 class="pt-3 text-center">ALVIN LEE KUAN FATT</h3>
                    </div>
                  </div>
                  <div class="row profile-pic">
                    <div class="col d-flex flex-column">
                      <img
                        src="/images/profile-pic/hongway.jpg"
                        alt="lengzai"
                      />
                      <h3 class="pt-3 text-center">HING HONG WAY</h3>
                    </div>
                    <div class="col d-flex flex-column">
                      <img src="/images/profile-pic/junbin.jpg" alt="lengzai" />
                      <h3 class="pt-3 text-center">NG JUN BIN</h3>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <!-- Right fixed column -->
          <div
            class="col-1 d-flex flex-column justify-content-around side-columns"
          >
            <div class="vertical-line-right"></div>
            <div
              class="page-indicator position-relative mx-auto"
              style="left: -50px"
            >
              <ul
                class="list-unstyled position-relative d-flex flex-column gap-3 text-center"
              >
                <li>Page 1</li>
                <li>·</li>
                <li>Page 2</li>
              </ul>
            </div>
            <div class="vertical-line-right"></div>
          </div>
        </div>
      </div>
    </section>

    <section id="main"></section>

  </template>
 
  <script>

    export default {
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
  </style>
