import React, { useState } from 'react'
import './App.css'
import Header from './components/Header'
import CreateNote from './components/CreateNote'
import Note from './components/Note'

const App = () => {
    const [addItem, setAddItem] = useState([])
    
    const addNote =(note)=>{
        // alert('I am clicked')
        setAddItem((prevData)=>{
            return [...prevData,note]
        })
        console.log(note)

    }

    const onDelete=(id)=>{
        setAddItem((oldData)=> oldData.filter((currData,index)=>{
            return index !== id;
        })
        )
    }

    return (
        <div>
        <Header/>
        <CreateNote  passNote={addNote} />
        {/* <Note/> */}
        {addItem.map((val,index)=>{
            return(
                <Note
                    key={index}
                    id={index}
                    title={val.title}
                    content={val.content}
                    deleteItem={onDelete}
                />
            )
        })}

        </div>
    )
}

export default App
