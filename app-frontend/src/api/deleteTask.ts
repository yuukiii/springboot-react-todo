


async function deleteTodo(id:string) {

    try {

        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then( response =>{
            const data = response;
            console.log(data);
            fetch(`http://localhost:8080/todos/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
            })
                .then(response => {
                    if (response.ok) {
                        console.log('Todo deleted successfully');
                    } else {
                        console.error('Failed to delete todo');
                    }
                })
                .catch(error => {
                    console.error('An error occurred:', error);
                });
        });

    } catch (error) {
        console.log(error);
    }
}

export default deleteTodo;
