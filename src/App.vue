<script>
import AppHeader from './components/AppHeader.vue';
import AppBody from './components/AppBody.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppBody,
    AppFooter

  }
}

</script>

<template>
  <AppHeader />
</template>

<style scoped lang="scss">
@use "./style/general.scss";
</style>
