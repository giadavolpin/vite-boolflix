//FILM
<template>
    <div class="cards d-flex justify-content-center align-content-center">
        <div class="card" v-for="charater in charaters">
            <img :src="charaters.img" alt="" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    axios,
    name: 'CardComponent',
    data() {
        return {

        }
    },
    methods: {

    },
    created() {

    }

}
</script>

<style lang="scss" scoped>

</style>