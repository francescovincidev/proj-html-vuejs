<script>
import { store } from '../../store';


export default {
    name: "FooterSubscribe",
    data() {
        return {
            store,

        }
    }
}
</script>

<template>
    <section class="">

        <div class="w-75 h-100 mx-auto d-flex justify-content-between align-items-center">
            <div class="fw-semibold fs-5">
                <i class="fa-regular fa-envelope rounded-circle p-2 me-2"></i>
                Subscrive now and get special offers

            </div>
            <div class="d-flex w-50">
                <input class="rounded-pill p-2 w-75" type="text" placeholder="Insert your email">
                <button class="rounded-pill ms-3">send</button>
            </div>


        </div>
    </section>
</template>

<style lang="scss" scoped>
@use '../../style/partials/variables' as *;
@use '../../style/partials/mixins' as *;

section {
    height: 150px;
    background-color: $grey-fodera;
    color: white;

    i {
        background-color: $grey-shark;
        color: grey;
    }

    input {
        font-size: .7rem
    }

    button {
        @include blue-button;
        font-size: .8rem;
    }
}
</style>