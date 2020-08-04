import TodoList from "../components/TodoList";
import todoStatus from "../constants/todoStatus";

const {connect} = require("react-redux");


const mapStateToProps = (state) => {
    return {
        todoList: state.todoList.filter(todo => todo.status === todoStatus.DONE)
    }
};


const DoneTodoListContainer = connect(mapStateToProps)(TodoList);
export default DoneTodoListContainer