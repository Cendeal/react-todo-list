import TodoForm from "../components/TodoForm";
import {addTodo as addTodoAction} from "../actions";
import {connect} from "react-redux"
import {addTodo} from "../api/todoApi";
import todoStatus from "../constants/todoStatus";
import {notification} from "antd";

const mapDispatchToProps = (dispatch) => ({
    addTodo: async (todo) => {
        const data = await addTodo({
            ...todo,
            created: new Date(),
            status: todoStatus.DOING
        })

        notification.success({
            message: `Todo-${data.id} has added successfully!`
        });
        dispatch(addTodoAction(data))
    }
});
const TodoFormContainer = connect(null, mapDispatchToProps)(TodoForm);
export default TodoFormContainer