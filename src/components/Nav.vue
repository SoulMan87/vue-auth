<template>
  <header class="p-3 text-white bg-dark">
    <div class="container">
      <div class="d-flex flex-wrap align-items-center justify-content-between">

        <!-- Navigation Links -->
        <ul class="nav d-flex flex-column flex-sm-row col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link px-2 text-white">Home</router-link>
          </li>
        </ul>

        <!-- User Authentication Links -->
        <div class="text-end">
          <router-link to="/login" class="btn btn-outline-light me-2">Login</router-link>
          <router-link to="/register" class="btn btn-outline-light me-2">Register</router-link>
        </div>
      </div>
    </div>
  </header>
</template>
<style scoped>
header {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>

<script setup lang="ts">

</script>
