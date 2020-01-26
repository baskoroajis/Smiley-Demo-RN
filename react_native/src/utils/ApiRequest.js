import axios from 'axios'

const BASE_URL = 'http://192.168.0.7:3000/'

export function getProducts(limit = 10, page = 1){
    return axios.get(BASE_URL+'products');
}
