import React from 'react';
import './App.css';
import TodoListPage from "./components/TodoListPage";
import { Route, Switch} from "react-router-dom";
import DoneTodoListContainer from "./containers/DoneTodoListContainer";
import Menu from "./components/Menu";
import {store} from "./index";
import {getTodoList} from "./api/todoApi";
import {updateTodoList} from "./actions";

class App extends React.Component {
    async componentWillMount() {
        const data = await getTodoList()
        store.dispatch(updateTodoList(data))
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <Menu/>
                    <h2 className={'title'}>Todo List</h2>

                    <Switch>
                        <Route exact path="/">
                            <TodoListPage/>
                        </Route>
                        <Route exact path="/done">
                            <DoneTodoListContainer/>
                        </Route>
                    </Switch>

                </header>
            </div>
        );
    }
}


export default App;
