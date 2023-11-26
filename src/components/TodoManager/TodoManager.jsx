import Input from "../Input/Input";
import TodoList from "../TodoList/TodoList";
import { TodoTransmitter } from "../../context/tasksContextReducer";

function TodoManager() {
  return (
    <TodoTransmitter>
      <Input />
      <TodoList />
    </TodoTransmitter>
  );
}

export default TodoManager;
