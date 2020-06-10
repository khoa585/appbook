import * as Types from '../contants/ActionType'
import {fetchListProduct} from '../api/products'
export const actFetchProductsRequest  = () =>{
    return (dispatch) =>{
        return fetchListProduct(1,6).then(res => {
            dispatch(actFetchProducts(res.data?.data));
        });
    }
}

export const actFetchProducts = (products) => {
    return {
        type: Types.FETCH_PRODUCTS,
        products
    }
}