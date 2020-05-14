import React from 'react'
import  ReactDOM from 'react-dom'
import TodoList from './Componets/TodoList/todoList'
import Test from './Componets/Test/index'
import style from './index.css'
//jsx 语法
const element = (
    <div className='containter'>
      <div className='containter-center'>
          <h1 className='title'>Hello, React!</h1>
          <TodoList></TodoList>
          {/*测试入口*/}
          {/*<Test></Test>*/}
      </div>
    </div>
);
ReactDOM.render(element, document.getElementById('root'));

