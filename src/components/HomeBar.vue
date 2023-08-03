<script setup>
import { ref } from 'vue';
import { AlignRightOutlined } from '@ant-design/icons-vue';
import Nav from './nav.vue';

const nav = ref(false);

const toggleNav = () => {
    nav.value = !nav.value;
}

</script>

<template>
  <div class="top_barr">
    <Nav v-if="nav"/>
      <img class="logoo" src="../assets/img/logo2.png" alt="">
    <div @click="toggleNav" >
      <AlignRightOutlined class="menu_bar" />
      <!-- <NavBtn /> -->
      <!-- <img src="../assets/img/icon-close-menu.svg" alt="" /> -->
    </div>
  </div>
</template>


