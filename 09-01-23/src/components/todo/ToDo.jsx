import "./todo.scss";

const ToDo = ({todo, handleToggle}) => {

    const handleClick = (e) => {
        e.preventDefault()
        handleToggle(e.currentTarget.id)
    }

    return (
        <div id={todo.id} key={todo.id + todo.task} name="todo" value={todo.id} onClick={handleClick} className={todo.complete ? "todo-true strike" : "todo"}>
            {todo.task}
        </div>
    );
};

export default ToDo;