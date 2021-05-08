
<template>
  <form @submit.prevent="submit()">
        <input type="email" required v-model="email" placeholder="Email">
        <input type="password" required v-model="password" placeholder="Password">
        <div class="error" v-if="error">
          {{ error }}
        </div>
        <button>Log In</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useLogin from '@/composables/useLogin.js';

export default {
    setup() {
        const email = ref('');
        const password = ref('');

        const { error, login } = useLogin();

        const submit = async () => {
          await login(email.value, password.value);

          if (!error.value) {
            console.log('User logged in.');
          }
        };

        return { email, password, submit, error }
    }
}
</script>

<style>

</style>