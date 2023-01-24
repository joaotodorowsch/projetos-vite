import axios from 'axios'
import React, { useState } from 'react'
import FormDialog from '../dialog/dialog'

export default function Task(props) {


    const [open, setOpen] = React.useState(false)


    const [editValues, setEditValues] = useState({
        id: props.id,
        task: props.task,
        time: props.time,
    })

    function handleDelete() {
        axios.delete(`http://127.0.0.1:5174/delete/${editValues.id}`)
        .then(() => {
            props.setTaskList(
                props.taskList.filter((value) => {
                    return value.id != editValues.id
                })
            )
        })
    }

    return(
        <>
        <ul className='list'>
            <li className='list--checkbox'><input type="checkbox" name="done" id="done" /></li>
            <li className='list--task'>{props.task}</li>
            <li className='list--time'>{props.time}</li>
            <FormDialog 
            open={open}
            setOpen={setOpen}
            task={props.task}
            time={props.time}
            taskList={props.taskList} 
            setTaskList={props.setTaskList}
            />
            <li onClick={handleDelete} className='list--delete'>X</li>
       </ul> 
        </>
    )
}
