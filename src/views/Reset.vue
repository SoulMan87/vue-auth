

<template>
  <main class="form-signin w-100 m-auto">
    <form @submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal text-center">Please insert your password</h1>


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
    </form>
  </main>
</template>

<script lang="ts">
import {reactive} from "vue";
import axios from "axios";
import {useRoute, useRouter} from "vue-router";

export default {
  name: "Reset",
  setup() {
    const data =  reactive({
      password: '',
      password_confirm: ''
    });

    const route = useRoute();
    const router = useRouter();
    const submit = async () => {
      await axios.post('reset', {
        ...data,
        token: route.params.token
      });
      await router.push('/login');
    }

    return {
      data, submit
    }
  }
}
</script>

<style scoped>
main {
  max-width: 400px;
}
</style>