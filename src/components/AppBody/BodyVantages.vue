<script>
import { store } from '../../store';


export default {
    name: "BodyVantages",
    data() {
        return {
            store
        }
    },
    props: {
        vantages: Object,


    },
    methods: {
        getImage(img) {
            return new URL(`../../assets/img/${img}`, import.meta.url).href;
        }
    }

}
</script>

<template>
    <section class="">
        <div class="w-75 mx-auto py-5 container">
            <div class="row row-cols-2">
                <div class="col position-relative" v-for="vantage in vantages">
                    <img class="w-100" :src="getImage(vantage.img)" alt="">
                    <div class="info text-white">
                        <div class="fs-2 fw-semibold">{{ vantage.title }}</div>
                        <div class="pb-2">{{ vantage.description }}</div>
                        <button class="rounded-pill text-uppercase fw-semibold">view more</button>
                    </div>

                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;
@use '../../style/partials/mixins' as *;

section {
    background-image: url(../../assets/img/bkgd_confetti-compressor.jpg);

    .info {
        position: absolute;

        top: 50%;
        left: 30%;
        transform: translate(-50%, -50%);

        button {
            @include transparent-button;
        }
    }

}
</style>