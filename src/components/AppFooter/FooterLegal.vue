<script>
import { store } from '../../store';


export default {
    name: "FooterLegal",
    data() {
        return {
            store,

        }
    },
    props: {
        legalList: Array,
        partenrs: Array
    },
    methods: {
        getImage(img) {
            return new URL(`../../assets/img/${img}.svg`, import.meta.url).href;
        }
    }
}
</script>

<template>
    <section class="">

        <div class="w-75 h-100 mx-auto d-flex flex-column align-items-between">
            <div class="d-flex justify-content-center pt-4 pb-2">
                <div class="legal-link" role="button" v-for="legal, index in legalList" :key="index">{{ legal }}</div>

            </div>
            <div class="d-flex justify-content-center">
                <div class="partner  mx-1 d-flex justify-content-center align-items-center" role="button"
                    v-for="partner, index in partenrs" :key="index">
                    <img :src="getImage(partner)" alt="">
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;
@use '../../style/partials/mixins' as *;

section {
    height: 80px;
    background-color: $grey-dark;
    color: white;
    font-size: .5rem;

    .legal-link::after {
        content: "|";
        padding: 10px;


    }

    .legal-link:last-child::after {
        content: "";
        padding: 0;
    }

    .partner {
        width: 40px;
        height: 25px;
        background-color: white;
        border-radius: 5px;

        img {
            max-height: 70%;
            max-width: 70%;
        }
    }

}
</style>