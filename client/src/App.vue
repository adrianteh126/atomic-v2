<template>
  <!-- <nav>
    <router-link to="/">Landing Page</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/register">Register</router-link> |
    <router-link to="/dashboard">Dashboard</router-link>
  </nav> -->
  <router-view/>
</template>

<script>

  export default {
    watch: {
      $route(to) {
        const title = to.meta.title; // Get the title from the route's meta property
        document.title = title ? `Atomic - ${title}` : 'Atomic'; // Set the document title
      }
    }
  }
</script>

<style>

</style>
