function tasksReducer(tasks, action) {
  switch (action.type) {
    case "add": {
      return [
        ...tasks,
        {
          id: action.id,
          task: action.task,
          done: false,
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

export default tasksReducer;
