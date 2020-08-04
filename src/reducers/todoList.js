import todoStatus from "../constants/todoStatus";
import {ADD_TODO, DELETE_TODO, MARK_CANCEL, MARK_DONE} from "../constants/actionTypes";
/*
{
    text:"example todo",
    status:todoStatus.DOING
}
 */
let counter = 0;
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
                {
                    id: counter++,
                    text: action.text,
                    status: todoStatus.DOING,
                    time: new Date()
                }];
        case DELETE_TODO:
            return [...state.filter(todo => todo.id !== action.id)];
        default:
            return state
    }
};
export default todoList