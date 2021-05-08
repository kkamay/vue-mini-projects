<template>
  <form @submit.prevent="submit()">
        <input type="text" required v-model="displayName" placeholder="Name">
        <input type="email" required v-model="email" placeholder="Email">
        <input type="password" required v-model="password" placeholder="Password">
        <div class="error" v-if="error">
          {{ error }}
        </div>
        <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from 'vue';
import useSignup from '@/composables/useSignup.js';

export default {
    setup() {
        const displayName = ref('');
        const email = ref('');
        const password = ref('');

        const { error, signup } = useSignup();

        const submit = async () => {
          await signup(email.value, password.value, displayName.value);
        };

        return { displayName, email, password, submit, error }
    }
}
</script>

<style>

</style>