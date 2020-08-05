import todoStatus from "../constants/todoStatus";
import {ADD_TODO, DELETE_TODO, MARK_CANCEL, MARK_DONE, UPDATE_TODO_LIST} from "../constants/actionTypes";

const todoList = (state = [], action) => {
    switch (action.type) {

        case MARK_DONE: {
            let data = state.find(todo => todo.id === action.id);
            if (data) {
                data.status = todoStatus.DONE
            }
            return [...state]
        }

        case MARK_CANCEL: {
            let data = state.find(todo => todo.id === action.id);
            if (data) {
                data.status = todoStatus.DOING
            }
            return [...state]
        }

        case ADD_TODO:
            return [...state,
                action.todo];

        case DELETE_TODO:
            return [...state.filter(todo => todo.id !== action.id)];

        case UPDATE_TODO_LIST:
            return [...action.data]

        default:
            return state
    }
};
export default todoList