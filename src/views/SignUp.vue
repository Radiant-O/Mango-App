<script setup>
import { reactive, ref } from "vue";
import { LeftOutlined } from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

import AuthService from "../services/AuthService.js";

const formState = reactive({
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  phonenum: "",
  password: "",
  remember: true,
});
const msg = ref(null);
const active = ref(false);
const router = useRouter();

const onFinish = async () => {
  try {
    active.value = true;
    const credentials = {
      fname: formState.firstname,
      lname: formState.lastname,
      user_name: formState.username,
      phone: formState.phonenum,
      email: formState.email,
      password: formState.password,
    };
    const response = await AuthService.signUp(credentials);
    msg.value = response.msg;
    setTimeout(() => {
      active.value = false;
    }, 1500);
    router.push({ name: "login" });
    // await axios
    //   .post("http://localhost:5001/api/users/register", data)
    //   .then(() => {
    //     setTimeout(() => {
    //       active.value = false;
    //     }, 2000);
    //     router.push({ name: "login" });
    //   });
  } catch (error) {
    setTimeout(() => {
      active.value = false;
    },1500);
    msg.value = error.response.msg;
  }
};
</script>

<template>
  <section class="signup">
    <div class="auth_top">
      <left-outlined @click="$router.back()" />
      <p class="auth_text">Sign Up</p>
    </div>
    <div class="auth_box">
      <p v-if="msg"> {{ msg }}</p>
      <a-form :model="formState" @finish="onFinish">
        <a-form-item
          name="firstname"
          class="form_input"
          :rules="[
            { required: true, message: 'Please input your first name!' },
          ]"
        >
          <a-input
            placeholder="Firstname"
            class="form_box"
            v-model:value="formState.firstname"
          />
        </a-form-item>
        <a-form-item
          name="lastname"
          class="form_input"
          :rules="[{ required: true, message: 'Please input your last name!' }]"
        >
          <a-input
            placeholder="Lastname"
            class="form_box"
            v-model:value="formState.lastname"
          />
        </a-form-item>
        <a-form-item
          name="username"
          class="form_input"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input
            placeholder="Username"
            class="form_box"
            v-model:value="formState.username"
          />
        </a-form-item>
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
          name="phonenum"
          class="form_input"
          :rules="[
            { required: true, message: 'Please input your Phone Number!' },
          ]"
        >
          <a-input
            placeholder="Phone Number"
            class="form_box"
            v-model:value="formState.phonenum"
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
          By Joining, you agree to Brando Konect's
          <span class="text-red-500"
            ><a href="https://brandokonnect.com/terms.php"
              >Terms and Privacy Policy</a
            > </span
          >.
        </p>

        <div class="loading">
          <div class="loader" v-if="active">
            <a-spin />
          </div>
        </div>

        <button class="auth_btn" type="submit">Sign Up</button>
      </a-form>
    </div>

    <div>
      <p class="login">
        Already have an account?
        <router-link to="/login" class="text-red-500">SignIn</router-link>
      </p>
    </div>
  </section>
</template>
