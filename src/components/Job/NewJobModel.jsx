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

export default(props)=> {
  // const skills=[
  //   "JavaScipt",
  //   "React",
  //   "Node",
  //   "Vue",
  //   "Firebase",
  //   "MongoDB",
  //   "SQL",
  // ]
  const skills=["B.Tech","School","Inter","1st-10th","6th-10th","11th-12th","B.E"]
  const classes=useStyles(props)
  // const [toggle,setToggle]=useState(true)
  // const handleClose = () => {
  //   setToggle(false);
  // };

  return (
    <Dialog open={props.open} fullWidth onClose={props.handleClose} > 
        <DialogTitle>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          Add an Institution
          <Box className={classes.skillChip} xs={2} onClick={props.handleClose}>Close</Box>
        </Box>
      </DialogTitle>
        <DialogContent>
            <Grid container spacing={2}>
                <Grid item xs={6}>
                    <FilledInput placeholder='Institution Name *' disableUnderline fullWidth/>
                </Grid>
                <Grid item xs={6}>
                <Select disableUnderline varaint="filled" defaultValue="Full time" fullWidth>
                  <MenuItem value="Full time">School</MenuItem>
                  <MenuItem value="Part time">Intermediate</MenuItem>
                  <MenuItem value="Internship">Engineering</MenuItem>
                </Select>
                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder='Institution ID *' disableUnderline fullWidth/>
                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder='Institution URL *' disableUnderline fullWidth/>
                </Grid>
                <Grid item xs={6}>
                <Select disableUnderline varaint="filled" defaultValue="Remote" fullWidth>
                    <MenuItem value="Remote">Ameerpet</MenuItem>
                    <MenuItem value="In-office">KPHB</MenuItem> 
                    <MenuItem value="In-office">Nagole</MenuItem> 
                    <MenuItem value="In-office">Kukatpally</MenuItem> 
                    <MenuItem value="In-office">Madhapur</MenuItem> 
                    <MenuItem value="In-office">Uppal</MenuItem> 
                </Select>
                </Grid>
                <Grid item xs={6}>
                    <FilledInput placeholder='Other URL ' disableUnderline fullWidth/>
                </Grid>
                <Grid item xs={12}>
                    <FilledInput placeholder='Institution Description *' disableUnderline fullWidth multiline rows={4}/>
                </Grid>

            </Grid>
            <Box mt={2}>
              <Typography>Other Feilds</Typography>
              <Box display="flex">
                {skills.map((skill)=>(
                  <Box className={classes.skillChip} key={skill}>{skill}</Box>
                ))}
              </Box>
            </Box>
        </DialogContent>
        <DialogActions>
          <Box color="red" ml={2} mr={2} width="100%" display="flex" justifyContent="space-between" alignItems="center">
            <Typography variant='caption' >*Required Fields</Typography>
            <Button variant='contained'disableElevation color="primary">Add a Institution</Button>
          </Box>
        </DialogActions>
    </Dialog>
  )
}

