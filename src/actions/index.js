import {ADD_TO_DO,DELETE_TO_DO,TOOGLE_TO_DO,SET_VISILIBILITY} from '../actionType'
const addToDo = (text) => ({type:ADD_TO_DO,text})
const deleteToDo = (id) => ({type:DELETE_TO_DO,id})
const toggleToDo = (id) => ({type:TOOGLE_TO_DO,id})
const setVisibility = (filter) => ({type:SET_VISILIBILITY, filter})
export {addToDo,deleteToDo,toggleToDo,setVisibility} 