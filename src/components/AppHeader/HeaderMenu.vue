<script>
export default {
    name: "HeaderMenu",
    props: {
        logo: String
    },
    data() {
        return {

            menuList: [
                {
                    name: "Home",
                    listType: true
                },
                {
                    name: "Shop",
                    listType: true
                },
                {
                    name: "Products",
                    listType: true
                },
                {
                    name: "Categories",
                    listType: true
                },
                {
                    name: "News",
                    listType: false
                },
                {
                    name: "Elements",
                    listType: true
                },
            ]

        }
    }
}
</script>

<template>
    <section class="border-bottom">
        <div class=" w-75 mx-auto h-100 d-flex  justify-content-between  align-items-center">
            <!-- logo -->
            <img src="../../assets/img/classic_shop_logo1x.png" alt="">

            <!-- right section -->
            <!-- menu list -->
            <div class="d-flex align-items-center h-100">
                <div class="menu d-flex align-items-center h-100">
                    <div class="menu-item mx-3 position-relative h-100" v-for="menu, index in menuList" :key="index">{{
                        menu.name }} <i v-if="menu.listType" class="fa-solid fa-angle-down fa-2xs  align-middle"></i>
                        <div class="blue-bar"></div>
                    </div>
                </div>
                <!-- button -->
                <button class="rounded-pill ms-3">shop now!</button>
                <i class="ms-3 fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;
@use '../../style/partials/mixins' as *;


section {
    font-size: .8rem;
    height: 120px;

    .menu .menu-item {
        line-height: 120px;
        vertical-align: middle;

        .blue-bar {
            height: 2px;
            width: 100%;
            background-color: $primary-blue;
            position: absolute;
            top: 0;
            left: 0;
            display: none;
        }
    }

    .menu .menu-item:hover {
        color: $primary-blue;
        position: relative;

        .blue-bar {
            display: block;
        }
    }





    button {
        @include blue-button;
    }



}
</style>