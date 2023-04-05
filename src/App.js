import './App.css';
import TodoList from './Todo/TodoList'
import { useState } from 'react'
import AddTodo from './Todo/AddTodo'

function App () {
    const [todos, setTodos] = useState([
        { id:1, title:'Buy meat', completed:false },
        { id:2, title:'Buy cheese', completed:true },
        { id:3, title:'Buy chocolate', completed:false }
    ])

    function toggleTodo (id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) todo.completed = !todo.completed
                return todo
            })
        )
    }

    function addTodo (title) {
        setTodos(todos.concat([{
            title,
            id:Date.now(),
            completed:false
        }]))
    }

    return (
        <div className="wrapper">
            <h1>TodoList</h1>
            <TodoList
                todos={todos}
                onToggle={toggleTodo}
            />
            <AddTodo onCreate={addTodo}/>
        </div>
    )
}

export default App;
