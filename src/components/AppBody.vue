<script>
import BodyJumbo from './AppBody/BodyJumbo.vue';
import BodyFeatured from './AppBody/BodyFeatured.vue';
import BodyBestSeller from './AppBody/BodyBestSeller.vue';
import BodySeason from './AppBody/BodySeason.vue';
import BodyBrandLogo from './AppBody/BodyBrandLogo.vue';
import BodyResume from './AppBody/BodyResume.vue';
import BodyBlog from './AppBody/BodyBlog.vue';
import BodyVantages from './AppBody/BodyVantages.vue';


export default {
    name: "AppBody",
    components: {
        BodyJumbo,
        BodyFeatured,
        BodyBestSeller,
        BodySeason,
        BodyBrandLogo,
        BodyResume,
        BodyBlog,
        BodyVantages


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
            {
                title: "New Arrivals",
                description: "Brand from top designer"
            },
            {
                title: "From Our Blog",
                description: "Classic Shop News"
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
            logos: ["b_logotype_1.png", "b_logotype_2.png", "b_logotype_3.png", "b_logotype_4.png", "b_logotype_5.png", "b_logotype_6.png", "b_logotype_7.png",],
            blogSections: [{
                img: "post_img_12-700x441.jpg",
                title: "Dabhdi Daghc Hrrcagx",
                date: "September 17th",
                info: "Babchb ahubciania hdbvhabc vdisdvns vudns avctaib cabysbcyab sbcay"
            },
            {
                img: "post_img_11-700x441.jpg",
                title: "Dabhdi Daghc Hrrcagx",
                date: "September 17th",
                info: "Babchb ahubciania hdbvhabc vdisdvns vudns avctaib cabysbcyab sbcay"
            },
            {
                img: "post_img_10-700x441.jpg",
                title: "Dabhdi Daghc Hrrcagx",
                date: "September 17th",
                info: "Babchb ahubciania hdbvhabc vdisdvns vudns avctaib cabysbcyab sbcay"
            },

            ],
            vantages: [{
                img: "promo_box_1_bg.jpg",
                title: "70% Off",
                description: "Gjebfq bcbcaki acbcsubc"
            },
            {
                img: "promo_box_2_bg.jpg",
                title: "Free Shipping",
                description: "Gjebfq bcbcaki acbcsubc"
            },
            ]

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
    <BodyVantages :vantages="vantages" />
    <BodyBlog :sectionInfo="sectionInfo[3]" :blog="blogSections" />
    <BodyResume />
    <BodyBrandLogo :logos="logos" />
</template>

<style lang="scss" scoped></style>