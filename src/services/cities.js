import { ActionCreators } from '../redux/citiesReducer';
import* as axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'https://localhost:44323/cities',
})


export const GetCities = async (dispatch) => {
    try {
        const {data} = await axiosInstance.get();
        console.log('test');
        console.log(data);
        dispatch(ActionCreators.setCities(data));

    } catch{
        console.log('Error');
    }
}