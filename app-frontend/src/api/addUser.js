// import axios from "axios";

// async function addUser(user) {
//     return axios.post(`http://localhost:8080/users/`,
//         user
//     ,{
//         headers: {
//         "Content-Type": "application/json",
//     }
//     }).then((data) => data.data)
//         .catch(error => {
//             console.log(error);
//         });
// }

// async function addUser(user) {
//     try {
//         const response = await fetch(`http://localhost:8080/users/`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         });
//         const data = await response.json();
//         return data;
//     } catch (error) {
//         console.log(error);
//     }
// }

async function addUser(user) {
    return fetch(`http://localhost:8080/users/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            console.log(response);
            return response;
        })
        .catch(error => console.log(error));
}


export default addUser;
