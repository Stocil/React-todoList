import { createContext, useEffect, useReducer } from "react";
import PropTypes from "prop-types";

import useLocalStorage from "../hooks/useLocalStorage";

export const TodoContext = createContext(null);
export const TodoDispatchContext = createContext(null);

export function TodoTransmitter({ children }) {
  const { setTodoItem, getTodoItem } = useLocalStorage("todos");
  const initialTasks = getTodoItem();
  const [todos, dispatch] = useReducer(tasksReducer, initialTasks);

  useEffect(() => {
    setTodoItem(todos);
  }, [todos, setTodoItem]);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          task: action.task,
          done: false,
          date: null,
          lastChange: new Date().getTime(),
        },
      ];
    }
    case "remove": {
      return tasks.filter((task) => {
        if (task.id !== action.id) {
          return task;
        }
      });
    }
    case "toggle complite": {
      return tasks.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            done: !task.done,
            date: action.date,
            lastChange: new Date().getTime(),
          };
        } else {
          return task;
        }
      });
    }
    case "edit": {
      return tasks.map((task) => {
        if (task.id === action.id) {
          return {
            ...task,
            task: action.task,
          };
        } else {
          return task;
        }
      });
    }
    default: {
      throw Error("Wrong action: " + action.type);
    }
  }
}

TodoTransmitter.propTypes = {
  children: PropTypes.object,
};
