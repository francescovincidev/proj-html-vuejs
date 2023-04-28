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
    this.featuredProducts();
    this.bestSeller();
    this.onSale();
    this.lastRev();
  },
  methods: {
    topRatedProducts() {
      store.topRatedShow = store.products.filter(product => product.tags.includes('top-rated') && product.imgSmall);
      store.topRatedShow.sort(() => Math.random() - 0.5);
      store.topRatedShow = store.topRatedShow.slice(0, 3);
    },
    featuredProducts() {
      store.featuredShow = store.products.filter(product => product.tags.includes('featured') && product.imgSmall);
      store.featuredShow.sort(() => Math.random() - 0.5);
    },
    bestSeller() {
      store.bestSeller = store.products.filter(product => product.tags.includes('best-seller') && product.imgOriginal);
      store.bestSeller.sort(() => Math.random() - 0.5);
    },
    onSale() {
      store.onSaleShow = store.products.filter(product => product.tags.includes('on-sale') && product.imgOriginal);
      store.onSaleShow.sort(() => Math.random() - 0.5);
    },
    lastRev() {
      store.lastRevShow = store.products.filter(product => product.tags.includes('latest-reviews') && product.imgOriginal);
      store.lastRevShow.sort(() => Math.random() - 0.5);
    }
  }
}

</script>

<template>
  <AppHeader />
  <AppBody />
  <AppFooter />
</template>

<style scoped lang="scss">
@use "./style/general.scss";
</style>
