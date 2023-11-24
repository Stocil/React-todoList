import Todo from "../Todo/Todo";
import PropTypes from "prop-types";

function TodoList(props) {
  const { todos, onRemove, onComplite } = props;

  const tasks = todos.map((todo) => {
    return (
      <Todo
        todo={todo}
        onRemove={onRemove}
        onComplite={onComplite}
        key={todo.id}
      />
    );
  });

  return (
    <section className="todos">
      <div className="container">
        <ul className="todo__list">{tasks}</ul>
      </div>
    </section>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array,
  onRemove: PropTypes.func,
  onComplite: PropTypes.func,
};

export default TodoList;
