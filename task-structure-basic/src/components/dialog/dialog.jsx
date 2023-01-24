import * as React from 'react';
import '../../App.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useState } from 'react';
import axios from 'axios';

export default function FormDialog(props) {

  const [editedValues, setEditedValues] = useState({
    id: props.id,
    task: props.task,
    time: props.time
  })

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  }

  const handleSave = () => {
    axios.put("http://127.0.0.1:5174/edit",{
      id: editedValues.id,
      task: editedValues.task,
      time: editedValues.time
    })
    handleClose()
  }
    
  const handleChange = (e) => {
    setEditedValues( prev => ({
      ...prev,
      [e.target.id] : e.target.value
    })) 
  }

  return (
    <div>
        <Button className="Button" variant="outlined" onClick={handleClickOpen}>
        🖊
        </Button>
          <Dialog open={props.open} onClose={handleClose}>
            <DialogTitle>Editar</DialogTitle>
            <DialogContent>
              <TextField
                autoFocus
                margin="dense"
                id="task"
                label="Tarefa"
                defaultValue={props.task}
                type="text"
                onChange={handleChange}
                fullWidth
                variant="standard"
              />
                        <TextField
                autoFocus
                margin="dense"
                id="time"
                label="Horario"
                defaultValue={props.time}
                type="text"
                onChange={handleChange}
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancelar</Button>
              <Button onClick={handleSave}>Salvar</Button>
              <Button onClick={() => props.handleDelete()}>Excluir</Button>
            </DialogActions>
          </Dialog>
    </div>
  );
}