import React from 'react';
import TodoList from './components/TodoList';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>To Do List</h1>
            <TodoList />
        </div>
    );
};

export default App;