import React, { useState } from 'react'
//import '../src/index.css';
import '../src/mui.css';
import { FcApproval } from "react-icons/fc";
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Tooltip from '@mui/material/Tooltip';

function ToDoList() {
    const [num, setNum] = useState(0)
    const incNum = () => {
        setNum(num + 1)
    }
    const decNum = () => {
        if (num > 0) {
            setNum(num - 1);
        } else {
            alert("You have reached the 0 , you cant go below");
            setNum(0);
        }

    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <h1>{num}</h1>
                    <div className="btn_div">
                        <Tooltip title="Add">
                            <Button onClick={incNum} className="btn_green">
                                <FcApproval /><AddIcon />
                            </Button>
                        </Tooltip>
                        <Tooltip title="Delete">
                            <Button onClick={decNum} className="btn_red">
                                <DeleteIcon />
                            </Button>
                        </Tooltip>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToDoList


