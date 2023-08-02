<script setup>
import {
  WifiOutlined
} from '@ant-design/icons-vue';
</script>
<template>
  <section class="welcome">
    <!-- <div class="img"><img src="../../assets/img/logo.png" alt=""></div> -->
    <div class="welcome_splash">
      <div class="welcome_logo">
        <img class="welcome_log" src="../../assets/img/logo.png" alt="" />
      </div>
      <div class="below_screen">
        <a-carousel autoplay>
          <div class="caro">
            <img class="caro_img" src="../../assets/img/slider1.png" />
            <p class="caro_text">
              We bring you together with your loved one's.
            </p>
          </div>
          <div class="caro">
            <img class="caro_img" src="../../assets/img/slider2.png" />
            <p class="caro_text">
              Enjoy a the world with reliable internet connectivity
            </p>
          </div>
          <div class="caro">
            <img class="caro_img" src="../../assets/img/splashthree.svg" />
            <p class="caro_text">Stay Connected Always</p>
          </div>
        </a-carousel>
      </div>
    </div>
    <div class="bel_screen">
      <div class="top_bel">
        <!-- <p>Brando Konet</p>
        <WifiOutlined :rotate="45"/> -->
        <img src="../../assets/img/logo2.png" alt="">
      </div>
      <p class="bel_ll">Enjoy Faster and Better Internet Connection</p>
      
      <div class="below_btns">
        <router-link to="/signup" class="below_sign">Sign Up</router-link>
        <router-link to="/login" class="below_sign">Sign In</router-link>
      </div>
    </div>
  </section>
</template>

<style></style>
