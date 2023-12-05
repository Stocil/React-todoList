import Input from "../Input/Input";
import TodoList from "../TodoList/TodoList";
import { TodoTransmitter } from "../../context/tasksContextReducer";
import { ThemeProvider } from "../../context/themeContext";

function TodoManager() {
  return (
    <TodoTransmitter>
      <ThemeProvider>
        <Input />
        <TodoList />
      </ThemeProvider>
    </TodoTransmitter>
  );
}

export default TodoManager;
