import store from "../index";
export default {
  namespaced: true,
  state() {
    return {
      compareElems: [],
    };
  },
  getters: {
    getCompareElems: (state) => state.compareElems,
  },
  mutations: {
    setCompareElems(state, elems) {
      state.compareElems = elems;
    },
  },
  actions: {
    async getCompareElems({ commit }) {
      try {
        const db = store.getters["fb/getDB"];
        await db
          .collection("compare")
          .orderBy("id", "asc")
          .onSnapshot((snap) => {
            const elems = snap.docs.map((elem) => elem.data());
            commit("setCompareElems", elems);
          });
      } catch (e) {
        console.log(e.message);
      }
    },

    async addCompareElem({}, payload) {
      try {
        const db = store.getters["fb/getDB"];
        await db
          .collection("compare")
          .doc(`${payload.id}`)
          .set(payload);
      } catch (e) {
        console.log(e.message);
      }
    },

    async deleteCompareElem({}, payload) {
      try {
        const db = store.getters["fb/getDB"];
        await db
          .collection("compare")
          .doc(`${payload}`)
          .delete();
      } catch (e) {
        console.log(e.message);
      }
    },
  },
};
