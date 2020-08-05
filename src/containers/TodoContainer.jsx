import Todo from "../components/Todo";
import {markCancel, markDone, deleteTodo as deleteTodoAction} from "../actions";
import {deleteTodo, updateTodoById} from "../api/todoApi";
import todoStatus from "../constants/todoStatus";
import {notification} from "antd";


const {connect} = require("react-redux");


const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: async (id) => {
            await deleteTodo(id)
            notification.success({
                message: `Todo-${id} has deleted!`
            })
            dispatch(deleteTodoAction(id))
        },
        markDone: async (id) => {
            await updateTodoById(id, {
                status: todoStatus.DONE,
                updated: new Date()
            })
            notification.success({
                message: `Todo-${id} has marked as done!`
            })
            dispatch(markDone(id))
        },
        markCancel: async (id) => {
            await updateTodoById(id, {
                status: todoStatus.DOING,
                updated: new Date()
            })
            notification.success({
                message: `Todo-${id} has marked as doing!`
            })
            dispatch(markCancel(id))
        }
    }
}

const TodoContainer = connect(null, mapDispatchToProps)(Todo)
export default TodoContainer