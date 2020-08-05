import Todo from "../components/Todo";
import {markCancel, markDone, deleteTodo as deleteTodoAction, changeType} from "../actions";
import {deleteTodo, updateTodoById} from "../api/todoApi";
import todoStatus from "../constants/todoStatus";
import {notification} from "antd";
import handleError from "../utils/handleError";


const {connect} = require("react-redux");


const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: async (id) => {
            const data = await deleteTodo(id).catch(error => {
                handleError(error)
            }).catch(handleError);
            if (data instanceof Error) {
                return
            }
            notification.success({
                message: `Todo-${id} has deleted!`
            });
            dispatch(deleteTodoAction(id))
        },
        updateType: async (id, type) => {
            const data = await updateTodoById(id, {
                type,
                updated: new Date()
            }).catch(handleError);
            if (data instanceof Error) {
                return
            }
            notification.success({
                message: `Todo-${id} has set type as ${type}!`
            });
            dispatch(changeType(data))
        },
        markDone: async (id) => {
            const data = await updateTodoById(id, {
                status: todoStatus.DONE,
                updated: new Date()
            }).catch(handleError);
            if (data instanceof Error) {
                return
            }
            notification.success({
                message: `Todo-${id} has marked as done!`
            });
            dispatch(markDone(data))
        },
        markCancel: async (id) => {
            const data = await updateTodoById(id, {
                status: todoStatus.DOING,
                updated: new Date()
            }).catch(handleError);
            if (data instanceof Error) {
                return
            }
            notification.success({
                message: `Todo-${id} has marked as doing!`
            });
            dispatch(markCancel(data))
        }
    }
};

const TodoContainer = connect(null, mapDispatchToProps)(Todo);
export default TodoContainer