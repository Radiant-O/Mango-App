<script setup>
import { reactive } from "vue";
import {
  LeftOutlined
} from '@ant-design/icons-vue';

const formState = reactive({
  username: "",
  password: "",
  remember: true,
});
</script>

<template>
    <section class="signup">
        <div class="auth_top">
      <left-outlined @click="$router.back()" />
      <p class="auth_text">Forget Password</p>
    </div>

    <div class="auth_box">
        <p>Please enter your registered email address</p>
    <a-form-item
          name="email"
          class="form_input"
          :rules="[{ required: true, message: 'Please input your email!' }]"
        >
          <a-input placeholder="Email" class="form_box" v-model:value="formState.email" />
        </a-form-item>
        <p>Your confirmation pin will be sent to your email address</p>
    <button class="auth_btn">Send</button>
</div>
</section>

</template>