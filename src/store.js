import { reactive } from "vue";

export const store = reactive({
    baseUrl: 'https://api.themoviedb.org/3/',
    endPoint: '/search/movie',
    params: {
        api_key: '23e9105b1d7dc802906a747266351a62',
        query: '',
        languege: 'it-IT'
    },
    movie: []
})