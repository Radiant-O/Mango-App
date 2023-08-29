<script setup>

import { reactive } from "vue";
import { LeftOutlined } from "@ant-design/icons-vue";
import { useUserStore } from "../stores/user";
import axios from "axios";
import {useRouter} from "vue-router";

const userStore = useUserStore();

const formState = reactive({
  email: "",
  password: "",
  remember: true,
});

const router = useRouter();

const onFinish = async () => {
  const data = {
    email: formState.email,
    password: formState.password,
  };
  await axios
    .post("http://brandokonnect.com/api/users/login", {
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify(data)
    })
    .then(() => {
      router.push("/home");
    });
  console.log("Success:", formState);
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
      <a-form
        :model="formState"
        @finish="onFinish">

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
        <button class="auth_btn" @click="$router.push('/home')">Sign In</button>
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
