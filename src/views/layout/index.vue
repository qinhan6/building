<template>
  <Header />
  <!-- <AppHeader />
  <AppHeaderSticky /> -->
  <main>
    <RouterView />
  </main>
  <Footer />
</template>

<script lang="ts" setup>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
</script>

<style lang="less" scoped></style>
