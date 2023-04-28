<script>
import BodyJumbo from './AppBody/BodyJumbo.vue';
import BodyFeatured from './AppBody/BodyFeatured.vue';
import BodyBestSeller from './AppBody/BodyBestSeller.vue';
import BodySeason from './AppBody/BodySeason.vue';
import BodyBrandLogo from './AppBody/BodyBrandLogo.vue';


export default {
    name: "AppBody",
    components: {
        BodyJumbo,
        BodyFeatured,
        BodyBestSeller,
        BodySeason,
        BodyBrandLogo


    },
    data() {
        return {
            sectionInfo: [{
                title: "Featured Products",
                description: "Must have products from our top sellers"
            },
            {
                title: "Best Seller",
                description: "Must have products from our top sellers"
            },

            ],
            seasons: [{
                name: "Winter Collection",
                description: "stylish and warm",
                img: "winter_collection_bg.jpg"
            },
            {
                name: "Spring Collection",
                description: "bright and colorful",
                img: "spring_collection_bg.jpg"
            },
            {
                name: "Autumn Collection",
                description: "rich and comfortable",
                img: "autumn_collection_bg.jpg"
            },
            ],
            logos: ["b_logotype_1.png", "b_logotype_2.png", "b_logotype_3.png", "b_logotype_4.png", "b_logotype_5.png", "b_logotype_6.png", "b_logotype_7.png",]

        }
    },
    methods: {

    }
}
</script>

<template>
    <BodyJumbo />
    <!-- <BodyFeatured :sectionInfo="sectionInfo[0]" /> -->
    <BodySeason :seasons="seasons" />
    <BodyBestSeller :sectionInfo="sectionInfo[1]" />
    <BodyBrandLogo :logos="logos" />
</template>

<style lang="scss" scoped></style>