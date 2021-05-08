<template>
    <div class="welcome container">
        <div v-if="showLogin">
            <h2>Login</h2>
            <LoginForm />
            <p @click="changeForm()">No account yet? Sign up now!</p>
        </div>
        <div v-else>
            <h2>Sign Up</h2>
            <SignupForm />
            <p @click="changeForm()">Already have an account? Log in now!</p>
        </div>
    </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';
import { ref } from 'vue';

export default {
    components: {
        SignupForm,
        LoginForm
    },
    setup() {
        const showLogin = ref(true);

        const changeForm = () => {
            showLogin.value = !showLogin.value;
        };

        return { showLogin, changeForm }
    }
}
</script>

<style>
.welcome {
    text-align: center;
    padding: 20px 0;
}

.welcome form {
    width: 300px;
    margin: 20px auto;
}

.welcome label {
    display: block;
    margin: 20px 0 10px;
}

.welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
}

.welcome button {
    margin: 20px;
    cursor: pointer;
}

.welcome p {
    cursor: pointer;
    font-weight: bold;
}
</style>