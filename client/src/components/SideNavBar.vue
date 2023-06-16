<template>
      <!-- Side Navbar -->
      <nav class="sidebar close border border-1">
      <header class="pt-3">
        <div class="image-text">
          <span class="image">
            <img
              class="logo-white"
              src="/images/icon-white.svg"
              alt="logo-white"
            />
            <img
              class="logo-black"
              src="/images/icon-black.svg"
              alt="logo-black"
            />
          </span>
          <div class="text header-text">
            <span class="name">Atomic</span>
          </div>
        </div>
        <div class="pt-3">
          <i class="bx bx-chevron-right toggle"></i>
        </div>
      </header>

      <div class="menu-bar">
        <div class="menu">
          <div class="menu-links">
            <li class="side-nav-link">
              <router-link to="/dashboard">
                <img class="icon-black mx-3" src="/icons/dashboard.svg" />
                <span class="text nav-text">Dashboard</span>
                </router-link>
            </li>
            <li class="side-nav-link">
                <router-link to="/dashboard/settings">
                  <img class="icon-white mx-3" src="/icons/profile.svg" />
                  <span class="text nav-text">Profile</span>
                </router-link>
            </li>
            <li class="side-nav-link">
              <router-link to="/dashboard/statistic">
                <img class="icon-white mx-3" src="/icons/chart.svg" />
                <span class="text nav-text">Statistic</span>
              </router-link>
            </li>
          </div>
        </div>
        <div class="bottom-content pb-3">
          <li class="">
            <a href="/" @click="logout">
              <i class="bx bx-log-out icon-bottom"></i>
              <span class="text nav-text">Logout</span>
            </a>
          </li>
          <!-- <li class="mode">
            <div class="moon-sun">
              <i class="bx bx-moon icon-bottom moon"></i>
              <i class="bx bx-sun icon-bottom sun"></i>
            </div>

            <span class="mode-text text">Dark Mode</span>
            <div class="toggle-switch">
              <span class="switch"></span>
            </div>
          </li> -->
        </div>
      </div>
      </nav>
</template>

<script>
  export default {
    name: 'SideNavBar',
    
    methods: {
      logout() {
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
</script>

<style>
    
</style>