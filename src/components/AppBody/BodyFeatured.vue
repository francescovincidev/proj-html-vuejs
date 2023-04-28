<script>
import { store } from '../../store';


export default {
    name: "BodyFeatured",
    data() {
        return {
            store,
            genreSelected: "Man",
            visibleImages: [],
            numFirst: 0,
            numLast: 3

        }
    },
    props: {
        sectionInfo: Object,
        genre: String

    },
    mounted() {
        console.log(this.featuredSlice());

    },
    methods: {
        getImage(img) {
            return new URL(`../../assets/img/${img}`, import.meta.url).href;
        },
        featuredSlice() {
            return store.featuredShow.filter(item => {
                return item.tags.includes(this.genreSelected)
            })
        },

        showNextPics() {
            if (this.numLast === 6) {
                this.numFirst = 0
                this.numLast = 3

            } else {
                this.numFirst++
                this.numLast++
            }
        },
        showPrevPics() {
            if (this.numFirst === 0) {
                this.numFirst = 3
                this.numLast = 6

            } else {
                this.numFirst--
                this.numLast--
            }

        },
        visibleImgs() {
            this.visibleImages = this.featuredSlice().slice(this.numFirst, this.numLast)
        },



    },
    computed: {
        visibleImgs() {
            return this.featuredSlice().slice(this.numFirst, this.numLast)
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

            <!-- buttons -->
            <div class="btn-group mt-5 text-black text-center rounded-0 d-flex w-50 mx-auto" role="group"
                aria-label="Basic radio toggle button group">
                <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" checked>
                <label class="btn btn-outline-black rounded-0" for="btnradio1"
                    @click="genreSelected = `Man`, numFirst = 0, numLast = 3">Man</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" value="Woman">
                <label class="btn btn-outline-black rounded-0" for="btnradio2"
                    @click="genreSelected = `Woman`, numFirst = 0, numLast = 3">Woman</label>

                <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off">
                <label class="btn btn-outline-black rounded-0" for="btnradio3"
                    @click="genreSelected = `Accessories`, numFirst = 0, numLast = 3">Accessories</label>
            </div>


            <div class="row images d-flex justify-content-center flex-nowrap overflow-auto">


                <template v-for="product, index in visibleImgs" :key="index">

                    <div class="col">


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
                <template v-if="featuredLength > 3">
                    <i @click="showPrevPics" class="left-arrow fa-solid fa-angle-left"></i>
                    <i @click="showNextPics" class="right-arrow fa-solid fa-angle-right"></i>

                </template>

            </div>




        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;
@use '../../style/partials/mixins' as *;

section {
    // height: 450px;

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

        .product-name {}

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