import React from 'react';
import './App.css';
import TodoListPage from "./components/TodoListPage";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import DoneTodoListContainer from "./containers/DoneTodoListContainer";
import Menu from "./components/Menu";

function App() {
    return (
        <div className="App">
            <Router>
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
            </Router>
        </div>
    );
}

export default App;
