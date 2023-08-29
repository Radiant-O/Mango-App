<script setup>
import { ArrowLeftOutlined } from "@ant-design/icons-vue";

import { useRouter } from "vue-router"
const router = useRouter();

</script>
<template>
  <section>
    <div class="top_page" @click="router.back">
      <ArrowLeftOutlined />
      <div>Notifications</div>
    </div>
  </section>
</template>
