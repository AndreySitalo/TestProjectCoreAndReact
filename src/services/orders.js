import { ActionCreators } from '../redux/ordersReducer';
import * as axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://localhost:44323/orders',
})


export const GetOrders = async (dispatch) => {
    try {
        const { data } = await axiosInstance.get();
        console.log(data);
        dispatch(ActionCreators.setOrders(data));

    } catch{
        console.log('Error1');
    }
}

export const NewOrder = async (dispatch, order) => {
    try {
        order.cityFromId = parseInt(order.cityFromId);
        order.cityToId = parseInt(order.cityToId);
        order.weight = parseFloat(order.weight);

        const { data } = await axiosInstance.post('', order );
        dispatch(ActionCreators.newOrder(data));

    } catch{
        console.log('Error');
    }
}