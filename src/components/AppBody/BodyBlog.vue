<script>
import { store } from '../../store';


export default {
    name: "BodyBlog",
    data() {
        return {
            store
        }
    },
    props: {
        sectionInfo: Object,
        blog: Array

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
            <div class="title  text-center align-items-center d-flex row row-cols-3">
                <hr class="col m-0">
                <h2 class="col">{{ sectionInfo.title }}</h2>
                <hr class="col m-0">
            </div>
            <div class="text-center">{{ sectionInfo.description }}</div>

            <div class="row row-cols-3 py-3">
                <div class="col" v-for="b in blog">
                    <div>
                        <img class="w-100 py-2" :src="getImage(b.img)" alt="">
                    </div>
                    <div class="text-black fw-semibold">{{ b.title }}</div>
                    <div class="py-1">{{ b.date }}</div>
                    <div>{{ b.info }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;
@use '../../style/partials/mixins' as *;

section {
    font-size: .7rem;

}
</style>