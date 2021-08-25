import store from "../index";
import fb from "./fb.module";
export default {
  namespaced: true,
  state() {
    return {
      images: {},
    };
  },
  getters: {
    getImages: (state) => state.images,
  },
  mutations: {
    setImages(state, images) {
      state.images = images;
    },
  },
  actions: {
    async getImages({ commit }) {
      try {
        const db = store.getters["fb/getDB"];
        await db
          .collection("images")
          .orderBy("id", "asc")
          .onSnapshot((snap) => {
            const images = snap.docs.map((image) => image.data());
            commit("setImages", images);
          });
      } catch (e) {
        console.log(e.message);
      }
    },

    async addLike({}, payload) {
      try {
        const db = store.getters["fb/getDB"];
        await db
          .collection("images")
          .doc(`${payload.id}`)
          .update(payload.obj);
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
