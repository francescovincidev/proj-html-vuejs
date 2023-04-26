<script>
import HeaderAccount from './AppHeader/HeaderAccount.vue';
import HeaderMenu from './AppHeader/HeaderMenu.vue';



export default {
    name: "AppHeader",
    components: {
        HeaderAccount,
        HeaderMenu
    },
    data() {
        return {
            logo1: "classic_shop_logo1x.png"
        }
    }
}
</script>

<template>
    <HeaderAccount />
    <HeaderMenu />
</template>

<style lang="scss" scoped></style>