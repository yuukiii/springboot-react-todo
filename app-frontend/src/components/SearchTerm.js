import React, {useState} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
// import { FaUser, FaLock } from "react-icons/fa";
import searchTerm from "../api/searchTerm.js";
import AddUserTodo from "./AddUserTodo"
import UpdateItem from "./UpdateTodo"
import DeleteUserTodo from "./DeleteTodo"

import {Container, Row, Col, Button, Card} from 'react-bootstrap';
export default function SearchTerm() {
    const [todo, searchTodo] = useState();
    const [searchResult, setSearchResult] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await searchTerm(
            todo
        );
        if (data && data[0] && data[0].todoItems && data[0].todoItems[0].description) {
            let searchResp = data.map((user) => {
                return user.todoItems.map((todoItem, index) => {
                    return <li key={index}>User, {user.name} has the following task, {todoItem.description}, with
                        priority {todoItem.priority}, and a status
                        of, {todoItem.status ? todoItem.status : "not started"}. The task id is {todoItem.id} </li>;
                });

            });
            setSearchResult(searchResp);
        } else {
            setSearchResult("no tasks")
        }
    };

    return (

        <Container className="mt-5">
                <form
                    className="fw-full md:w-1/3 bg-white rounded-lg"
                    onSubmit={handleSubmit}
                >
                    <Row>
                        <Col md={6}>
                            <div className="flex font-bold justify-center mt-6">
                              <span className="mb-4">
                                <LazyLoadImage src="../../public/avatar.svg" alt=""/>
                              </span>


                            </div>
                        </Col>
                    </Row>


                    <Row>
                        <Col md={6}>
                            <Card>
                                <Card.Body>
                                    <Card.Title>
                                        <h2 className="text-3xl text-center text-gray-700 mb-4 py-5">
                                            Search Todo by description
                                        </h2>
                                    </Card.Title>
                                    <Card.Text>
                                        <label htmlFor="todo">Todo Description:</label>
                                        <input
                                            id="todo"
                                            type="text"
                                            placeholder="search"
                                            className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500"
                                            onChange={(e) => searchTodo(e.target.value)}
                                        />

                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col md={6}>
                            <Card>
                                <Card.Body >
                                    <Card.Text>
                                        <Button variant="primary" className="mt-3" type="submit" >
                                            Search Todo
                                        </Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Header> Added User</Card.Header>
                                <Card.Body>
                                    <a href={todo}> {searchResult}</a>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>


                </form>

                <div>

                </div>
                <div>
                    <AddUserTodo/>
                </div>
                <div>
                    <UpdateItem/>
                </div>
                <div>
                    <DeleteUserTodo/>
                </div>
        </Container>


    );
}
