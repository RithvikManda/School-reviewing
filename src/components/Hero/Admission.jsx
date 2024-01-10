import React from 'react'
import { Box,Dialog,DialogTitle,DialogContent, Typography} from '@mui/material'
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

function Admission(props) {
    const classes=useStyles(props)
    
  return (
    <Dialog open={props.open} fullWidth onClose={props.handleAddClose}>
        <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Admission Info
          <Box className={classes.skillChip} xs={2} onClick={props.handleAddClose}>Close</Box>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Typography>Delhi Public School offers admission to students from pre-primary to Class 12 for the CBSE and CAIE curriculum. For any queries related to admission, parents can reach out to the school. Here are some guidelines for admission at Delhi Public School, Telangana:</Typography>
        <Typography>
        <ul>
            <li>First, go to the official website at www.dpsnacharam.in</li>
            <li>Click on the admissions tab and fill out an online application form</li>
            <li>Further to this, there will be student observation and scholastic analysis along with parent interaction</li>
            <li>The status of admission will be intimated to parents by the school authorities</li>
        </ul>
        </Typography>
        <Typography>
        <Box sx={{ fontWeight: 'bold', m: 1 }}>Documents to be submitted :</Box>
        </Typography>
        <Typography>
            <ul>
                <li>Passport-size photographs of the student</li>
                <li>Passport-size photographs of the parents</li>
                <li>Date of birth certificate </li>
                <li>AADHAR Card/ passport</li>
                <li>Residential proof</li>
                <li>Bonafide certificate- Nursery, Prep and Class I</li>
                <li>Report card - admission to II-VII</li>
                <li>Class II–VII admission - Term I report card copy of the current year and the previous year.</li>
            </ul>
        </Typography>
      </DialogContent>
      

    </Dialog>
  )
}

export default Admission