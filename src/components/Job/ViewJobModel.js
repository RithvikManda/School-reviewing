import React from 'react'
import { Box,Grid,FilledInput,Select,MenuItem,Dialog,DialogTitle,DialogContent,DialogActions, Typography,Button,IconButton } from '@mui/material'
import {makeStyles} from "@mui/styles"

const useStyles=makeStyles(theme=>({
    skillChip:{
      margin:theme.spacing(0.5),
      padding:theme.spacing(0.75),
      fontSize:"14.5px",
      borderRadius:"5px",       
      fontWeight:600,
      border:`1px solid ${theme.palette.secondary.main}`,
      color:theme.palette.secondary.main,
      cursor:"pointer",
  
      "&:hover":{
        backgroundColor:theme.palette.secondary.main,
        color:"#fff",
        transition:".3s"
      }
  }
  }))

function ViewJobModel() {
    const classes=useStyles()
  return (
    <Dialog open={true}>
        <DialogTitle>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            Post Job
            <Box className={classes.skillChip} xs={2}>Close</Box>
          </Box>
        </DialogTitle>
        <DialogContent>

        </DialogContent>
        <DialogActions>

        </DialogActions>
    </Dialog>
  )
}

export default ViewJobModel