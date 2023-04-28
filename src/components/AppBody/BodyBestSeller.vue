<script>
import { store } from '../../store';


export default {
    name: "BodyBestSeller",
    data() {
        return {
            store,
            imgIndex: 0,

        }
    },
    props: {
        sectionInfo: Object,
        genre: String

    },
    mounted() {
        // console.log(this.featuredSlice());
        store.featuredShow.filter(item => {
            if (item.tags.includes("best-seller")) {
                this.bestSeller.push(item)
                console.log(this.bestSeller);
            }

        })


    },
    methods: {
        getImage(img) {
            return new URL(`../../assets/img/${img}`, import.meta.url).href;
        },

        showNext() {
            this.imgIndex = (this.imgIndex + 1) % this.bestSeller.length
            if (this.imgIndex == 3) {
                this.imgIndex = 0
            }

        },
        showPrev() {
            this.imgIndex = (this.imgIndex - 1 + this.bestSeller.length) % this.bestSeller.length
            if (this.imgIndex == 6) {
                this.imgIndex = 2
            }
        }


    },
    computed: {
        visibleImgs() {
            return this.featuredSlice()
        },
        featuredLength() {
            return this.featuredSlice().length
        }
    }

}
</script>

<template>
    <section class="">
        <div class="w-75 mx-auto py-5 container">
            <div class="title  text-center align-items-center d-flex row row-cols-3">
                <hr class="col m-0">
                <h2 class="col">{{ sectionInfo.title }}</h2>
                <hr class="col m-0">
            </div>
            <div class="text-center">{{ sectionInfo.description }}</div>


            <div class="row images d-flex justify-content-center flex-nowrap overflow-auto">


                <template v-for="product, index in store.bestSeller" :key="index">

                    <div class="col-3">


                        <img class="w-75" :src="getImage(product.imgOriginal)" alt="">
                        <div class="product-info">
                            <div class="product-name text-start fw-semibold">
                                {{ product.name }}
                            </div>
                            <div class="tag">
                                <span v-for="tag in 3" :key="i">{{ product.tags[tag] }}
                                </span>
                            </div>

                            <div class="product-price">
                                <span v-if="product.originalPrice > product.onSalePrice"><span
                                        class="original-price text-decoration-line-through me-1">${{ product.originalPrice
                                        }}
                                    </span>
                                    <span>${{
                                        product.onSalePrice }}</span></span>

                                <span v-else>${{ product.originalPrice }}</span>
                            </div>

                        </div>

                    </div>
                </template>

                <i @click="showPrevPics" class="left-arrow fa-solid fa-angle-left"></i>
                <i @click="showNextPics" class="right-arrow fa-solid fa-angle-right"></i>


            </div>


            <!-- <img :src="getImage(visibleImgs[imgIndex].imgOriginal)" class="d-block w-25 m-3" alt="..."> -->
            <!-- <div>{{ visibleImgs[imgIndex].name }}</div> -->
            <!-- <div v-for="product, index in visibleImgs">{{ visibleImgs[index].name }}</div> -->

            <!-- {{ store.bestSeller[0] }} -->

            <!-- <div id="carouselExample" class="carousel slide">
                <div class="carousel-inner d-flex justify-content-between">
                    <div class="carousel-item active d-flex justify-content-between">
                        <img :src="getImage(store.bestSeller[0].imgOriginal)" class="d-block w-25  m-3" alt="...">
                        <img :src="getImage(store.bestSeller[0 + 1].imgOriginal)" class="d-block w-25  m-3" alt="...">
                        <img :src="getImage(store.bestSeller[0 + 2].imgOriginal)" class="d-block w-25  m-3" alt="...">
                        {{ store.bestSeller[imgIndex].name }}

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
            </div> -->




        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;
@use '../../style/partials/mixins' as *;

section {
    //height: 450px;

    .btn-group {
        label {
            background-color: lightgrey;
            // border: 1px solid red;
            width: 100%;
        }

        .btn-check:checked {
            border-color: none;
        }
    }

    .images {
        position: relative;

        .left-arrow {
            position: absolute;
            left: 0;

        }

        .right-arrow {
            position: absolute;
            // left: 0;
            // right: calc(100%/3);
            left: 100%;
        }
    }

    .product-info {
        font-size: .8rem;

        .tag {
            font-size: .6rem;

            span {

                &::after {
                    content: ", ";
                }

                &:last-child::after {
                    content: "";
                }
            }
        }

        .product-price {
            color: $primary-blue;

            .original-price {
                font-size: .6rem;
            }
        }
    }

}
</style>