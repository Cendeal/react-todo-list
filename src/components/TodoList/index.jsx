import React from "react";
import PropTypes from 'prop-types'
import TodoContainer from "../../containers/TodoContainer";
import './index.css'

class TodoList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div className={"todo-list"}>
            {this.props.todoList.map(
                (todo) => <TodoContainer key={todo.id} todo={todo} status={todo.status}/>
            )}
        </div>)
    }
}

TodoList.propTypes = {
    todoList: PropTypes.array.isRequired
};
export default TodoList;