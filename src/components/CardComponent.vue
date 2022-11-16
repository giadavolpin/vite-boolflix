//FILM
<template>
    <div class="cards d-flex justify-content-center align-content-center">
        <div class="card">

        </div>
        <div class="card">

        </div>
        <div class="card">

        </div>
        <div class="card">

        </div>
        <div class="card">

        </div>
    </div>
</template>

<script>

export default {
    name: 'CardComponent';
    data() {
        return {
            apiURL: 'https://api.themoviedb.org/3/movie/550?api_key=23e9105b1d7dc802906a747266351a62',
            key: []
        }
    },
    methods: {
        getApi() {
            axios.get(this.apiURL).then(
                (res) => {
                    this.key = [...res.data];
                    console.log(this.key);
                }
            )
        }
    },
    created() {
        this.getApi();
    }

}
</script>

<style lang="scss" scoped>

</style>