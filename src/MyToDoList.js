import React, { useState } from 'react'
import '../src/mui.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import List from './List';

const MyToDoList = () => {
  const[item,setItem]=useState('')
  const[newItem,setNewItem]= useState([]);
  const itemEvent=(event)=>{
     setItem(event.target.value)
  }
  const listOfItems=()=>{
    setNewItem((prevValue)=>{
      return [...prevValue,item]
    })
    setItem(" ")
  }
  return (
    <>
        <div className="main_div">
            <div className="center_div">
                <h1>ToDo List</h1>
                <br />
                <input type="text" value={item} placeholder='Add an Item' onChange={itemEvent}/>
                <Button className="newBtn" onClick={listOfItems}>
                    <AddIcon />
                </Button>
                <br />
                <ol>
                    {
                    newItem.map((val,index)=>{
                       return <li><List key={index} text={val}/></li>
                    }
                    )
                    }
                </ol>
            </div>
        </div>
    </>
  )
}

export default MyToDoList
