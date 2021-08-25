import store from "../index";
import fb from "./fb.module";
import User from "../user-help";
export default {
  namespaced: true,
  state() {
    return {
      user: null,
    };
  },
  getters: {
    user: (state) => state.user,
    checkUser: (state) => state.user !== null,
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      store.state.loading = false;
    },
  },
  actions: {
    async registerUser({ commit }, { email, password }) {
      try {
        store.state.loading = true;
        const auth = store.getters["fb/getAuth"];
        const user = await auth.createUserWithEmailAndPassword(email, password);
        commit("setUser", new User(user.user.uid));
      } catch (error) {
        store.state.loading = false;
        console.log(error.message);
      }
    },

    async loginUser({ commit }, { email, password }) {
      try {
        store.state.loading = true;
        const auth = store.getters["fb/getAuth"];
        const user = await auth.signInWithEmailAndPassword(email, password);
        commit("setUser", new User(user.user.uid));
      } catch (error) {
        store.state.loading = false;
        console.log(error.message);
      }
    },
  },
};
