<script>
import { store } from '../../store';


export default {
    name: "BodyBrandLogo",
    data() {
        return {
            store,
            imgIndex: 0


        }
    },
    props: {
        logos: Array

    },
    methods: {
        getImage(img) {
            return new URL(`../../assets/img/${img}`, import.meta.url).href;
        },
        showNext() {
            this.imgIndex = (this.imgIndex + 1) % this.logos.length
            if (this.imgIndex == 3) {
                this.imgIndex = 0
            }

        },
        showPrev() {
            this.imgIndex = (this.imgIndex - 1 + this.logos.length) % this.logos.length
            if (this.imgIndex == 6) {
                this.imgIndex = 2
            }
        }
    }
}
</script>

<template>
    <section class="py-5">

        <div class="w-75 h-100 mx-auto">
            <div class="container">


                <div class="text-secondary text-uppercase text-center fs-5 fw-semibold">brand logos</div>

                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner d-flex justify-content-between">
                        <div class="carousel-item active d-flex justify-content-between">
                            <img :src="getImage(logos[imgIndex])" class="d-block w-25 m-3" alt="...">
                            <img :src="getImage(logos[imgIndex + 1])" class="d-block w-25  m-3" alt="...">
                            <img :src="getImage(logos[imgIndex + 2])" class="d-block w-25 m-3" alt="...">
                            <img :src="getImage(logos[imgIndex + 3])" class="d-block w-25 m-3" alt="...">
                            <img :src="getImage(logos[imgIndex + 4])" class="d-block w-25 m-3" alt="...">
                        </div>

                    </div>
                    <button class="carousel-control-prev  text-black" type="button" data-bs-target="#carouselExample"
                        data-bs-slide="prev" @click="showPrev
                            ">
                        <i class="fa-solid fa-angle-left fa-2xl"></i>

                    </button>
                    <button class="carousel-control-next text-black" type="button" data-bs-target="#carouselExample "
                        data-bs-slide="next" @click="showNext">
                        <i class="fa-solid fa-angle-right fa-2xl"></i>
                    </button>
                </div>
            </div>
        </div>




    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;
@use '../../style/partials/mixins' as *;

section {
    // height: 300px;
    background-color: $white-brand;
    color: white;
    font-size: .7rem;

    button {
        font-size: 2rem;
    }




}
</style>