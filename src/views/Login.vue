<script setup>
import { ref, reactive } from "vue";
import { LeftOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";
// import auth from './stores/auth'
import { useStore } from "vuex";
// import AuthService from "../services/AuthService.js";

const store = useStore();

const formState = reactive({
  email: "",
  password: "",
  remember: true,
});

const active = ref(false);
const router = useRouter();
const msg = ref(null);

// const onFinish = async () => {
//   try {
//     active.value = true;
//     const credentials = {
//       email: formState.email,
//       password: formState.password,
//     };
//     const response = await AuthService.login(credentials);
//     msg.value = response.msg;

//     const token = response.token;
//     const user = response.user;

//     store.dispatch("login", { token, user });

//     setTimeout(() => {
//       active.value = false;
//     }, 1500);

//     router.push({ name: "home" });
//   } catch (error) {
//     setTimeout(() => {
//       active.value = false;
//     }, 1500);
//     msg.value = error.response.msg;
//   }
// };

const onFinish = async () => {
  active.value = true;
  try {
    const credentials = {
      email: formState.email,
      password: formState.password,
    };
    await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(credentials),
    });
    msg.value = "Login Successful";
    await router.push({ name: "home" });
  } catch (e) {
    msg.value = "Invalid Login Details";
  }
};
</script>

<template>
  <section class="signup">
    <div class="auth_top">
      <left-outlined @click="$router.back()" />
      <p class="auth_text">Sign In</p>
    </div>
    <div class="top_signIn">
      <p>Welcome Back...</p>
    </div>
    <div class="auth_box">
      <div v-if="msg" class="errormsg">
        <p>{{ msg }}</p>
      </div>
      <a-form :model="formState" @finish="onFinish">
        <a-form-item
          name="email"
          class="form_input"
          :rules="[{ required: true, message: 'Please input your email!' }]"
        >
          <a-input
            placeholder="Email"
            class="form_box"
            v-model:value="formState.email"
          />
        </a-form-item>

        <a-form-item
          name="password"
          class="form_input"
          :rules="[{ required: true, message: 'Please input your password!' }]"
        >
          <a-input-password
            placeholder="Password"
            class="form_box"
            v-model:value="formState.password"
          />
        </a-form-item>
        <p>
          <router-link to="/forget" class="forget"
            >Forget Password?</router-link
          >
        </p>

        <div class="loading">
          <div class="loader" v-if="active">
            <a-spin /> 
          </div>
        </div>
        <button class="auth_btn" type="submit">Sign In</button>
      </a-form>
    </div>

    <div class="signin_text">
      <p>
        Don't have an account?
        <router-link to="/signup" class="text-red-500">SignUp</router-link>
      </p>
    </div>
  </section>
</template>
