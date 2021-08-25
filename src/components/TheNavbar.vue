<template>
  <div class="navbar-fixed">
    <nav>
      <div class="nav-wrapper">
        <router-link to="/" class="brand-logo center"
          ><span>Organic</span>Store.</router-link
        >
        <ul id="nav-mobile" class="left hide-on-med-and-down left-nav-links">
          <li>
            <router-link
              to="/Home"
              class="navbar-link"
              :key="$i18n('app.home')"
              >{{ $i18n("app.home") }}</router-link
            >
          </li>
          <li>
            <router-link
              to="/Shop"
              :key="$i18n('app.shop')"
              class="navbar-link"
              >{{ $i18n("app.shop") }}</router-link
            >
          </li>
          <li class="navbar-blog-wrapper">
            <router-link
              to="/Blog"
              :key="$i18n('app.blog')"
              class="navbar-link"
              >{{ $i18n("app.blog") }}</router-link
            >
            <ul class="navbar-sub-ul-blog">
              <li>
                <router-link
                  to="/InstaFeed"
                  :key="$i18n('app.instafeed')"
                  class="navbar-link"
                  >{{ $i18n("app.instafeed") }}</router-link
                >
              </li>
            </ul>
          </li>
          <li>
            <router-link
              to="/Elements"
              :key="$i18n('app.elements')"
              class="navbar-link"
              >{{ $i18n("app.elements") }}</router-link
            >
          </li>
          <li class="navbar-pages-wrapper">
            <router-link
              to="/Pages"
              :key="$i18n('app.pages')"
              class="navbar-link"
              >{{ $i18n("app.pages") }}</router-link
            >
            <ul class="navbar-sub-ul-pages">
              <li>
                <router-link
                  to="/About"
                  :key="$i18n('app.about')"
                  class="navbar-link"
                  >{{ $i18n("app.about") }}</router-link
                >
              </li>
              <li>
                <router-link
                  to="/Contact"
                  :key="$i18n('app.contact')"
                  class="navbar-link"
                  >{{ $i18n("app.contact") }}</router-link
                >
              </li>
            </ul>
          </li>
        </ul>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a class="navbar-link" @click.prevent="changeLang">
              {{ $i18n("app.changeBtn") }}
            </a>
          </li>
          <li>
            <a href="collapsible.html" class="navbar-link">
              {{ $i18n("app.currency") }}
            </a>
          </li>

          <li>
            <router-link to="/" class="navbar-link"
              ><i class="material-icons">search</i></router-link
            >
          </li>
          <li class="navbar-acc-wrapper">
            <router-link to="/Account" class="navbar-link"
              ><i class="material-icons">perm_identity</i></router-link
            >
            <ul class="navbar-sub-ul-acc">
              <li>
                <a href="#" class="navbar-link" @click.prevent="logout"
                  ><i class="material-icons">exit_to_app</i></a
                >
              </li>
            </ul>
          </li>
          <li>
            <router-link to="/Wishlist" class="navbar-link"
              ><i class="material-icons">shopping_basket</i></router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>
<script>
import { ref, provide, onMounted, inject, getCurrentInstance } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const instance = getCurrentInstance();
    const changeI18N = inject("changeI18N");
    const lang = ref("en");
    const changeLang = () => {
      lang.value = lang.value == "de" ? "en" : "de";
      changeI18N(lang.value);
      instance.proxy.$forceUpdate();
    };
    return {
      lang,
      changeLang,
      changeI18N,
      instance,
      logout: () => {
        store.commit("auth/logout");
        router.push("/");
      },
    };
  },
};
</script>
