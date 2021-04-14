import React from 'react'
import {connect} from 'react-redux'
import {setVisibility} from '../../actions'
import './change.css'
const ChangeVisibility = (props) => {
  return (
    <>
    <button className='change' disabled = {props.visibility === 'all'} onClick={()=>props.setVisibility('all')}>All</button>
    <button className='change' disabled = {props.visibility === 'active'} onClick={()=>props.setVisibility('active')}>Active</button>
    <button className='change' disabled = {props.visibility === 'completed'} onClick={()=>props.setVisibility('completed')}>Completed</button>
    </>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    setVisibility(filter) {
      dispatch(setVisibility(filter))
    }
  }

}
const mapStateToProps = (state) => {
  return {
    visibility:state.setVisibilityReducer
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ChangeVisibility)