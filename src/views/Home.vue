<script lang="ts">

import {onMounted, ref} from "vue";
import axios from "axios";

export default {
  name: "Home",
  setup: function () {
    const message = ref('You are not logged in');

    onMounted(async () => {
      try {
        const {data} = await axios.get('http://localhost:8000/api/user');

        message.value = `Hello ${data.first_name} ${data.last_name}`;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }

    });
    return {
      message,
    };
  },
};

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
      <p>Start exploring the features of our full-stack application!</p>
      <h2>{{ message }}</h2>
      <div class="arrow-down"></div>
    </div>
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
  border-top: 40px solid #007bff;
  margin: 20px auto;
  cursor: pointer;
}
</style>

