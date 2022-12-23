import ToDo from './ToDo';
import "./todo.scss";
 
 
const ToDoList = ({toDoList, handleToggle}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} />
                )
            })}
        </div>
    );
};

export default ToDoList;