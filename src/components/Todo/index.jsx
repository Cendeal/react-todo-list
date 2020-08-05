import React from "react";
import PropTypes from 'prop-types';
import todoStatus from "../../constants/todoStatus";
import './index.css'

class Todo extends React.Component {
    handleDelete = (e) => {
        e.stopPropagation();
        this.props.deleteTodo(this.props.todo.id)
    };

    handleMark = () => {
        if (this.props.status === todoStatus.DOING) {
            this.props.markDone(this.props.todo.id)
        } else {
            this.props.markCancel(this.props.todo.id)
        }
    };
    addClassNames = () => {
        const classNames = ['todo'];
        if (this.props.status === todoStatus.DONE) {
            classNames.push('is-done')
        }
        return classNames.join(' ')
    };
    formatDate = (date) => {
        if (date instanceof Date) {
            return `[${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}]`
        }
        return ''
    };

    render() {
        return <div className={this.addClassNames()} onClick={this.handleMark}>
            <div className={'text'} title={this.props.todo.text}>{this.props.todo.text}</div>
            <div className={'time'}>
                <span>{this.formatDate(this.props.todo.time)}</span>
            </div>
            <span className={'delete'} onClick={this.handleDelete}>X</span>
        </div>
    }
}

Todo.propsTypes = {
    text: PropTypes.string.isRequired,
    deleteTodo: PropTypes.func.isRequired
};
export default Todo