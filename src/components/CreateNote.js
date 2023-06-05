import React, { useState } from 'react'
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
    const[expand,setExpand]= useState(false);
    const[note,setNote]=useState({
        title: "",
        content:"",
    });
    const inputEvent=(event)=>{
        const {name,value}= event.target;
        setNote((prevData)=>{
            return {
                ...prevData,
                 [name]: value,
            }
        }
        )
        console.log(note)
    }
    const addEvent= ()=>{
        props.passNote(note);
        setNote({
            title: "",
            content:"",
        });
    }
    const expandit=()=>{
        setExpand(true);
    }
    const btoNormal=()=>{
        setExpand(false);
    }
    return (
        <>
            <div className="main_note">
                <form>
                   {expand?
                   <input type="text" name="title" value={note.title} onChange={inputEvent} placeholder='Title' autoComplete='off' />:
                   null}
                    <textarea 
                    value={note.content} 
                    name="content" onChange={inputEvent} 
                    placeholder='Write a note...'
                    onClick={expandit}
                    onDoubleClick={btoNormal}>
                    </textarea>
                    {expand?<Button variant="text" onClick={addEvent}>
                        <AddIcon className="plus_sign" />
                    </Button>:null}
                </form>
            </div>
        </>
    )
}

export default CreateNote
