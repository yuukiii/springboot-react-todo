// import axios from "axios";
//
// async function addTodo(todo) {
//     return axios.post(`http://localhost:8080/todos/`,
//         todo ,{
//         headers: {
//             "Content-Type": "application/json",
//         }
//     }).then((data) => {
//         console.log(data)
//         return data.data;
//     })
//         .catch(error => {
//             console.log(error);
//         });
// }
async function addTodo(todo) {
    try {
        const response = await fetch(`http://localhost:8080/todos/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });
        const data = await response;
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}

export default addTodo;
