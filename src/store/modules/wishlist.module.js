import store from "../index";
export default {
  namespaced: true,
  state() {
    return {
      wishlistElems: [],
    };
  },
  getters: {
    getWishlistElems: (state) => state.wishlistElems,
  },
  mutations: {
    setWishlistElems(state, elems) {
      state.wishlistElems = elems;
    },
  },
  actions: {
    async getWishlistElems({ commit }) {
      try {
        const db = store.getters["fb/getDB"];
        await db
          .collection("wishlist")
          .orderBy("id", "asc")
          .onSnapshot((snap) => {
            const elems = snap.docs.map((elem) => elem.data());
            commit("setWishlistElems", elems);
          });
      } catch (e) {
        console.log(e.message);
      }
    },

    async addWishlistElem({}, payload) {
      try {
        const db = store.getters["fb/getDB"];
        await db
          .collection("wishlist")
          .doc(`${payload.id}`)
          .set(payload);
      } catch (e) {
        console.log(e.message);
      }
    },

    async deleteWishlistElem({}, payload) {
      try {
        const db = store.getters["fb/getDB"];
        await db
          .collection("wishlist")
          .doc(`${payload}`)
          .delete();
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
