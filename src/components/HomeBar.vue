<script setup>
import { AlignRightOutlined, WifiOutlined } from "@ant-design/icons-vue";
import { ref } from 'vue';
import Nav from './nav.vue';
import NavBtn from "./nav_btn.vue";

const nav = ref(false);

const toggleNav = () => {
    nav.value = !nav.value;
}

</script>

<template>
  <div class="top_barr">
    <Nav v-if="nav"/>
      <img class="logoo" src="../assets/img/logo2.png" alt="">
    
 
    <div class="menu_bar" @click="toggleNav">
      <!-- <AlignRightOutlined /> -->
      <NavBtn />
      <!-- <img src="../assets/img/icon-close-menu.svg" alt="" /> -->
    </div>
  </div>
</template>


