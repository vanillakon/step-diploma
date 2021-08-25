<template>
  <app-banner :page="isPage"></app-banner>
  <div class="container">
    <div class="row">
      <div class="col s12 m5 l5 about-video-wrapper">
        <div class="video-icon">
          <img
            src="../assets/images/about-image/video-back-main.jpg"
            class="attachment-full size-full"
            alt="img"
          />
          <div class="video-button">
            <button
              class="buttonvideo btn-floating btn-large pulse center"
              @click.prevent="showVideo"
            >
              <i class="material-icons">play_arrow</i>
            </button>
          </div>
        </div>
      </div>
      <div class="col s12 m7 l7 about-text-wrapper">
        <div class="popupvideo-wrap">
          <h4 class="title">Who we are</h4>
          <p class="desc">
            We believe in a world where you have total freedom to be you,
            without judgement. To experiment. To express yourself. To be brave
            and grab life as the extraordinary adventure it is. So we make sure
            everyone has an equal chance to discover all the amazing things
            they’re capable of – no matter who they are, where they’re from or
            what looks they like to boss.
          </p>
          <p class="desc">
            Our audience (AKA you) is wonderfully unique. And we do everything
            we can to help you find your fit, offering our Ciloe Brands in more
            than 30 sizes – and we’re committed to providing all sizes at the
            same price
          </p>
          <p class="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            inventore debitis soluta dolorem at quidem vero nostrum? Quos,
            reprehenderit ipsum!
          </p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12 l12">
        <div class="heading-style-01">
          <div class="heading-inner">
            <div class="title">
              Meet Our Team
            </div>
            <div class="subtitle">
              A perfect blend of creativity and technical wizardry
              <br />
              The best people fomula for great websites!
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col s12 m12 l12">
        <the-carousel-employees></the-carousel-employees>
      </div>
    </div>
  </div>
  <div class="row partners-wrapper">
    <div class="col s12 m12 l12">
      <div class="container">
        <div class="partners">
          <div class="partners-logo" v-for="(elem, i) in partners" :key="elem">
            <img
              :class="[
                { animate__heartBeat: elem.isAnimate },
                'animate__animated',
              ]"
              :src="
                require(`@/assets/images/brands-partners/brand-logo-${elem.num}.png`)
              "
              @mouseenter="elem.isAnimate = true"
              @mouseleave="elem.isAnimate = false"
              alt="brand"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col s12 m12 l12">
        <div class="heading-style-01">
          <div class="heading-inner">
            <div class="title">
              Follow Us
            </div>
            <div class="subtitle">@organicstore</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <teleport to="#modal">
    <the-modal-about-video
      v-if="isOpen"
      @close="isOpen = false"
    ></the-modal-about-video>
  </teleport>
</template>
<script>
import { useRoute } from "vue-router";
import { ref, computed, onMounted } from "vue";
import TheCarouselEmployees from "../components/ui/TheCarouselEmployees.vue";
import TheModalAboutVideo from "../components/ui/TheModalAboutVideo.vue";
export default {
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0);
    });
    const route = useRoute();
    const isOpen = ref(false);
    const isPage = computed(() => route.path.slice(1));
    const partners = ref([
      { num: "1", isAnimate: false },
      { num: "5", isAnimate: false },
      { num: "4", isAnimate: false },
      { num: "3", isAnimate: false },
      { num: "2", isAnimate: false },
    ]);

    const showVideo = () => {
      isOpen.value = true;
    };

    return {
      partners,
      isPage,
      isOpen,
      showVideo,
    };
  },
  components: {
    TheCarouselEmployees,
    TheModalAboutVideo,
  },
};
</script>
