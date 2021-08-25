import store from "../store";
import { createRouter, createWebHistory } from "vue-router";
const defaultTitle = "Home";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/Home",
      component: () => import("../views/Home.vue"),
      alias: "/",
      meta: { title: "Home" },
    },
    {
      path: "/Contact",
      component: () => import("../views/Contact.vue"),
      meta: { title: "Contact" },
    },
    {
      path: "/About",
      component: () => import("../views/About.vue"),
      meta: { title: "About" },
    },
    {
      path: "/Blog",
      component: () => import("../views/Blog.vue"),
      meta: { title: "Blog" },
    },
    {
      path: "/Compare",
      component: () => import("../views/Compare.vue"),
      meta: { title: "Compare" },
    },
    {
      path: "/Elements",
      component: () => import("../views/404.vue"),
      meta: { title: "Elements", auth: true },
    },
    {
      path: "/Account",
      component: () => import("../views/Account.vue"),
      meta: { title: "Account" },
    },
    {
      path: "/Wishlist",
      component: () => import("../views/Wishlist.vue"),
      meta: { title: "Wishlist" },
    },
    {
      path: "/Blog/:id",
      component: () => import("../views/BlogPost.vue"),
      meta: { title: "Post" },
      props: true,
    },
    {
      path: "/Shop/:id",
      component: () => import("../views/Product.vue"),
      meta: { title: "Product" },
      props: true,
    },
    {
      path: "/InstaFeed",
      component: () => import("../views/InstaFeed.vue"),
      meta: { title: "InstaFeed" },
    },
    {
      path: "/Shop",
      component: () => import("../views/Shop.vue"),
      meta: { title: "Shop" },
    },
    {
      path: "/:404(.*)",
      component: () => import("../views/404.vue"),
      meta: { title: "404" },
    },
  ],
  linkActiveClass: "active",
  linkExactActiveClass: "active",
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title ? to.meta.title : defaultTitle;
  next();
});

router.beforeEach((to, from, next) => {
  const requireAuth = to.meta.auth;
  if (requireAuth && store.getters["auth/isAuthenticated"]) {
    next();
  } else if (requireAuth && !store.getters["auth/isAuthenticated"]) {
    next("/Account");
  } else {
    next();
  }
});

export default router;
