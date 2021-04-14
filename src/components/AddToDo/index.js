import React from 'react'
import { connect } from 'react-redux'
import { addToDo } from '../../actions'
import './AddToDo.css'
const AddToDo = (props) => {
  const textRef = React.createRef()
  const handleClick = () => {
    let value = textRef.current.value
    if (value.trim() === '') return
    props.addToDo(value)
    textRef.current.value = ''
  }
  return (
    <>
    <input type="text" ref={textRef} className='new-todo' placeholder='What need to be done?'/>
    <button className='add' onClick= {handleClick}>ADD</button>
    </>
  )
}
const mapDispatchToProps = (dispatch) =>{
return {
  addToDo(text) {dispatch(addToDo(text))}
}
}
export default connect(null,mapDispatchToProps)(AddToDo)