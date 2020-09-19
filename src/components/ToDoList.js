import React from "react";
import ToDo from "./ToDo";

const ToDoList = ({ todos, setTodos, filteredTodos }) => {
    
    
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
          <ToDo 
          setTodos={setTodos} 
          todo={todo} 
          todos={todos}
          key={todo.id} 
          text={todo.text} 
          />
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
