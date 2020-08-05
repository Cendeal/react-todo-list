import Todo from "../components/Todo";
import {markCancel, markDone, deleteTodo as deleteTodoAction,changeType} from "../actions";
import {deleteTodo, updateTodoById} from "../api/todoApi";
import todoStatus from "../constants/todoStatus";
import {notification} from "antd";


const {connect} = require("react-redux");


const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: async (id) => {
            await deleteTodo(id);
            notification.success({
                message: `Todo-${id} has deleted!`
            });
            dispatch(deleteTodoAction(id))
        },
        updateType: async (id,type) => {
            const data = await updateTodoById(id, {
                type
            });
            notification.success({
                message: `Todo-${id} has set type as ${type}!`
            });
            dispatch(changeType(data))
        },
        markDone: async (id) => {
            const data = await updateTodoById(id, {
                status: todoStatus.DONE,
                updated: new Date()
            });
            notification.success({
                message: `Todo-${id} has marked as done!`
            });
            dispatch(markDone(data))
        },
        markCancel: async (id) => {
            const data = await updateTodoById(id, {
                status: todoStatus.DOING,
                updated: new Date()
            });
            notification.success({
                message: `Todo-${id} has marked as doing!`
            });
            dispatch(markCancel(data))
        }
    }
};

const TodoContainer = connect(null, mapDispatchToProps)(Todo);
export default TodoContainer