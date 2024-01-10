import React from 'react'
import { Box,Grid,Typography,Button } from '@mui/material' 
import { useState } from 'react'
import NewModel from '../Job/NewJobModel';
import AddModel from "../Hero/Admission"

function Index() {
  const [toggle, setToggle] = useState(false);

  const handleOpen = () => {
    setToggle(true);
  };

  const handleClose = () => {
    setToggle(false);
  };

  const [admission,setAdmission]=useState(false)
  const handleAddOpen=()=>{
    setAdmission(true)
  }
  const handleAddClose=()=>{
    setAdmission(false);
  }

  return (
    <Box py={10} bgcolor="secondary.main" color="white">
        <Grid container justifyContent="center">
            <Grid item xs={10}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant='h4'>EduXpolrer</Typography>
                    <a href=""><Button variant="contained" color="primary" disableElevation>Group Chat</Button></a>
                    
                    
                    <Button variant="contained" color="primary" disableElevation onClick={handleOpen}>Add a Institution</Button>
                    <Button variant="contained" color="primary" disableElevation onClick={handleAddOpen}>Admission Info</Button>
                    <Button variant="contained" color="primary">ChatBox</Button>
                    
                </Box>
                
                <NewModel open={toggle} handleClose={handleClose}/>
                <AddModel open={admission} handleAddClose={handleAddClose}/>

                
            </Grid>
        </Grid>
        {/* <Grid container justifyContent="center">
            <Grid item xs={10}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant='h4'>iShowInstitution</Typography>
                    <a href=""><Button variant="contained" color="primary" disableElevation>Group Chat</Button></a>
                </Box>
                
                
            </Grid>
        </Grid> */}
    </Box>
  )
}

export default Index