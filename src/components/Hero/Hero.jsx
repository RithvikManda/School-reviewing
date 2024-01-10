import { Box, Grid } from '@mui/material'
import React from 'react'

function Hero() {
  return (
    <Box py={10} bgcolor="secondary.main" color="white">
        {/* <Grid container justifyContent="center">
            <Grid item xs={10}>
                <Box display="flex" justifyContent="space-between">
                    <Typography variant='h4'>iShowInstitution</Typography>
                    <a href=""><Button variant="contained" color="primary" disableElevation>Group Chat</Button></a>
                    
                    
                    <Button variant="contained" color="primary" disableElevation onClick={handleOpen}>Add a Institution</Button>
                </Box>
                <NewModel open={toggle} handleClose={handleClose}/>
                
            </Grid>
        </Grid> */}
        <Box py={5} bgcolor="secondary.main" color="white">
            <Grid container justifyContent="center">
                <Box display="flex" justifyContent="center">
                           
                </Box>
            </Grid>
        </Box>
    </Box>
  )
}

export default Hero