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
      await fetch("http://localhost:3000/todos/")
        .then(res => res.json())
        .then(data => {
          state.value.todos = data
          // debugger
        })
    }
    catch (error) {
      console.log(error) // do different error to showcase - line 15 wrong name + line13 with incorrect path
    }
  }

  const newTodo = () => {
    console.log("Sending newTodo request...");
    const requestOptions = {
      method: "POST",
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
        // t_status:  state.value.NewT_status,
      })
    }
    console.log("Request payload:", requestOptions.body);
    fetch("http://localhost:3000/todos/new",
      requestOptions
    ).then(GetAllTodos())
  }

  const deleteTodo = (_id) => {
    fetch("http://localhost:3000/todos/delete/" + _id, { method: "DELETE" })
      .then(GetAllTodos())
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
        t_status: state.value.NewT_status,
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