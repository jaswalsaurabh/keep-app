import React from 'react'
import './Note.css'
import Button from '@material-ui/core/Button';
import axios from 'axios';

const Note = (props) => {
    
    const deleteNote=()=>{
        props.deleteItem(props.id)
    }

    axios.get('https://wbhuqxg3ql.execute-api.us-east-2.amazonaws.com/CreateNote1/get-note')

    return (
        <div className='main'>
        <div className='note'>

        <h1 style={{textAlign:'center',paddingTop:'5px'}} >{props.title}</h1>
        <br/>
        <p style={{textAlign:'center'}}>{props.content}</p>
        <div className='note-btns' >

        <Button size='small' variant='outlined' color='primary' >
        edit
        </Button>
        <Button onClick={deleteNote} size='small' variant='outlined' color='secondary' >
        delete
        </Button>
        </div>
        </div>
        </div>
    )
}

export default Note
