import {
    ADD_TODO,
    DELETE_TODO,
    MARK_CANCEL,
    MARK_DONE,
    UPDATE_TODO_LIST,
    CHANGE_TYPE
} from "../constants/actionTypes";

export const addTodo = (todo) => ({
    type: ADD_TODO,
    todo
});

export const deleteTodo = (id) => ({
    type: DELETE_TODO,
    id
});

export const markDone = (data) => ({
    type: MARK_DONE,
    data
});

export const markCancel = (data) => ({
    type: MARK_CANCEL,
    data
});


export const updateTodoList = (data) => ({
    type: UPDATE_TODO_LIST,
    data
});
export const changeType = (data) => ({
    type: CHANGE_TYPE,
    data
});
