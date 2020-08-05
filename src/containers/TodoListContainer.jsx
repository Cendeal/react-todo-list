import TodoList from "../components/TodoList";

const {connect} = require("react-redux");


const mapStateToProps = (state) => {
    return {
        todoList: state.todoList
    }
}


const TodoListContainer = connect(mapStateToProps)(TodoList)
export default TodoListContainer