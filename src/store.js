import { reactive } from "vue";     //riga 1,3 serve per importarsi lo store che deve avere dei parametri. 

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/',
    endPoint: '/search/movie',
    params: {
        api_key: '23e9105b1d7dc802906a747266351a62',
        query: '', //deve avere almeno un carattere
        language: 'it-IT',

    },
    movie: []
})