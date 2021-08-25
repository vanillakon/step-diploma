<template>
  <GoogleMap
    :api-key="gm_key"
    style="width: 100%; height: 500px"
    :center="center"
    :zoom="15"
  >
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 37.5532123, lng: -77.4822922 };

    return { center, gm_key: process.env.VUE_APP_GM_KEY };
  },
});
</script>
