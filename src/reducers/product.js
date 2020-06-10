import * as Types from '../contants/ActionType'

const initialState = {
    listView: []
}

function product(state = initialState, action) {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            return {
                ...state,
                listView: action.products
            }
        default:
            return state
    }
}
export default product