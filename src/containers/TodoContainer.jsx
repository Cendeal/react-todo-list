import Todo from "../components/Todo";
import {markCancel, markDone,deleteTodo as deleteTodoAction} from "../actions";
import {deleteTodo, updateTodoById} from "../api/todoApi";
import todoStatus from "../constants/todoStatus";


const {connect} = require("react-redux");


const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: async (id) => {
            await deleteTodo(id)
            dispatch(deleteTodoAction(id))
        },
        markDone: async (id) => {
            await updateTodoById(id, {
                status: todoStatus.DONE
            })
            dispatch(markDone(id))
        },
        markCancel: async (id) => {
            await updateTodoById(id, {
                status: todoStatus.DOING
            })
            dispatch(markCancel(id))
        }
    }
}

const TodoContainer = connect(null, mapDispatchToProps)(Todo)
export default TodoContainer