<script>
import { store } from '../../store';


export default {
    name: "HeaderAccount",
    data() {
        return {
            store,

        }
    }
}
</script>

<template>
    <section class="border-bottom">

        <div class="w-75 h-100 mx-auto d-flex justify-content-between">

            <!-- lista social -->
            <div class="socials h-100 d-flex align-items-center">
                <template v-for="social in store.socials">
                    <i class="me-3 text-secondary" role="button" :class="`fa-brands fa-` + social"></i>
                </template>
            </div>

            <!-- account sction -->
            <div class="account-button h-100 d-flex align-items-center">
                <div class="me-3 text-secondary" role="button">Shopping Cart</div>
                <div class="px-2 border-start border-end text-secondary" role="button">My Account <i
                        class="fa-solid fa-angle-down fa-2xs align-middle"></i>
                </div>
                <div class="px-5 bg-light h-100" role="button"><i class="fa-solid fa-cart-shopping"></i> CART <i
                        class="fa-solid fa-angle-down"></i>
                </div>

            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>
section {
    height: 60px;

    .account-button {
        height: 100%;
        align-self: center;
        vertical-align: middle;
        line-height: 60px;
        font-size: .8rem;
    }
}
</style>