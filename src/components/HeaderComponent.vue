<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark green">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <h1>Boolflix</h1>
            </a>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Serie TV</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Film</a>
                    </li>
                </ul>
                <form class="d-flex" role="search" @submit.prevent="performSearch">
                    <!-- prevent fa in modo che non ricarica la pagina -->
                    <input class="form-control me-2" id="charactername" type="search" placeholder="Search title"
                        aria-label="Search" v-model.trim="text">
                    <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
import variables from '../assets/variables.scss';
import general from '../assets/general.scss';
import { store } from '../store';

export default {
    general,
    variables,
    store,
    name: 'HeaderComponent',
    data() {
        return {
            text: ''
        }
    },
    methods: {
        performSearch() {
            console.log(this.text);
            store.params.query = this.text;
        }
    }
}

</script>


<style lang="scss" scoped>
.green {
    color: rgb(25, 135, 84); //non me lo prende 
}
</style>