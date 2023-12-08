<script setup>
import {
  HomeOutlined,
  UserOutlined,
  ShoppingOutlined,
} from "@ant-design/icons-vue";
import { useRouter } from "vue-router";

const router = useRouter();
</script>
<template>
  <div class="routes">
    <div class="route_icons">
      <router-link to="/home" class="route_icon"><HomeOutlined /></router-link>
      
      <div>
        <a href="https://brandokonnect.com/subscribe.php"
          ><ShoppingOutlined class="route_icon"
        /></a>
      </div>

      <div>
        <a href="https://brandokonnect.com/profile.php" class="div"
          ><UserOutlined class="route_icon"/></a
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.route_icons {
  color: #ededed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  -webkit-border-radius: 20px;
  border-radius: 20px;
  /* border-color: black;
  border-top-width: 2px; */
  border-top: 1em;
  background: white;
  -webkit-box-shadow: 5px 5px 11px #2d4cd6, -5px -5px 11px #fff;
  box-shadow: 5px 5px 11px #081a66, -5px -5px 11px #fff;
}
</style>
