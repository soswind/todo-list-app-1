import React from 'react';
import { useEffect, useState } from 'react';


const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newTodo, setNewTodo] = useState('');

useEffect(() => {
    const fetchTodos = async () => {
        try {
            const response = await fetch('api/todos');
            const data = await response.json();
            setTodos(data);
        } catch (error) {
            console.error('Error fetching todos:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchTodos();
}, []);

const handleAddTodo = async () => {
    if (!newTodo.trim()) return;
        try {
            const response = await fetch('api/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title: newTodo, completed: false }),
            });
            const data = await response.json();
            setTodos([...todos, data]);
            setNewTodo('');
        } catch (error) {
            console.error('Error adding todo:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await fetch(`api/todos/${id}`, {
                method: 'DELETE',
            });
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error('Error deleting todo:', error);
        }
    }; 

    if (loading) {
        return <div className="text-center">Loading...</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Todos</h1>
            <div className="mb-4">
                <input 
                    type="text"
                    className="border p-2"
                    placeholder="Add new todo"
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)}
                />
                <button 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={handleAddTodo}
                >
                    Add
                    </button>
                </div>
                <ul className="list-disc pl-5">
                {todos.map(todo => (
                    <li key={todo.id} className="mb-2 flex justify-between items-center">
                        <span>{todo.title}</span>
                        <button
                            className="bg-red-500 text-white px-2 py-1 rounded"
                            onClick={() => handleDelete(todo.id)}
                        >
                            Delete
                        </button>
                    </li>
                    ))}
                </ul>
            </div>
        );
    }; 

    export default TodoList;