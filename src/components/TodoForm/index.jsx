import React from "react";
import {Input, Button, Modal, Radio} from "antd";

import {
    PlusOutlined
} from '@ant-design/icons';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            visible: false,
            radio: 'NORMAL',
            spinning: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit() {
        if (this.state.text.length === 0 || !this.state.radio) {
            return
        }
        this.setState({
            spinning: true
        });
        await this.props.addTodo({text: this.state.text, type: this.state.radio});
        this.setState({
            text: '',
            visible: false,
            spinning: false
        })
    }

    handleChange({target}) {
        this.setState({
            text: target.value
        })
    }

    handleCancel = () => {
        this.setState({
            visible: false
        })
    };

    onChangeRadio = (e) => {
        this.setState({
            radio: e.target.value
        })
    };

    handleShow = () => {
        this.setState({
            visible: true
        })
    };

    render() {
        const options = ['IMPORTANT', 'NORMAL', 'LOW'];
        return (<div>
                <div style={{position: 'fixed', bottom: '8rem', right: '1rem'}}>
                    <Button size={'large'} type="primary"
                            shape="circle"
                            onClick={this.handleShow}>
                        <PlusOutlined/>
                    </Button>
                </div>
                <Modal
                    title="What do you want to do?"
                    visible={this.state.visible}
                    onOk={this.handleSubmit}
                    confirmLoading={this.state.spinning}
                    onCancel={this.handleCancel}>
                    <Input addonBefore="Todo" type="text" value={this.state.text} onChange={this.handleChange}
                           placeholder="Something to do..."/>
                    <div style={{
                        marginTop: '1rem'
                    }}>
                        <label style={{
                            marginRight: '1rem'
                        }}>Type:</label>
                        <Radio.Group
                            options={options}
                            onChange={this.onChangeRadio}
                            value={this.state.radio}
                        />
                    </div>
                </Modal>
            </div>
        )
    }
}

export default TodoForm;