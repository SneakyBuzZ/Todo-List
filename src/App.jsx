import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"
import { TodoProvider } from "./contexts/TodoContext"

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prevTodo) => [{ id: Date.now(), ...todo }, ...prevTodo])
  }

  const editTodo = (id, todo) => {
    setTodos((prevTodo) => prevTodo.map((eachTodo) => (eachTodo.id === id ? todo : eachTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prevTodo) => prevTodo.filter((eachTodo) => eachTodo.id !== id))
  }

  const completeTodo = (id) => {
    setTodos((prevTodo) => prevTodo.map((eachTodo) => eachTodo.id === id ? { ...eachTodo, completed: !eachTodo.completed } : eachTodo))
  }

  useEffect(() => {
    const localTodo = JSON.parse(localStorage.getItem("todos"))
    if (localTodo && localTodo.lenght > 0) {
      setTodos(localTodo)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoProvider value={{ addTodo, deleteTodo, editTodo, completeTodo }}>
      <div className="container w-full bg-gray-800 h-lvh flex justify-center ">
        <div className="todoContainer bg-stone-200 h-96 w-5/12 p-3 my-36 rounded-2xl ">
          <div className="todoForm h-12  rounded-xl">
            <TodoForm />
          </div>
          <div className="todoItem flex flex-wrap gap-y-3 my-3">
            {todos.map((eachTodo) => (<div className="w-full h-full" key={eachTodo.id}><TodoItem todo={eachTodo} /></div>))}
          </div>
        </div>
      </div>
    </TodoProvider>
  )
}

export default App
