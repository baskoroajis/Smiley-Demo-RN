export const IS_LOADING = 'IS_LOADING';
export const IS_SUCCESS = 'IS_SUCCESS';
export const IS_FAILED = 'IS_FAILED';

export const GET_PRODUCTS = 'GET_PRODUCTS';

export function getProducts(page,limit,sort,indexAds){
    params = [page,limit,sort,indexAds]
    return{
      type: GET_PRODUCTS,
      params : params,
    }
  }
  
