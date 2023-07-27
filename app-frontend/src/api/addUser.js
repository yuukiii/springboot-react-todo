import axios from "axios";

async function addUser(user) {
    return axios.post(`http://localhost:8080/users/`,
        user
    ,{
        headers: {
        "Content-Type": "application/json",
    }
    }).then((data) => data.data)
        .catch(error => {
            console.log(error);
        });
}

export default addUser;
