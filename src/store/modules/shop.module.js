import store from "../index";
import fb from "./fb.module";
export default {
  namespaced: true,
  state() {
    return {
      products: [],
      comments: [],
      perPage: 9,
    };
  },
  getters: {
    getProducts: (state) => state.products,
    getComments: (state) => state.comments,
    getPerPage: (state) => state.perPage,
    getPagesProducts: (_, getters) =>
      Math.ceil(getters.getProducts.length / getters.getPerPage),
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setComments(state, comments) {
      state.comments = comments;
    },
  },
  actions: {
    async getProducts({ commit }) {
      try {
        const db = store.getters["fb/getDB"];
        await db
          .collection("shop")
          .orderBy("id", "asc")
          .onSnapshot((snap) => {
            const products = snap.docs.map((product) => product.data());
            commit("setProducts", products);
          });
      } catch (e) {
        console.log(e.message);
      }
    },
    async getComments({ commit }, payload) {
      try {
        const db = store.getters["fb/getDB"];
        await db
          .collection("shop")
          .doc(`${payload.id}`)
          .collection("comments")
          .onSnapshot((snap) => {
            const comments = snap.docs.map((comment) => comment.data());
            commit("setComments", comments);
          });
      } catch (e) {
        console.log(e.message);
      }
    },
    async addComments({}, payload) {
      const db = store.getters["fb/getDB"];
      await db
        .collection("shop")
        .doc(`${payload.item}`)
        .collection("comments")
        .doc(`${payload.id}`)
        .set(payload);
    },
  },
};
