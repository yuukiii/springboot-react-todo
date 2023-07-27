import React, {useState} from 'react';
import addUser from "../api/addUser";
import addTodo from "../api/addTodo";

const AddUserTodo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [users, setUsers] = useState([]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const user = {"id": "1",name, email};
        const todo = { description, dueDate, priority, user };
        setUsers([...users, user]);
        setName('');
        setDescription('');

        const data = await addUser(user);
        console.log(data);

        const todoData = await addTodo(todo);
        console.log(todoData)

    };

    return (
        <div>
            <h2>Add User with Todo Item</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
                </label>
                <br/>
                <label>
                    Todo Description:
                    <input type="text" value={description} onChange={(event) => setDescription(event.target.value)}/>
                </label>
                <br/>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(event) => setEmail(event.target.value)}/>
                </label>
                <br/>
                <label>
                    Priority:
                    <input type="text" value={priority} onChange={(event) => setPriority(event.target.value)}/>
                </label>
                <br/>
                <label>
                    Due Date:
                    <input type="datetime-local" value={dueDate} onChange={(event) => setDueDate(event.target.value)}/>
                </label>
                <br/>
                <button type="submit">Add User</button>
            </form>
            <br/>
            <h3>Users:</h3>
            <ul>
                {

                    users.map((user, index) => (
                        <li key={index}>
                            {user.name} - {user.email}
                        </li>
                    ))
                }

            </ul>
        </div>
    );
};

export default AddUserTodo;
