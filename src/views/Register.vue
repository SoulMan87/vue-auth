<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal text-center">Sign Up</h1>

      <div class="form-floating mb-3">
        <input v-model="data.first_name" class="form-control" placeholder="First Name">
        <label for="floatingInput">First Name</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="data.last_name" class="form-control" placeholder="Last Name">
        <label for="floatingInput">Last Name</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="data.email" type="email" class="form-control" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="data.password" type="password" class="form-control" placeholder="Password">
        <label for="floatingPassword">Password</label>
      </div>

      <div class="form-floating mb-3">
        <input v-model="data.password_confirm" type="password" class="form-control" placeholder="Password Confirm">
        <label for="floatingPassword">Password Confirm</label>
      </div>

      <div class="d-grid">
        <button class="btn btn-primary btn-lg" type="submit">Submit</button>
      </div>

      <div class="text-center mt-3">
        <p class="mb-0">Already have an account?
          <router-link to="/login" class="text-primary">Sign In</router-link>
        </p>
      </div>
    </form>
  </main>
</template>

<script lang="ts">
import {reactive} from "vue";
import axios from 'axios';
import {useRouter} from "vue-router";

export default {

  name: "Register",
  setup() {
    const data = reactive({
      first_name: '',
      last_name: '',
      email: '',
      password: '',
      password_confirm: ''
    });

    const router = useRouter();
    const submit = async () => {
      try {
        await axios.post('register', data);
        await router.push('/login');
      } catch (error) {
        console.log('Error submitting the form:', error)
      }

    }

    return {
      data, submit,
    };
  },
};

</script>

<style scoped>
main {
  max-width: 400px;
}
</style>