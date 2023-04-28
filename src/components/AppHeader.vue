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

        }
    }
}
</script>

<template>
    <div class="all">
        <HeaderAccount />
        <HeaderMenu />
        <div class="right-button shadow fixed-one fixed-top" role="button">
            <img src="../assets/img/d-logo.svg" alt="">
        </div>
        <div class="right-button shadow fixed-two fixed-top fs-5" role="button">
            <span>$</span>35
            <div class="text-secondary">On Sale</div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
.right-button {
    width: 50px;
    height: 50px;
    background-color: white;
    left: 95%;
    text-align: center;
    vertical-align: middle;
    line-height: 45px;
    border-radius: 5px;

    // z-index: 2;
    img {
        width: 40px;
        height: 40px;
    }
}

.fixed-one {
    top: 100px;

}

.fixed-two {
    top: 160px;
    color: #65BC7B;


    span {
        position: absolute;
        bottom: 10px;
        left: 10px;
        font-size: .7rem;
        vertical-align: top;
    }

    div {
        // color: grey;
        position: absolute;
        top: 15px;
        left: 0;
        right: 0;
        font-size: .8rem;
    }
}
</style>