import store from "../index";
export default {
  namespaced: true,
  state() {
    return {
      posts: [],
      comments: [],
    };
  },
  getters: {
    getPosts: (state) => state.posts,
    getComments: (state) => state.comments,
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = posts;
    },
    setComments(state, comments) {
      state.comments = comments;
    },
  },
  actions: {
    async getPosts({ commit }) {
      try {
        const db = store.getters["fb/getDB"];
        await db
          .collection("blog")
          .orderBy("id", "asc")
          .onSnapshot((snap) => {
            const posts = snap.docs.map((post) => post.data());
            commit("setPosts", posts);
          });
      } catch (e) {
        console.log(e.message);
      }
    },

    async getComments({ commit }, payload) {
      try {
        const db = store.getters["fb/getDB"];
        await db
          .collection("blog")
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
        .collection("blog")
        .doc(`${payload.item}`)
        .collection("comments")
        .doc(`${payload.id}`)
        .set(payload);
    },
  },
};
