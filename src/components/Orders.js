import React, { useEffect } from 'react';
import { OrdersTable } from './OrdersTable'
import { NewOrderModal } from './OrderForm'

export const Orders = () => {

    return (<><div style={{ maxWidth: '70%', margin: 'auto' }}><OrdersTable /></div><NewOrderModal /></>)

}