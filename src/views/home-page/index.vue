<template>
  <el-button type="primary" @click="handleToDetails">去详情页</el-button>
  <el-button type="primary" @click="handleToProduct">去分类页</el-button>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const handleToDetails = () => {
  router.push({
    path: "/detail"
  });
};

const handleToProduct = () => {
  router.push({
    path: "/product"
  });
};
</script>

<style scoped lang="scss"></style>
