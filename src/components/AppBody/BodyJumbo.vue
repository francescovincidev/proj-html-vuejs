<script>
import { store } from '../../store';


export default {
    name: "BodyJumbo",
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section class="">
        <div class="w-75 h-100 mx-auto text-center d-flex flex-column justify-content-center align-items-center">
            <h2 class="fw-bolder">Brand New Arrivals</h2>
            <h5 class="text-uppercase fw-normal">new collection from new york</h5>
            <div class="buttons fw-semibold">
                <button class="text-uppercase fw-semibold">view all</button>
                <button class="text-uppercase fw-semibold">lookbook</button>
            </div>


        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;
@use '../../style/partials/mixins' as *;

section {
    height: 450px;
    background-color: $grey-shark;
    color: white;
    font-size: .7rem;
    background-image: url("../../assets/img/home1_slide_three_bg_2.jpg");
    background-size: cover;

    h2 {
        font-size: 4rem;
    }

    .buttons {
        button {
            @include transparent-button;
            margin: 10px;
        }
    }
}
</style>