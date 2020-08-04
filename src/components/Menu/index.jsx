import * as React from "react";
import {Link} from "react-router-dom";
import './index.css'

class Menu extends React.Component {
    render() {
        return <ul className={'menu'}>
            <li>
                <Link to="/">index</Link>
            </li>
            <li>
                <Link to="/done">Users</Link>
            </li>
        </ul>
    }

}

export default Menu