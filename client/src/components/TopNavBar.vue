<template >
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
          
          <slot></slot>
          
        </div>
      </nav>
    </section>

</template>
<script>
export default {
    name : 'TopNavBar',
}
</script>
<style>

</style>