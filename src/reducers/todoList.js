import {ADD_TODO, CHANGE_TYPE, DELETE_TODO, MARK_CANCEL, MARK_DONE, UPDATE_TODO_LIST} from "../constants/actionTypes";

const todoList = (state = [], action) => {
    switch (action.type) {
        case CHANGE_TYPE:
        case MARK_DONE:
        case MARK_CANCEL: {
            let data = state.find(todo => todo.id === action.data.id);
            if (data) {
                Object.assign(data, action.data)
            }
            return [...state]
        }

        case ADD_TODO:
            return [...state,
                action.todo];

        case DELETE_TODO:
            return [...state.filter(todo => todo.id !== action.id)];

        case UPDATE_TODO_LIST:
            return [...action.data];

        default:
            return state
    }
};
export default todoList