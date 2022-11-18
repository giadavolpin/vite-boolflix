//FILM
<template>
    <div class="media text-center">
        <h4>{{ item.original_title }}</h4>
        <div>{{ item.title }}</div>
        <div>{{ item.vote_average }}</div>
        <div>{{ item.original_language }}</div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    axios,
    name: 'CardComponent',
    prop: {
        item: object
    }

}
</script>

<style lang="scss" scoped>

</style>