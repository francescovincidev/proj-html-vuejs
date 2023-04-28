<script>
import { store } from '../../store';


export default {
    name: "BodyResume",
    data() {
        return {
            store,
            imgIndex: 0,

        }
    },
    props: {
        sectionInfo: Object

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
        <hr>
        <div class="w-75 mx-auto py-3 container">
            <div class="container h-100">
                <div class="row row-cols-4 h-100 py-5 fw-semibold">
                    <!-- first column -->

                    <div class="col pe-4">
                        <div class="text-uppercase lh-1 mb-4 ">
                            featured
                        </div>

                        <div class="top-rated" v-for="product, index in store.featuredShow.slice(0, 3)" :key="index">
                            <div class=" d-flex justify-content-between" role="button">

                                <div class="">
                                    <div>
                                        {{ product.name }}
                                    </div>
                                    <div>
                                        <i v-for="star in product.vote" class="fa-solid fa-star py-1"></i>
                                    </div>
                                    <div>
                                        <span v-if="product.originalPrice > product.onSalePrice"><span
                                                class="text-decoration-line-through me-1">${{ product.originalPrice }}
                                            </span>
                                            <span class="text-decoration-underline">${{
                                                product.onSalePrice }}</span></span>

                                        <span v-else>${{ product.originalPrice }}</span>
                                    </div>
                                </div>
                                <img :src="getImage(product.imgSmall)" alt="">
                            </div>
                            <hr>

                        </div>
                    </div>
                    <!-- second col -->
                    <div class="col pe-4">
                        <div class="text-uppercase lh-1 mb-4 ">
                            On sale
                        </div>

                        <div class="top-rated" v-for="product, index in store.onSaleShow" :key="index">
                            <div class=" d-flex justify-content-between" role="button">

                                <div class="">
                                    <div>
                                        {{ product.name }}
                                    </div>
                                    <div>
                                        <i v-for="star in product.vote" class="fa-solid fa-star py-1"></i>
                                    </div>
                                    <div>
                                        <span v-if="product.originalPrice > product.onSalePrice"><span
                                                class="text-decoration-line-through me-1">${{ product.originalPrice }}
                                            </span>
                                            <span class="text-decoration-underline">${{
                                                product.onSalePrice }}</span></span>

                                        <span v-else>${{ product.originalPrice }}</span>
                                    </div>
                                </div>
                                <img :src="getImage(product.imgSmall)" alt="">
                            </div>
                            <hr>

                        </div>
                    </div>

                    <!-- third col -->
                    <div class="col pe-4">
                        <div class="text-uppercase lh-1 mb-4 ">
                            top rated products
                        </div>

                        <div class="top-rated" v-for="product, index in store.topRatedShow" :key="index">
                            <div class=" d-flex justify-content-between" role="button">

                                <div class="">
                                    <div>
                                        {{ product.name }}
                                    </div>
                                    <div>
                                        <i v-for="star in product.vote" class="fa-solid fa-star py-1"></i>
                                    </div>
                                    <div>
                                        <span v-if="product.originalPrice > product.onSalePrice"><span
                                                class="text-decoration-line-through me-1">${{ product.originalPrice }}
                                            </span>
                                            <span class="text-decoration-underline">${{
                                                product.onSalePrice }}</span></span>

                                        <span v-else>${{ product.originalPrice }}</span>
                                    </div>
                                </div>
                                <img :src="getImage(product.imgSmall)" alt="">
                            </div>
                            <hr>

                        </div>
                    </div>
                    <!-- fourt col -->
                    <div class="col pe-4">
                        <div class="text-uppercase lh-1 mb-4 ">
                            latest reviews
                        </div>

                        <div class="top-rated" v-for="product, index in store.lastRevShow.slice(0, 3)" :key="index">
                            <div class=" d-flex justify-content-between" role="button">

                                <div class="">
                                    <div>
                                        {{ product.name }}
                                    </div>
                                    <div>
                                        <i v-for="star in product.vote" class="fa-solid fa-star py-1"></i>
                                    </div>
                                    <div>
                                        <span v-if="product.originalPrice > product.onSalePrice"><span
                                                class="text-decoration-line-through me-1">${{ product.originalPrice }}
                                            </span>
                                            <span class="text-decoration-underline">${{
                                                product.onSalePrice }}</span></span>

                                        <span v-else>${{ product.originalPrice }}</span>
                                    </div>
                                </div>
                                <img :src="getImage(product.imgSmall)" alt="">
                            </div>
                            <hr>

                        </div>
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
    // height: 300px;
    // background-color: $grey-shark;
    color: grey;
    font-size: .7rem;

    .col {
        .logo {
            width: 60%;
        }

        .top-rated {
            img {
                width: 40px;

            }

            i {
                color: $primary-blue;
            }
        }

        .recent-post {
            hr {
                margin: .7rem 0;
            }
        }
    }



}
</style>