import {Todo} from "../model/Todo";


async function updateTodo( id:number, status:string ) {

    try {

        const response = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then( response =>{
             response.json().then( data =>{
                  console.log(data);
                  let _todo = data;
                  _todo.status = status;
                  fetch(`http://localhost:8080/todos/${id}`, {
                      method: 'PUT',
                      headers: {
                          'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(_todo)
                  })
                      .then(response => {
                          if (response.ok) {
                              console.log('Todo updated successfully');
                          } else {
                              console.error('Failed to delete todo');
                          }

                          return _todo;
                      })
                      .catch(error => {
                          console.error('An error occurred:', error);
                      });
              });




        });

    } catch (error) {
        console.log(error);
    }
}

export default updateTodo;
