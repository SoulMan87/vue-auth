<template>
  <main class="form-signin w-100 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal text-center">Sign In</h1>

      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>

      <div class="form-floating mb-3">
        <input type="password" class="form-control" id="floatingPassword" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="d-grid">
        <button class="btn btn-primary btn-lg" type="submit">Sign in</button>
      </div>

      <div class="text-center mt-3">
        <a href="#" class="text-decoration-none">Forgot Password?</a>
      </div>

      <div class="text-center mt-3">
        <p class="mb-0">Don't have an account?
          <router-link to="/register" class="text-primary">Sign Up</router-link>
        </p>
      </div>
    </form>
  </main>
</template>

<style scoped>
main {
  max-width: 400px;
}
</style>

<script setup lang="ts">

</script>