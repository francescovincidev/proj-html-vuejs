<script>
import { store } from '../../store';


export default {
    name: "FooterContacts",
    data() {
        return {
            store,

        }
    },
    props: {
        contacts: Array,
        recentPosts: Array

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

        <div class="w-75 h-100 mx-auto">

            <div class="container h-100">
                <div class="row row-cols-4 h-100 py-5 fw-semibold">
                    <!-- first column -->
                    <div class="col d-flex flex-column justify-content-around">
                        <img class="mb-3 logo" role="button" src="../../assets/img/classic_shop_logo_footer.png" alt="">
                        <div>
                            <div class="py-1" v-for="contact in contacts">
                                <span v-if="contact.type">{{ contact.type }}</span>
                                <span>{{ contact.info }}</span>
                            </div>
                        </div>

                        <div class="socials d-flex align-items-center">
                            <template v-for="social in store.socials">
                                <i role="button" class="me-3 pt-4" :class="`fa-brands fa-` + social"></i>
                            </template>
                        </div>
                    </div>

                    <!-- second col -->
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

                    <!-- third col -->
                    <div class="col">
                        <div class="text-uppercase lh-1 mb-4 ">
                            recent posts
                        </div>
                        <div class="recent-post">
                            <div role="button" v-for="post in recentPosts"> <i
                                    class="me-2 fa-solid fa-angle-right fa-2xs"></i>{{
                                        post
                                    }}
                                <hr>
                            </div>
                        </div>

                    </div>
                    <!-- fourt col -->
                    <div class="col">
                        <div class="text-uppercase lh-1 mb-4 cursor-pointer">
                            tags
                        </div>
                        <div class="d-flex flex-wrap">
                            <div class=" m-1 px-1 border border-secondary" role="button" v-for="tag in store.allTags">{{
                                tag }}
                            </div>

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
    background-color: $grey-shark;
    color: white;
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