import React,{useState} from 'react'
import './Input.css'
 import {useDispatch} from 'react-redux'
import{ saveTodo} from '../features/todoSlice'


const Input = () => {
    const [input,setInput] = useState('')
    const dispatch = useDispatch()

    const addToDo =() =>{
       if(input){
        dispatch(saveTodo({
            item:input,
            done:false,
            id:Date.now()
        }))
        setInput('')
       }else{
           alert('Enter todo!!!');
       }
    }
    return (
        <div className='input'>
            <input type='text' value={input} onChange={e => setInput(e.target.value)} />
            <button onClick={addToDo}>Add!</button>
            
        </div>
    )
}

export default Input
