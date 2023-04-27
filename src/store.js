import { reactive } from "vue";

const store = reactive({
    socials: ["facebook-f", "twitter", "instagram", "youtube"],
    allTags: ["Black", "boots", "Brown", "Casual", "D&G", "Fabric", "flowers", "Grey", "hat", "Hipser", "lines", "multi-purpose", "New York", "Outdoors", "red", "responsive", "summer", "sweater", "Travel", "Warm", "White", "winter"],
    products: [
        {
            name: "Black Leather Jacket",
            tags: ["Man", "Jackets", "Jeans", "Winter", "featured", "on-sale", "top-rated", "latest-reviews", "new-arrivals", "best-seller"],
            imgOriginal: "black_elegant_leather_jacket.jpg",
            imgSmall: "black_elegant_leather_jacket-120x156.jpg",
            imgMedium: "black_elegant_leather_jacket-231x300.jpg",
            vote: 5,
            originalPrice: 235,
            onSalePrice: 200,
            designedBy: "admin"
        },
        {
            name: "Blue Leather Jacket",
            tags: ["Man", "Jackets", "Jeans", "Autumn", "featured", "on-sale"],
            imgOriginal: "blue_elegant_leather_jacket.jpg",
            imgSmall: "blue_elegant_leather_jacket-120x156.jpg",
            imgMedium: "blue_elegant_leather_jacket-231x300.jpg",
            vote: 0,
            originalPrice: 80,
            onSalePrice: 60,
            designedBy: "admin"
        },
        {
            name: "Black Leather Suit",
            tags: ["Man", "Jackets", "Autumn", "featured", "new-arrivals"],
            imgOriginal: "black_leather_suit.jpg",
            imgSmall: null,
            imgMedium: "black_leather_suit-200x260.jpg",
            vote: 5,
            originalPrice: 176,
            onSalePrice: 176,
            designedBy: "admin"
        },
        {
            name: "Blue Jacket & Stripe Tee",
            tags: ["Man", "Jackets", "Suits", "Spring", "featured", "top-rated", "new-arrivals"],
            imgOriginal: "blue_jacket_and_white_stripe_tee.jpg",
            imgSmall: null,
            imgMedium: "blue_jacket_and_white_stripe_tee-200x260.jpg",
            vote: 5,
            originalPrice: 580,
            onSalePrice: 580,
            designedBy: "admin"
        },
        {
            name: "Modern Black Leather Suit",
            tags: ["Man", "Jackets", "Autumn", "featured"],
            imgOriginal: "modern_black_leather_suit.jpg",
            imgSmall: null,
            imgMedium: "modern_black_leather_suit-200x260.jpg",
            vote: 5,
            originalPrice: 96,
            onSalePrice: 96,
            designedBy: "admin"
        },
        {
            name: "Spring Printed Dress",
            tags: ["Woman", "Dress", "Spring", "top-rated", "latest-reviews", "new-arrivals", "best-seller"],
            imgOriginal: "spring_printed_dress.jpg",
            imgSmall: "spring_printed_dress-120x156.jpg",
            imgMedium: "spring_printed_dress-231x300.jpg",
            vote: 5,
            originalPrice: 47,
            onSalePrice: 47,
            designedBy: "admin"
        },
        {
            name: "Modern Love Tee",
            tags: ["Woman", "Tee", "Sping", "new-arrivals", "best-seller"],
            imgOriginal: "modern_love_tee.jpg",
            imgSmall: null,
            imgMedium: "modern_love_tee-200x260.jpg",
            vote: 5,
            originalPrice: 235,
            onSalePrice: 200,
            designedBy: "admin"
        },
        {
            name: "Black Jacket",
            tags: ["Woman", "Jackets", "Spring", "featured", "best-seller"],
            imgOriginal: "black_leather_jacket.jpg",
            imgSmall: "black_leather_jacket-120x156.jpg",
            imgMedium: "black_leather_jacket-231x300.jpg",
            vote: 0,
            originalPrice: 125,
            onSalePrice: 125,
            designedBy: "admin"
        },
        {
            name: "Hipster Black Top",
            tags: ["Woman", "Top", "Night", "featured", "new-arrivals", "best-seller"],
            imgOriginal: "hipster_black_top.jpg",
            imgSmall: "hipster_black_top-120x156.jpg",
            imgMedium: "hipster_black_top-231x300.jpg",
            vote: 0,
            originalPrice: 57,
            onSalePrice: 57,
            designedBy: "admin"
        },
        {
            name: "Modern Leather Boots",
            tags: ["Accessories", "Man", "Shoes", "featured", "on-sale", "latest-reviews"],
            imgOriginal: "modern_leather_boots.jpg",
            imgSmall: "modern_leather_boots-120x156.jpg",
            imgMedium: "modern_leather_boots-231x300.jpg",
            vote: 5,
            originalPrice: 50,
            onSalePrice: 30,
            designedBy: "admin"
        },
        {
            name: "Leather Glove",
            tags: ["Accessories", "Winter", "top-rated", "latest-reviews"],
            imgOriginal: "leather_gloves.jpg",
            imgSmall: "leather_gloves-120x156.jpg",
            imgMedium: "leather_gloves-231x300.jpg",
            vote: 5,
            originalPrice: 45,
            onSalePrice: 45,
            designedBy: "admin"
        },


    ],
    topRatedShow: [],

});

export {
    store
}