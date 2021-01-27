import * as actionTypes from '../actions/actionsTypes';
import {updatedObject} from '../utility';

const initialState = {
    order: [],
    loading: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PURCHASE_BURGER_SUCCESS: 
        const newOrder = {
                ...action.orderData,
                id: action.orderId
            };
        return updatedObject(state, {loading: false, order: state.order.concat(newOrder)});
        case actionTypes.PURCHASE_BURGER_FAIL: 
        return updatedObject(state, {loading: false});
        case actionTypes.PURCHASE_BURGER_START: 
        return updatedObject(state, {loading: true});
        case actionTypes.FETCH_ORDER_START: 
        return updatedObject(state, {loading: true});
        case actionTypes.FETCH_ORDER_SUCCESS: 
        return updatedObject(state, {loading: false, order: action.order}); 
        case actionTypes.FETCH_ORDER_FAIL: 
        return updatedObject(state, {loading: false});
    };
    return state
}; 

export default reducer;