<script>
import FooterSubscribe from './AppFooter/FooterSubscribe.vue';
import FooterLegal from './AppFooter/FooterLegal.vue';
import FooterContacts from './AppFooter/FooterContacts.vue';


export default {
    name: "AppFooter",
    components: {
        FooterSubscribe,
        FooterLegal,
        FooterContacts

    },
    data() {
        return {
            contacts: [
                {
                    type: "",
                    info: "12345 North Main Street,"

                },
                {
                    type: "",
                    info: "New York, NY 555555"

                },
                {
                    type: "Phone: ",
                    info: "1.800.555.6789"

                },
                {
                    type: "Email: ",
                    info: "info@company.com"

                },
                {
                    type: "Web: ",
                    info: "Theme-fusion.com"

                },
            ],
            legalLinks: ["@Copyright 2012 - 2023", "Avada Theme by Theme Fusion", "All Rights Reserved", "Powered by WordPress"],
            partenrs: ["visa", "paypal", "mastercard", "discover", "amazon"],
            recentPosts: ["Lorem ipsum dolor sit", "Amet consectetur adipisicing elit", "Cum architecto vero", "Eius mollitia quod reprehenderit", "Placeat, officia laborum asperiores", "Eveniet blanditiis delectus"]

        }
    }
}
</script>

<template>
    <FooterSubscribe />
    <FooterContacts :contacts="contacts" :recentPosts="recentPosts" />
    <FooterLegal :legal-list="legalLinks" :partenrs="partenrs" />
</template>

<style lang="scss" scoped></style>
