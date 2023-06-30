import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Button from '@mui/material/Button';
import Component2 from './Component2';

export default function SimpleBackdrop() {
  
  const [open, setOpen] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);
 
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <Button onClick={handleOpen} sx={{color:'#9F77EB'}}>Documents</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
      >
       <Component2  isActive={isActive} handleClose={handleClose}/>
      </Backdrop>
    </div>
  );
}