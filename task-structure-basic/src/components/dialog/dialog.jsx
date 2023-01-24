import * as React from 'react';
import '../../App.css'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function FormDialog(props) {

  const handleClickOpen = () => {
    props.setOpen(true);
  };

  const handleClose = () => {
    props.setOpen(false);
  };

      
  function handleChange (e) {
        
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
              <Button onClick={handleClose}>Salvar</Button>
              <Button onClick={handleClose}>Excluir</Button>
            </DialogActions>
          </Dialog>
    </div>
  );
}