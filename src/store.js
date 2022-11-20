import { reactive } from "vue";     //riga 1,3 serve per importarsi lo store che deve avere dei parametri. 
// import axios from 'axios';

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/',
    endPoint: '/search/movie',
    params: {
        api_key: 'e99307154c6dfb0b4750f6603256716d&query=a',
        query: '', //deve avere almeno un carattere
        language: 'it-IT',

    },
    movie: []
})