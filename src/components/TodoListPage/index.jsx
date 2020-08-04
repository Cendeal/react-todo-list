import * as React from "react";
import TodoListContainer from "../../containers/TodoListContainer";
import TodoFormContainer from "../../containers/TodoFormContainer";

class TodoListPage extends React.Component {
    render() {
        return <div>
            <TodoListContainer/>
            <TodoFormContainer/>
        </div>;
    }
}

export default TodoListPage