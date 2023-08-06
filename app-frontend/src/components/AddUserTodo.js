import React, {useState} from 'react';
import addUser from "../api/addUser";
import addTodo from "../api/addTodo";

import {Container, Row, Col, Button} from 'react-bootstrap';

const AddUserTodo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        let id = Math.floor(Math.random() * 100) + 1
        const user = {
            id: id,
            name,
            email
        };
        const todo = {description, dueDate, priority, user};
        setUsers([...users, user]);
        setName('');
        setDescription('');

        const data = await addUser(user);
        console.log(data);

        const todoData = await addTodo(todo);
        console.log(todoData)

    };

    return (
        <Row>
            <Row><h2>Add User with Todo Item</h2></Row>
            <Row>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <label>
                                Name:
                                <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                            </label>
                        </Col>
                        <Col>
                            <label>
                                Todo Description:
                                <input type="text" value={description}
                                       onChange={(event) => setDescription(event.target.value)}/>
                            </label>
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <label>
                                Email:
                                <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                            </label>
                        </Col>
                        <Col>
                            <label>
                                Priority:
                                <input type="text" value={priority}
                                       onChange={(event) => setPriority(event.target.value)}/>
                            </label>
                        </Col>
                        <Col>
                            <label>
                                Due Date:
                                <input type="datetime-local" value={dueDate}
                                       onChange={(event) => setDueDate(event.target.value)}/>
                            </label>
                        </Col>
                    </Row>
                    <br/>
                    <Button type="submit">Add User</Button>
                </form>
            </Row>

            <br/>

            <h3 hidden={users.length == 0}>Added Users:</h3>


            <ul>
                {

                    users.map((user, index) => (
                        <li key={index}>
                            {user.id} - {user.name} - {user.email}
                        </li>
                    ))
                }

            </ul>
        </Row>
    );
};

export default AddUserTodo;
