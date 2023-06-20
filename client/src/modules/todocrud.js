import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const getTodos = () => {

  const route = useRoute();

  const todoId = computed(() => route.params.id)
  //console.log("todoId: ", todoId)

  const state = ref({
    newAuthor: '',
    newTodoItem: '',
    NewT_name: '',
    NewT_description: '',
    NewT_progress: '',
    NewT_due_date: '',
    NewT_priority: '',
    // NewT_status: '',
    todos: {},

  })

  const GetAllTodos = async () => {
    try {
      let userId = ""

      await fetch('http://localhost:3000/authUser', {
        method: 'GET',
        credentials: 'include',
      })
        .then(response => {
          if (response.ok) {
            // Handle the successful response
            return response.json();
          } else {
            console.log("Request failed!!!");
            throw new Error('Request failed.');
          }
        })
        .then(data => {
          // Handle the response data
          console.log(JSON.stringify(data));
          userId = data.decodedToken.id
        })
        .catch(error => {
          // Handle any errors that occurred during the request
          console.error('Request error: ', error);
        });

      if (userId) {
        console.log(userId)
        await fetch("http://localhost:3000/todos/")
          .then(res => res.json())
          .then(data => {
            console.log(data)
            const filteredData = data.filter((todo) => todo.user_id === userId);
            state.value.todos = filteredData;
            // debugger
          })
      }
    }
    catch (error) {
      console.log(error) // do different error to showcase - line 15 wrong name + line13 with incorrect path
    }
  }

  // todos/new : create new todo 
  const newTodo = async () => {
    let userId = ""

    await fetch('http://localhost:3000/authUser', {
      method: 'GET',
      credentials: 'include',
    })
      .then(response => {
        if (response.ok) {
          // Handle the successful response
          return response.json();
        } else {
          console.log("Request failed!!!");
          throw new Error('Request failed.');
        }
      })
      .then(data => {
        // Handle the response data
        console.log(JSON.stringify(data));
        userId = data.decodedToken.id
      })
      .catch(error => {
        // Handle any errors that occurred during the request
        console.error('Request error: ', error);
      });

      console.log(userId)

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
        // "auth-token": state.token
      },
      body: JSON.stringify({
        user_id: userId,
        t_name: state.value.NewT_name,
        t_description: state.value.NewT_description,
        t_progress: state.value.NewT_progress,
        t_due_date: state.value.NewT_due_date,
        t_priority: state.value.NewT_priority,
        // t_status:  state.value.NewT_status,
      })
    }
    console.log("Request payload:", requestOptions.body);
    await fetch("http://localhost:3000/todos/new",
      requestOptions
    ).then(GetAllTodos())
    console.log("todocrud.js : created new todo");
  }

  const deleteTodo = (_id) => {
    fetch("http://localhost:3000/todos/delete/" + _id, { method: "DELETE" })
      .then(GetAllTodos())
      .then(alert('Successfully delete task!'))
  }

  const editTodo = (_id) => {
    console.log(state);
    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
        // "auth-token": state.token
      },
      body: JSON.stringify({
        t_name: state.value.NewT_name,
        t_description: state.value.NewT_description,
        t_progress: state.value.NewT_progress,
        t_due_date: state.value.NewT_due_date,
        t_priority: state.value.NewT_priority,
        // t_status: state.value.NewT_status,
      })
    }
    fetch("http://localhost:3000/todos/update/" + _id,
      requestOptions)
      // .then(response => response.json())
      // .then(res => res.body)
      // .then(res => console.log(res))
      // .then(alert('edited todo: ' + _id))

      .then(res => res.json())
      .then(data => {
        console.log(data); // Handle the response data as needed
      })
      .then(GetAllTodos())
      .catch(error => {
        console.error("Error:", error);
        // Handle the error appropriately
      });
    // router.push('/todos')
  }

  const todo = ref({})
  const GetSpecificTodo = async () => {
    try {
      fetch("http://localhost:3000/todos")
        .then(res => res.json())
        .then(data => {
          todo.value = data.filter(t => t._id === todoId.value);
        })
    }
    catch (error) {
      console.log(error)
    }
  }


  return {
    todo,
    todoId,
    GetSpecificTodo,
    state,
    GetAllTodos,
    newTodo,
    deleteTodo,
    editTodo
  }
}

export default getTodos