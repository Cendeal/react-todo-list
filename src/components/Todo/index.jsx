import React from "react";
import PropTypes from 'prop-types';
import todoStatus from "../../constants/todoStatus";
import './index.css'
import {prefixZero} from "../../utils/format";

class Todo extends React.Component {
    handleDelete = (e) => {
        e.stopPropagation();
        this.props.deleteTodo(this.props.todo.id)
    };

    handleMark = async () => {
        if (this.props.status === todoStatus.DOING) {
            await this.props.markDone(this.props.todo.id)
        } else {
            await this.props.markCancel(this.props.todo.id)
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
        date = new Date(date)
        if (date instanceof Date) {
            return `${date.getFullYear()}-${prefixZero(date.getMonth() + 1, 2)}-${prefixZero(date.getDate(), 2)} ${prefixZero(date.getHours(), 2)}:${prefixZero(date.getMinutes(), 2)}`
        }
        return ''
    };

    render() {
        return <div className={this.addClassNames()} onClick={this.handleMark}>
            <div className={'text'} title={this.props.todo.text}>{this.props.todo.text}</div>
            <div className={'time'}>
                <span style={{
                    display: this.props.todo.created ? 'block' : 'none'
                }}>[C]:{this.formatDate(this.props.todo.created)}</span>
                <span style={{
                    display: this.props.todo.updated ? 'block' : 'none'
                }}>[U]:{this.formatDate(this.props.todo.updated)}</span>
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