<script setup>
import { reactive } from "vue";
import {
  LeftOutlined
} from '@ant-design/icons-vue';
const formState = reactive({
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  phonenum: "",
  password: "",
  remember: true,
});
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
</script>

<template>
  <section class="signup">
    <div class="auth_top">
      <left-outlined @click="$router.back()" />
      <p class="auth_text">Sign Up</p>
    </div>
    <div class="auth_box">
      <a-form
       
      >
       <!-- :model="formState"
        @finish="onFinish"
        @finishFailed="onFinishFailed" -->
        <a-form-item
          name="firstname"
          class="form_input"
          :rules="[
            { required: true, message: 'Please input your first name!' },
          ]"
        >
          <a-input placeholder="Firstname" class="form_box" v-model:value="formState.firstname" />
        </a-form-item>
        <a-form-item
          name="lastname"
          class="form_input"
          :rules="[{ required: true, message: 'Please input your last name!' }]"
        >
          <a-input placeholder="Lastname" class="form_box" v-model:value="formState.lastname" />
        </a-form-item>
        <a-form-item
          name="username"
          class="form_input"
          :rules="[{ required: true, message: 'Please input your username!' }]"
        >
          <a-input placeholder="Username" class="form_box" v-model:value="formState.username" />
        </a-form-item>
        <a-form-item
          name="email"
          class="form_input"
          :rules="[{ required: true, message: 'Please input your email!' }]"
        >
          <a-input placeholder="Email" class="form_box" v-model:value="formState.email" />
        </a-form-item>
        <a-form-item
          name="phonenum"
          class="form_input"
          :rules="[{ required: true, message: 'Please input your Phone Number!' }]"
        >
          <a-input placeholder="Phone Number" class="form_box" v-model:value="formState.phonenum" />
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

    <p>By Joining, you agree to Brando Konect's <span class="text-red-500"><a href="https://brandokonnect.com/terms.php">Terms and Privacy Policy</a> </span>.</p>

        <button class="auth_btn" @click="$router.push('/home')">Sign Up</button>
      </a-form>
    </div>

    <div>
      <p class="login">Already have an account? <router-link to="/login" class="text-red-500">SignIn</router-link></p>
    </div>

  </section>
</template>