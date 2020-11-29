import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GetOrders } from '../services/orders';
import { GetCities } from '../services/cities';
import { Table } from 'react-bootstrap';


export const OrdersTable = () => {

    const orders = useSelector(state => state.ordersReduser.orders);
    const cities = useSelector(state => state.citiesReduser.cities);
    const dispatch = useDispatch();

    useEffect(() => {
        GetOrders(dispatch);
        GetCities(dispatch);
    }, []);

    return <Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>Номер заказа</th>
                <th>Город отправителя</th>
                <th>Адрес отправителя</th>
                <th>Город получателя</th>
                <th>Адрес получателя</th>
                <th>Вес груза</th>
                <th>Дата забора груза</th>
            </tr>
        </thead>
        <tbody>
            {
                orders.map(order => {
                    return <tr>
                        <td>{order.number}</td>
                        <td>{cities.find(city => city.city.id === order.cityFromId).city.name}</td>
                        <td>{order.addressFrom}</td>
                        <td>{cities.find(city => city.city.id === order.cityToId).city.name}</td>
                        <td>{order.addressTo}</td>
                        <td>{order.weight}</td>
                        <td>{order.date}</td>
                    </tr>
                })}
        </tbody>
    </Table>

}