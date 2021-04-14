import React from 'react'
import {connect} from 'react-redux'
import { deleteToDo,toggleToDo } from '../../actions'
import './ToDoList.css'
const ToDoList = (props) => {
  let todos = props.todos
  return (
    <ul className='list'>
      {
        todos.map(item => 
          <li key={item.id} style={{textDecoration:item.done?'line-through':'none'}}
          onClick={()=>props.toggle(item.id)}>
            {item.text}
            <button className='del' onClick={()=>props.del(item.id)}>DEL</button>
          </li>
          )
      }
      
    </ul>
  )
}
const getFilterTodos = (filter, todos) => {
  if (filter === 'all') {
    return todos
  } else if (filter === 'active') {
    return todos.filter(item => !item.done)
  } else if (filter === 'completed') {
    return todos.filter(item => item.done)
  }
}

const mapStateToProps = (state) => {
  return {
    todos:getFilterTodos(state.setVisibilityReducer,state.todoreducer),
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    del(id) {
      dispatch(deleteToDo(id))
    },
    toggle(id){
      dispatch(toggleToDo(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ToDoList)