import TodoForm from "../components/TodoForm";
import {addTodo as addTodoAction} from "../actions";
import {connect} from "react-redux"
import {addTodo} from "../api/todoApi";
import todoStatus from "../constants/todoStatus";

const mapDispatchToProps = (dispatch) => ({
    addTodo: async (todo) => {
        const data = await addTodo({
            text: todo,
            time: new Date(),
            status: todoStatus.DOING
        })
        dispatch(addTodoAction(data))
    }
})
const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm)
export default TodoFormContainer