import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/layout/index.vue";
import HomePage from "@/views/home-page/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "", // 默认路由, 访问 / 等于先加载 Layout 再加载这个组件
          component: HomePage
        },
        {
          path: "detail",
          name: "detail",
          component: () => import("@/views/details/index.vue")
        },
        {
          path: "product",
          name: "product",
          component: () => import("@/views/product/index.vue")
        }
      ]
    },
    {
      path: "/login",
      component: () => import("@/views/login/index.vue")
    }
  ]
});

export default router;
