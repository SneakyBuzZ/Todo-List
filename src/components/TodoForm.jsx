import { useState } from "react"
import { useTodo } from "../contexts/TodoContext";


function TodoForm() {

    const [todo, setTodo] = useState("")
    const { addTodo } = useTodo()

    const addOperation = (e) => {
        e.preventDefault();
        if (!todo) return
        addTodo({ todoText: todo, completed: false });
        setTodo("")
    }


    return (
        <>
            <form onSubmit={addOperation} className="w-full h-full flex flex-row" action="">
                <input className={`w-4/5 rounded-l-xl focus-visible:outline-none pl-5 font-sans text-md`}
                    type="text"
                    placeholder="Write your Todo..."
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                />
                <button className={`w-1/5 bg-gray-600 rounded-r-xl text-stone-200 text-md`} type="submit">Add</button>
            </form>
        </>
    )
}

export default TodoForm
