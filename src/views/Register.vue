<template>
  <main class="form-signin w-100 m-auto">
    <form>
      <h1 class="h3 mb-3 fw-normal text-center">Sign Up</h1>

      <div class="form-floating mb-3">
        <input class="form-control" placeholder="First Name">
        <label for="floatingInput">First Name</label>
      </div>

      <div class="form-floating mb-3">
        <input class="form-control" placeholder="Last Name">
        <label for="floatingInput">Last Name</label>
      </div>

      <div class="form-floating mb-3">
        <input type="email" class="form-control" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>

      <div class="form-floating mb-3">
        <input type="password" class="form-control" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="form-floating mb-3">
        <input type="password" class="form-control" placeholder="Password Confirm">
        <label for="floatingPassword">Password Confirm</label>
      </div>

      <div class="d-grid">
        <button class="btn btn-primary btn-lg" type="submit">Sign Up</button>
      </div>

      <div class="text-center mt-3">
        <p class="mb-0">Already have an account?
          <router-link to="/login" class="text-primary">Sign In</router-link>
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