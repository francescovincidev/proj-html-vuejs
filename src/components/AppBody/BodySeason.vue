<script>
import { store } from '../../store';


export default {
    name: "BodySeason",
    data() {
        return {
            store,


        }
    },
    props: {
        seasons: Object
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
        <div class="d-flex h-100 w-100">

            <div class="season w-100 position-relative" v-for="season in seasons">
                <img class="h-100 w-100" :src="getImage(season.img)" alt="">
                <div class="season-info text-center text-white">
                    <h2 class="text-nowrap">{{ season.name }}</h2>
                    <h6 class="text-uppercase fw-normal my-3">{{ season.description }}</h6>
                    <button class="rounded-pill text-uppercase fw-semibold">view more</button>

                </div>
            </div>
        </div>




    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;
@use '../../style/partials/mixins' as *;

section {
    height: calc(100vw / 3);


    .season {
        // position: relative;

        img {

            object-fit: cover;
        }

        .season-info {
            position: absolute;
            top: 70%;
            left: 50%;
            transform: translate(-50%, -50%);

            h6 {
                letter-spacing: 2px;
            }

            button {
                @include transparent-button;
            }
        }
    }


}
</style>