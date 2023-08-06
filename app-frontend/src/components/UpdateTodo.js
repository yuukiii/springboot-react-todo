import React, {useState} from 'react';
import updateTodo from "../api/updateTask";
import {Todo} from "../model/Todo"

 const UpdateItem = () => {

    const [id, setId] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (event ) => {
        event.preventDefault();

        const data = await updateTodo(Number(id) , status);


    };

    return (
        <div>
            <h2>Update Todo with Id</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    id:
                    <input type="id" value={id} onChange={(event) => setId(event.target.value)}/>
                </label>
                <br/>
                <label>
                    Status:
                    <input type="text" value={status} onChange={(event) => setStatus(event.target.value)}/>
                </label>

                <br/>
                <button type="submit">Update Task</button>
            </form>
            <br/>
        </div>
    );
};
export default UpdateItem;
