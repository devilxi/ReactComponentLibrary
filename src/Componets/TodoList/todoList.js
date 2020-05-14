import React, {Component} from 'react';
import ListItem from './listItem';
import {XButton, XInput} from '../../ComponentLibrary/index'
import index from './style/index.css'

class TodoList extends Component {
    //构造函数
    constructor(props) {
        //调用父类的构造函数
        super(props);
        //存值
        this.state = {
            inputValue: '',
            list: ["初识ReactJS", "初识ReactJS", "ReactJS基本API", "ReactJS传参", "ReactJS路由", "ReactX"],
        };
        //修改this的指向问题
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDel = this.handleDel.bind(this);
    }

    handleAdd(e) {
        this.setState((prevState) => ({
            list: [...prevState.list, prevState.inputValue],
            inputValue: ''
        }))
    };

    handleDel(index) {
        this.setState((preState) => {
            const list = [...preState.list];
            list.splice(index, 1);
            return {list}
        })
    };

    handleInputChange = function (e) {
        let value = e.target.value;
        this.setState((preState) => preState.inputValue = value);
    };

    // 创建Item元素
    createTodoItem() {
        return this.state.list.map((item, index) => {
            return (
                <ListItem
                    key={index}
                    value={item}
                    handleDel={this.handleDel}
                />
            )
        })
    };


    render() {
        return (
            <div className='todoList-containter'>
                <div className='todoList-top'>
                    {/*<input className='input' value={this.state.inputValue}*/}
                    {/*       onChange={this.handleInputChange}/>*/}
                    {/*<div className='button' onClick={this.handleAdd}>新增</div>*/}
                    <XInput></XInput>
                    <XButton handleDel={this.handleAdd}></XButton>
                </div>
                <ul>{this.createTodoItem()}</ul>
            </div>
        );
    }
};
export default TodoList;

