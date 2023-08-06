// import axios from "axios";

// async function searchTerm(todo) {
//     return axios.get(`http://localhost:8080/users/search?description=${todo}`, {
//         headers: {
//             "Content-Type": "application/json",
//         },
//     }).then((data) => data.data)
//         .catch(error => {
//         console.log(error);
//     });
// }

async function searchTerm(todo) {
    const response = await fetch(`http://localhost:8080/users/search?description=${todo}`);
    const data = await response.json();
    return data;
}

export default searchTerm;
