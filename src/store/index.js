import { createStore, createLogger } from "vuex";
import fb from "./modules/fb.module";
import insta from "./modules/insta.module";
import shop from "./modules/shop.module";
import blog from "./modules/blog.module";
import compare from "./modules/compare.module";
import wishlist from "./modules/wishlist.module";
import register from "./modules/register.module";
import auth from "./modules/auth.module";
const plugins = [];
export default createStore({
  plugins,
  modules: {
    fb,
    insta,
    shop,
    blog,
    compare,
    wishlist,
    register,
    auth,
  },
  state() {
    return {
      loading: false,
      message: null,
    };
  },
  mutations: {
    setMessage(state, message) {
      state.message = message;
    },
    clearMessage(state) {
      state.message = null;
    },
  },
  actions: {
    setMessage({ commit }, message) {
      commit("setMessage", message);
      setTimeout(() => {
        commit("clearMessage");
      }, 3000);
    },
  },
});
