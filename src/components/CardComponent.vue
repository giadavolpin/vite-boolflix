//FILM
<template>
    <div class="media text-center">
        <h4>{{ item.original_title }}</h4>
        <div>{{ item.title }}</div>
        <div>{{ item.vote_average }}</div>
        <div v-if="availableFlag.includes()">
            <img :src="'/image/' + item.original_language + '.png'" :alt="item.original_language + 'Flag'">
            <!-- dentro al src non ci vanno le graffe -->
        </div>
        <div v-else>{{ item.original_language }}</div>
    </div>

</template>

<script>
import axios from 'axios';

export default {
    axios,
    name: 'CardComponent',
    prop: {
        item: object
    },
    data({
        return: {
            availableFlag: [
        'de', 'fr', 'it', 'es', 'en' ]
},
})

}
</script>

<style lang="scss" scoped>

</style>