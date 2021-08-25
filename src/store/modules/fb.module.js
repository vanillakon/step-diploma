import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
firebase.initializeApp({
  apiKey: process.env.VUE_APP_FB_KEY,
  authDomain: "vue-diploma-app.firebaseapp.com",
  projectId: "vue-diploma-app",
  storageBucket: "vue-diploma-app.appspot.com",
  messagingSenderId: "405389757879",
  appId: "1:405389757879:web:482c3ad87b280d39a36c32",
});

export default {
  namespaced: true,
  state() {
    return {
      db: firebase.firestore(),
      auth: firebase.auth(),
    };
  },
  getters: {
    getDB: (state) => state.db,
    getAuth: (state) => state.auth,
  },
};
