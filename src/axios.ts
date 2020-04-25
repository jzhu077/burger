import axios from 'axios'

export const Axios = axios.create({
    baseURL: 'https://burger-bec3b.firebaseio.com/'
})
