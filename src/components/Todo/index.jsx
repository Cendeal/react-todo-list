import React from "react";
import PropTypes from 'prop-types';
import todoStatus from "../../constants/todoStatus";
import './index.css'
import {prefixZero} from "../../utils/format";
import {Select, Popconfirm, Card, Checkbox, Spin} from "antd";
import {
    DeleteOutlined
} from '@ant-design/icons';

const {Option} = Select;

class Todo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            spinning: false
        }
    }

    handleLoading = (flag) => {
        this.setState({
            spinning: flag
        })
    };
    handleDelete = async (e) => {
        e.stopPropagation();
        this.handleLoading(true);
        await this.props.deleteTodo(this.props.todo.id)
    };

    handleMark = async () => {
        this.handleLoading(true);
        if (this.props.status === todoStatus.DOING) {
            await this.props.markDone(this.props.todo.id)
        } else {
            await this.props.markCancel(this.props.todo.id)
        }
        this.handleLoading(false)

    };
    addClassNames = () => {
        const classNames = ['todo'];
        if (this.props.status === todoStatus.DONE) {
            classNames.push('is-done')
        }
        return classNames.join(' ')
    };
    formatDate = (date) => {
        date = new Date(date);
        if (date instanceof Date) {
            return `${date.getFullYear()}-${prefixZero(date.getMonth() + 1, 2)}-${prefixZero(date.getDate(), 2)} ${prefixZero(date.getHours(), 2)}:${prefixZero(date.getMinutes(), 2)}`
        }
        return ''
    };
    handleSelect = async (value) => {
        this.handleLoading(true);
        await this.props.updateType(this.props.todo.id, value);
        this.handleLoading(false);

    };

    render() {
        return (
            <Spin spinning={this.state.spinning}>
                <Card title={`Todo:${this.props.todo.id}`} hoverable
                      style={{width: 300, margin: '0.25rem', textAlign: 'left'}}
                      actions={[
                          <Select
                              onChange={this.handleSelect}
                              defaultValue={this.props.todo.type}
                              style={{width: 120}}>
                              <Option value="IMPORTANT">IMPORTANT</Option>
                              <Option value="NORMAL">NORMAL</Option>
                              <Option value="LOW">LOW</Option>
                          </Select>,
                          <Popconfirm
                              title="Are you sure delete this todo?"
                              onConfirm={this.handleDelete}
                              okText="Yes"
                              cancelText="No">
                              <DeleteOutlined style={{color: 'rgb(233, 73, 73)', marginLeft: '0.2rem'}}/>
                          </Popconfirm>,
                      ]}
                      extra={
                          <div>
                              <Checkbox
                                  checked={this.props.todo.status === todoStatus.DONE}
                                  onChange={this.handleMark}
                              />
                          </div>
                      }>
                    <div className={this.addClassNames()} onClick={this.handleMark}>
                        <div className={'text'} title={this.props.todo.text}>{this.props.todo.text}</div>
                        <div className={'time'}>
                        <span style={{
                            display: this.props.todo.created ? 'block' : 'none'
                        }}>[C]:{this.formatDate(this.props.todo.created)}</span>
                            <span style={{
                                display: this.props.todo.updated ? 'block' : 'none'
                            }}>[U]:{this.formatDate(this.props.todo.updated)}</span>
                        </div>
                    </div>
                </Card>
            </Spin>
        )
    }
}

Todo.propsTypes = {
    text: PropTypes.string.isRequired,
    deleteTodo: PropTypes.func.isRequired
};
export default Todo