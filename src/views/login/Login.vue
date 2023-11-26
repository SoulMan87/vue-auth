<template>
  <LoginForm @login-data="loginData"/>
</template>

<script lang="ts">

import {useRouter} from "vue-router";
import LoginForm from "@/views/login/LoginForm.vue";

export default {
  name: "Login",
  components: {LoginForm},
  setup() {
    const router = useRouter();

    const loginData = (data: any) => {
      console.log(data);
    }

    return {
      loginData
    }
  }
}
</script>
