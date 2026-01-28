/*Create a function called fetchUserTodos that uses the Promise.all() method to fetch users and todos concurrently from the provided API endpoints and combine them based on the userId. The function should return a promise that resolves with the combined data.

- Users endpoints https://jsonplaceholder.typicode.com/users
- Todos endpoints https://jsonplaceholder.typicode.com/todos

The returned promise should resolve into an array of users, where each user object has a new key todos. This key shoul
// User object may look like
{
    id: 10,
  name: 'Clementina DuBuque',
  ...
}

// Todo object may look like
{
    userId: 5,
  completed: false,
    ...
}

// The result array will have objects that look like

{
    id: 10,
  name: 'Clementina DuBuque',
  todos: [
        {
            userId: 10,
          completed: false,
            ...
        },
        {
            userId: 10,
          completed: false,
            ...
        }
    ]
    ...
}*/
function fetchUserTodos(url1,url2){
    let user,todo;
    let promise=Promise.all([fetch(url1),fetch(url2)]).
    then(async responce=>{
      if(responce[0].ok){
        user=await responce[0].json();
      }
      if(responce[1].ok){
        todo=await responce[1].json();
      }
    });
    user.map(us=>us.todos=[]);
    let combined={...user};
    todo.forEach(element => {
      combined[element.userId].todos.push(element);
    });
    return combined;

}
let user="https://jsonplaceholder.typicode.com/users"
let todo="https://jsonplaceholder.typicode.com/todos"

fetchUserTodos(user,todo);
