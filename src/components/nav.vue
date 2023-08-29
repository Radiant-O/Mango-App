<script setup>
import { ref } from "vue";
import {
  HomeOutlined,
  ShoppingOutlined,
  NotificationOutlined,
  DollarOutlined,
  InfoCircleOutlined,
  StarOutlined,
  ShareAltOutlined,
  SettingOutlined,
  TeamOutlined,
  PhoneOutlined,
  ExportOutlined,
  CloseOutlined,
  ProfileOutlined,
} from "@ant-design/icons-vue";

import { useRouter } from "vue-router"

const router = useRouter();

const nav = ref(false);

const toggleNav = () => {
  nav.value = !nav.value;
};

const logOut = ( async () => {
  await router.push('/')
})
</script>

<template>
  <transition name="slide-menu">
  <section class="nav" v-if="!nav">
    <CloseOutlined class="close_btn" @click="toggleNav" />

    <div>
      <router-link to="/home" class="div"
        ><HomeOutlined /><span>Home</span></router-link
      >
    </div>
    <div>
      <a href="https://brandokonnect.com/profile.php" class="div"
        ><ProfileOutlined /><span>Profile</span></a
      >
    </div>
    <div>
      <a href="https://brandokonnect.com/subscribe.php" class="div"
        ><ShoppingOutlined /><span>Subscribe</span></a
      >
    </div>
    <div>
      <router-link to="/notification" class="div">
        <NotificationOutlined /><span>Manage Notification</span></router-link
      >
    </div>
    <div class="div"><DollarOutlined /><span>Rewards</span></div>
    <div>
      <a href="https://brandokonnect.com/how.php" class="div"
        ><InfoCircleOutlined /><span>How it works</span></a
      >
    </div>
    <div class="div"><StarOutlined /><span>Rate Us</span></div>
    <div class="div"><ShareAltOutlined /><span>Share</span></div>
    <div class="div"><SettingOutlined /><span>Settings</span></div>
    <div>
      <a href="https://brandokonnect.com/terms.php" class="div"
        ><TeamOutlined /><span>About Us</span></a
      >
    </div>
    <div>
      <a href="https://brandokonnect.com/contact.php" class="div"
        ><PhoneOutlined :rotate="90" /><span>Contact Us</span></a
      >
    </div>
    
      <div class="div" @click="logOut">
        <ExportOutlined :rotate="180" /><span>Log Out</span>
      </div>
    
  </section>
</transition>
</template>

<style>
.slide-menu-enter-active {
  transform: translate(0, 0);
  -webkit-transform: translate(0, 0);
  transform: translate(275px, 0);
  -webkit-transform: translate(275px, 0);
}

.slide-menu-leave-active {
  transform: translate(275px, 0);
  -webkit-transform: translate(275px, 0);
}
</style>