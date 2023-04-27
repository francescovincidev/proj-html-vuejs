<script>
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';
import AppFooter from './components/AppFooter.vue';

import { store } from './store';

export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    AppBody,
    AppFooter

  },
  mounted() {
    this.topRatedProducts();
  },
  methods: {
    topRatedProducts() {
      store.topRatedShow = store.products.filter(product => product.tags.includes('top-rated') && product.imgSmall);
      store.topRatedShow.sort(() => Math.random() - 0.5);
      store.topRatedShow = store.topRatedShow.slice(0, 3);
    },
  }
}

</script>

<template>
  <AppHeader />
  <AppFooter />
</template>

<style scoped lang="scss">
@use "./style/general.scss";
</style>
