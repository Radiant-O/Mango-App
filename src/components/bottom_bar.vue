<script setup>
import {
  HomeOutlined,
  SettingOutlined,
  ShoppingOutlined,
} from "@ant-design/icons-vue";
</script>
<template>
  <div class="routes">
    <div class="route_icons">
      <HomeOutlined class="route_icon" />
      <ShoppingOutlined class="route_icon" />

      <SettingOutlined class="route_icon" />
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
  background: #4967ed;
  -webkit-box-shadow: 5px 5px 11px #2d4cd6, -5px -5px 11px #fff;
  box-shadow: 5px 5px 11px #081a66, -5px -5px 11px #fff;
}
</style>
