<template>
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
