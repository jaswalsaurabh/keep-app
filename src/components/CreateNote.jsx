import React, { useState } from 'react'
import './CreateNote.css'
import Button from '@material-ui/core/Button';
import axios from 'axios'

const CreateNote = () => {
    
    const [note, setNote] = useState({
        title:"",
        content:""
    })
    
    const handleChange =(e)=>{
        const {name,value} = e.target;
        setNote((prevData)=>{
            return{
                ...prevData,
                [name]: value
            }
        })
    }

    

    return (
        <div className='createNote'>
        <form className='form' >
            <input  className='input myInput' name='title' value={note.title} onChange={handleChange} type='text' placeholder="title" autoComplete='off' />
            <textarea className='input text-area' name='content' value={note.content} onChange={handleChange} rows="" cols="" placeholder='create a note' />
            <Button onClick={ ()=> axios.post('https://wbhuqxg3ql.execute-api.us-east-2.amazonaws.com/UpdateNote/create-note',prevData)} variant='contained' color='primary' className='sub-btn' >
            Create
            </Button>
        </form>
        </div>
    )
}

export default CreateNote
