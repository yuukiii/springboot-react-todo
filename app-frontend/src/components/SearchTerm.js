import React, {useState} from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
// import { FaUser, FaLock } from "react-icons/fa";
import searchTerm from "../api/searchTerm.js";
import AddUserTodo from "./AddUserTodo"
import UpdateItem from "./UpdateTodo"
import DeleteUserTodo from "./DeleteTodo"

import {Container, Row, Col, Button} from 'react-bootstrap';

export default function SearchTerm() {
    const [todo, searchTodo] = useState();
    const [searchResult, setSearchResult] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = await searchTerm(
            todo
        );
        console.log(data);
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
        <Container>
            <div className="w-full h-screen flex items-center justify-center">
                <form
                    className="fw-full md:w-1/3 bg-white rounded-lg"
                    onSubmit={handleSubmit}
                >
                    <Row>
                        <Col>
                            <div className="flex font-bold justify-center mt-6">
          <span className="h-1 w-1">
            <LazyLoadImage src="../../public/avatar.svg" alt=""/>
          </span>


                            </div>
                        </Col>
                    </Row>
                    <h2 className="text-3xl text-center text-gray-700 mb-4 py-5">
                        Search Todo by description
                    </h2>
                    <div className="px-12 pb-10">
                        <div className="w-full mb-2">
                            <div className="flex items-center">
                                <label htmlFor="todo">Todo Description:</label>
                                <input
                                    id="todo"
                                    type="text"
                                    placeholder="search"
                                    className="-mx-6 px-8  w-full border rounded px-3 py-2 text-gray-700 focus:outline-none focus:border-indigo-500"
                                    onChange={(e) => searchTodo(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="mt-10">
                            <Button
                                // className="w-full py-2 rounded-full bg-green-600 text-gray-100 focus:outline-none focus:shodow-outline hover:bg-indigo-600 shadow-lg"
                                type="submit"
                            >
                                Search Todo
                            </Button>
                        </div>
                    </div>
                </form>
                <div>
                    <a href={todo}> {searchResult}</a>
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
            </div>

        </Container>
    );
}
