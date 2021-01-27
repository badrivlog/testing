import * as actionTypes from './actionsTypes';
import axios from '../../axios-order';



export const purchaseBurgerStart = () =>{
    return {
        type: actionTypes.PURCHASE_BURGER_START
    };
};

export const orderBurgerStart = (order) => {
    return dispatch => {
        dispatch(purchaseBurgerStart());
        axios.post('/orders.json', order)
        .then(res => {
            console.log(res);
            dispatch(orderBurgerSuccess(res.data.name, order));
        }).catch(err => {
            dispatch(orderBurgerFail(err));
        });
    };
};

export const orderBurgerSuccess = (id, orderData) => {
    return {
        type: actionTypes.PURCHASE_BURGER_SUCCESS,
        orderId: id,
        orderData: orderData
    };
};

export const orderBurgerFail = (error) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: error
    };
};

export const fetchOrderStart = () => {
    return {
        type: actionTypes.FETCH_ORDER_START
    };
};

export const orderFetch = () => {
    return dispatch => {
        dispatch(fetchOrderStart());
        axios.get('/orders.json')
        .then(res =>{
            const fetchOrder = [];
            for ( let key in res.data){
                fetchOrder.push({
                    ...res.data[key],
                    id: key
                });
            };
            dispatch(fetchOrderSuccess(fetchOrder));
        }).catch(err=>{
            dispatch(fetchOrderFail(err))
        })
    };
};

export const fetchOrderSuccess = (orders) => {
    return {
        type: actionTypes.FETCH_ORDER_SUCCESS,
        order: orders
    };
};

export const fetchOrderFail = (err) => {
    return {
        type: actionTypes.PURCHASE_BURGER_FAIL,
        error: err
    };
};