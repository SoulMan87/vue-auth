<script setup lang="ts">

</script>

<template>
  <div class="container mt-5 text-center">
    <img src="@/assets/vue-logo.png" alt="Vue.js Logo" class="logo mb-4"/>
    <h3>Welcome to Our Full Stack App</h3>
    <p class="lead">Built with Vue.js and Spring Boot</p>
    <hr class="my-4">

    <div class="row">
      <div class="col-md-6">
        <img src="@/assets/spring-logo.png" alt="Spring Logo" class="logo"/>
        <p class="mt-3">Powerful backend with Spring Boot </p>
      </div>
      <div class="col-md-6">
        <img src="@/assets/vue-logo.png" alt="Vue.js Logo" class="logo"/>
        <p class="mt-3">Interactive frontend with Vue.js</p>
      </div>
    </div>

    <div class="lead mt-5">
      Start exploring the features of our full stack application!
    </div>
    <div class="arrow-down"></div>
  </div>
</template>

<style scoped>
.logo {
  max-width: 100px;
}

.container {
  max-width: 800px;
}
.arrow-down {
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 40px solid #007bff; /* Adjust color as needed */
  margin: 20px auto;
  cursor: pointer;
}
</style>

