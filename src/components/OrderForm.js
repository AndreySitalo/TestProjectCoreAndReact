import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { GetCities } from '../services/cities';
import { NewOrder } from '../services/orders';
import { Form, Modal, Button} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const NewOrderModal = () => {
    const { register, handleSubmit} = useForm();


    const [show, setShow] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const cities = useSelector(state => state.citiesReduser.cities);
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        data.date = startDate;
        console.log(startDate);
        console.log(data);
        NewOrder(dispatch, data);
        handleClose();
    };

    useEffect(() => {
        GetCities(dispatch);
    }, []);



    return (
        <div>
            <Button onClick={handleShow} className='btn btn-succes'>Создать заказ</Button>
            <Modal show={show} onHide={handleClose}>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Форма заказа</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form.Group >
                            <Form.Label>Город отправителя</Form.Label>
                            <Form.Control as="select" name="cityFromId" ref={register({ required: true })} >
                                {
                                    cities.map(city => {
                                        return <option value={city.city.id}>{city.city.name}</option>
                                    })
                                }
                            </Form.Control>
                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Адрес отправителя</Form.Label>
                            <Form.Control type="text" placeholder="" name="addressFrom" required ref={register({ required: true })} />

                        </Form.Group>
                        <Form.Group >
                            <Form.Label>Город получателя</Form.Label>
                            <Form.Control as="select" name="cityToId" ref={register({ required: true })} >
                                {
                                    cities.map(city => {
                                        return <option value={city.city.id}>{city.city.name}</option>
                                    })
                                }
                            </Form.Control>
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Адрес Получателя</Form.Label>
                            <Form.Control type="text" placeholder="" required name="addressTo" ref={register({ required: true })} />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Вес</Form.Label>
                            <Form.Control type="number" placeholder="" required name="weight" ref={register({ required: true })} />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Дата</Form.Label>
                            <DatePicker style={{ marginLeft: '10px' }} className="form-control" type="text" name="date" selected={startDate} onChange={date => setStartDate(date)} />
                        </Form.Group>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Закрыть</Button>
                        <Button variant="primary" type='submit' >Сохранить</Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </div>
    );
}
