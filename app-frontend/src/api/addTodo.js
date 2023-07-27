import axios from "axios";

async function addTodo(todo) {
    return axios.post(`http://localhost:8080/todos/`,
        todo ,{
        headers: {
            "Content-Type": "application/json",
        }
    }).then((data) => {
        console.log(data)
        return data.data;
    })
        .catch(error => {
            console.log(error);
        });
}

export default addTodo;
