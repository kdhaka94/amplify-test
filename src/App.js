import React from 'react';
import './App.css';

export default function App() {
  const [todos,setTodos] = React.useState([]);
  const [inputTodo,setInputTodo] = React.useState('');
  function createNewTodo(){
    if(inputTodo.trim() !== ''){
      let todo = {
        content: inputTodo,
        date:new Date(),
        tags:[],
        complete: false,
        selected: false
      };
      setTodos([todo,...todos]);
      console.log(todos)
      setInputTodo('');
    
    }
  }
  function getSelectedTodoCount(){
    return todos.filter(todo => todo.selected).length;
  }
  function selectAllTodos(event){
    setTodos(todos.map(todo => {
      todo.selected = event.target.checked;
      return todo}
      )
    )
  }
  function selectTodo(event){
    setTodos(todos.map((todo,index) => {
      if(event.target.value == index) 
        todo.selected= event.target.checked; 
      return todo;}
      )
    )
  }
  function markComplete(){
    setTodos(todos.map((todo) => {if(todo.selected) if(todo.complete) todo.complete = false; else todo.complete=true; return todo;}))
  }
  function deleteTodo(){
    setTodos(todos.filter((todo) => !todo.selected));
  }
  return (
    <>
    <h1>Todo App</h1>
    <div className="sticky">
      <div className="input-container">
        <input type="text" value={inputTodo} placeholder="Type new todo . . ." className="todo-input" onChange={(event) => setInputTodo(event.target.value)}/>
        <input type="button" value="ADD TODO" className="btn add-todo" onClick={_ => createNewTodo()}/>
      </div>
      <div className="update-todo-container">
        <input type="checkbox" onChange={selectAllTodos}/>
        <span>{getSelectedTodoCount()} Selected</span>
        <input type='button' className='btn mark-complete' onClick={_ => markComplete()} value="Mark Complete"/>
        <input type='button' className='btn delete' onClick={_ => deleteTodo()} value="Delete"/>
      </div>
      </div>
      <div className='todos-container'>
        {todos.map((todo,index)=>
        <div className="todo-container">
          <input type="checkbox" checked={todo.selected} value={index} onChange={selectTodo}/>
          <p className={todo.complete?'complete':''}>{todo.content}<br/><span className="todo-date">{todo.date.toLocaleDateString()}</span></p>
        </div>)}
      </div>
    </>
    );
}