import React, { useState } from "react";
import TodoList from "./components/TodoList/todolist";

function TodoFeatures(props) {
  const initTodoList = [
    {
      id: 1,
      title: "Eat",
      status: "Not Yet",
    },
    {
      id: 2,
      title: "Sleep",
      status: "Completed",
    },
    {
      id: 3,
      title: "BA",
      status: "Not Yet",
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setFilterStatus] = useState("a");

  const onClickTodo = (todo, index) => {
    //clone array mẫu về
    const newTodoList = [...todoList];

    // lấy todo theo index
    const newTodo = {
      ...todoList[index],
      status: todoList[index].status === "Not Yet" ? "Completed" : "Not Yet",
    };
    //gán todo theo index vào array
    newTodoList[index] = newTodo;

    //update lại array
    setTodoList(newTodoList);
  };

  const onClickShowAll = () => {
    setFilterStatus("a");
  };
  const onClickShowCompleted = () => {
    setFilterStatus("Completed");
  };
  const onClickShowNotYet = () => {
    setFilterStatus("Not Yet");
  };

  const filterTodo = todoList.filter(
    (todo) => filterStatus === "a" || filterStatus === todo.status
  );

  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={filterTodo} onClickTodo={onClickTodo} />

      <button onClick={onClickShowAll}> Show All </button>
      <button onClick={onClickShowCompleted}> Show Completed </button>
      <button onClick={onClickShowNotYet}> Show Not Yet </button>
    </div>
  );
}

TodoFeatures.propTypes = {};

export default TodoFeatures;
