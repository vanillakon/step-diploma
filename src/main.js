import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "materialize-css/dist/css/materialize.min.css";
import "material-design-icons/iconfont/material-icons.css";
import "./assets/css/style.css";
import "animate.css";
import "vue3-carousel/dist/carousel.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faThumbsUp,
  faThumbsDown,
  faHeart,
  faHeartBroken,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import {
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
library.add(
  faInstagram,
  faFacebook,
  faTwitter,
  faPinterest,
  faThumbsUp,
  faThumbsDown,
  faHeart,
  faHeartBroken
);
import AppBanner from "./components/ui/AppBanner";
import translatePlugin from "./plugins/translatePlugin";
import Loader from "./components/ui/AppLoader";
const en = {
  app: {
    home: "HOME",
    shop: "SHOP",
    elements: "ELEMENTS",
    blog: "BLOG",
    instafeed: "INSTAFEED",
    about: "ABOUT",
    contact: "CONTACT",
    pages: "PAGES",
    currency: "USD",
    changeBtn: "EN",
  },
};

const de = {
  app: {
    home: "HEIMAT",
    shop: "LADEN",
    elements: "ELEMENTE",
    blog: "BLOG",
    instafeed: "INSTAFEED",
    about: "ÜBER",
    contact: "KONTAKT",
    pages: "SEITEN",
    currency: "EUR",
    changeBtn: "DE",
  },
};

createApp(App)
  .use(router)
  .use(store)
  .use(translatePlugin, { en, de })
  .component("fa", FontAwesomeIcon)
  .component("AppBanner", AppBanner)
  .component("Loader", Loader)
  .mount("#app");
