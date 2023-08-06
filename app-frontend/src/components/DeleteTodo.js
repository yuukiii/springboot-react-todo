import React, {useState} from 'react';
import deleteTodo from "../api/deleteTask";

import {Container, Row, Col, Button} from 'react-bootstrap';

const DeleteUserTodo = () => {

    const [id, setId] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();


        const data = await deleteTodo(id);
        console.log(data);


    };

    return (
        <Row>
            <Col><h2>Delete task with Id</h2></Col>
            <Col>

                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <label>
                                id:
                                <input type="id" value={id} onChange={(event) => setId(event.target.value)}/>
                            </label>
                        </Col>
                        <Col>
                            <Button type="submit">Delete Task</Button>
                        </Col>
                    </Row>
                </form>
            </Col>

        </Row>
    );
};

export default DeleteUserTodo;
