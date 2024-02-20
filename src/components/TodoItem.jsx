import { useState } from "react"
import { useTodo } from "../contexts/TodoContext"

function TodoItem({ todo }) {

    const [isTodoEditable, setisTodoEditable] = useState(false)
    const [todoMsg, settodoMsg] = useState(todo.todoText)

    const { editTodo, deleteTodo, completeTodo } = useTodo()

    const editOperation = () => {
        editTodo(todo.id, { ...todo, todoText: todoMsg })
        setisTodoEditable(false)
    }

    const completeOperation = () => {
        completeTodo(todo.id);
    }

    return (
        <>
            <div className={`itemContainer w-full h-10 flex flex-row items-center  rounded-xl ${todo.completed ? " bg-gray-300 " : "bg-stone-300"}`}>
                <input className=" w-8 bg-gray-200 flex flex-row cursor-pointer"
                    type="checkbox"
                    checked={todo.completed}
                    onChange={completeOperation} />
                <input className={`pl-3 h-8 bg-transparent w-8/12 rounded-md focus-visible:outline-none ${todo.completed ? " line-through" : ""}`}
                    type="text"
                    value={todoMsg}
                    onChange={(e) => settodoMsg(e.target.value)}
                    readOnly={!isTodoEditable} />
                <button className="edit  text-xs h-6 w-6 rounded-md flex justify-center items-center bg-gray-200 disabled:opacity-20 "
                    onClick={() => {
                        if (todo.completed) return;
                        if (isTodoEditable) {
                            editOperation();
                        } else setisTodoEditable((prevValue) => !prevValue)
                    }}
                    disabled={todo.completed}>
                    {isTodoEditable ? "📂" : "✏️"}
                </button>
                <button className="remove  text-xs h-6 w-6 rounded-md flex justify-center items-center bg-gray-200 focus-visible:scale-75"
                    onClick={() => deleteTodo(todo.id)}>
                    ❌
                </button>
            </div>
        </>
    )
}

export default TodoItem
