import axios from 'axios'

//Change BASE_URL with your server IP 
export const BASE_URL = 'http://192.168.0.7:3000/'

export function getProducts(page,limit,sort){
    return axios.get(BASE_URL+'products?_page='+page+'&_limit='+limit+'&_sort='+sort);
}
