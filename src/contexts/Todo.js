import { createContext, useContext } from "react";


export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: "first todo",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (todo, id) => { },
    deleteTodo: (id) => { },
    togglebutton: (id) => { },
})

export const TodoProvider = TodoContext.Provider;

export const UseTodo = () => {
    return useContext(TodoContext)
}