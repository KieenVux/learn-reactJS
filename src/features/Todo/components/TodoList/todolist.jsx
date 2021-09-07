import React from "react";
import PropTypes from "prop-types";
import "./todolist.css";

function TodoList(props) {
  const { todoList, onClickTodo } = props;

  return (
    <div>
      <ul className="todoList">
        {todoList.map((todo, index) => (
          <li
            key={todo.id}
            className={todo.status === "Completed" ? "complete-task" : ""}
            onClick={() => onClickTodo(todo, index)}
          >
            {todo.title}
            <br />
            <p>{todo.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  onClickTodo: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onClickTodo: null,
};

export default TodoList;
