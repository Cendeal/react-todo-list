import React from 'react';
import './App.css';
import TodoListPage from "./components/TodoListPage";
import {Route, Switch} from "react-router-dom";
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
                    <Switch>
                        <Route exact path="/">
                            <h2 className={'title'}>All Todo List</h2>
                            <TodoListPage/>
                        </Route>
                        <Route exact path="/done">
                            <h2 className={'title'}>Done Todo List</h2>
                            <DoneTodoListContainer/>
                        </Route>
                    </Switch>

                </header>
            </div>
        );
    }
}


export default App;
