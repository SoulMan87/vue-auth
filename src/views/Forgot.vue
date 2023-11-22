<template>
  <main class="form-signin w-100 m-auto">
    <div v-if="notify.cls" :class="`alert alert-${notify.cls}`" role="alert">
      {{ notify.message }}
    </div>
    <form v-on:submit.prevent="submit">
      <h1 class="h3 mb-3 fw-normal text-center">Please insert your email</h1>

      <div class="form-floating mb-3">
        <input v-model="email" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
        <label for="floatingInput">Email address</label>
      </div>

      <div class="d-grid">
        <button class="btn btn-primary btn-lg" type="submit">Submit</button>
      </div>

    </form>
  </main>
</template>

<style scoped>
main {
  max-width: 400px;
}
</style>

<script lang="ts">
import {reactive, ref} from "vue";
import axios from "axios";

export default {
  name: "Forgot",
  setup() {
    const email = ref('');
    const notify = reactive({
      cls: '',
      message: ''
    });
    const submit = async () => {
      try {
        await axios.post('forgot', {
          email: email.value
        });

        notify.cls = 'success';
        notify.message = 'Email was sent!'
      } catch (e) {
        notify.cls = 'danger';
        notify.message = 'Email does not exist!';
      }
    }

    return {
      email,
      notify,
      submit
    }
  }
}

</script>