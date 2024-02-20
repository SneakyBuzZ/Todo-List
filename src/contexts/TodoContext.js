import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todoText: "This is Todo text",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    editTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    completeTodo: (id) => { }
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
    return useContext(TodoContext);
}

