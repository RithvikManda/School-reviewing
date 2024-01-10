import React from 'react'
import { Box,Dialog,DialogTitle,DialogContent,Typography} from '@mui/material'
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

function Review(props) {
    const classes=useStyles(props)
  return (
    <Dialog open={props.open} fullWidth onClose={props.handleClose}>
        <DialogTitle>
        <Box sx={{ fontWeight: 'bold',fontSize: 25,color:"primary"}} display="flex" justifyContent="space-between" alignItems="center">
            REVIEW'S
          <Box className={classes.skillChip} xs={2} onClick={props.handleClose}>Close</Box>
        </Box>
      </DialogTitle>
      <DialogContent>
      <Box sx={{ fontWeight: 'bold',fontSize: 25}}>The best school for aspirants:</Box>
        <Typography sx={{fontSize: 12,mb:2}}>By: enegmasailaja 20 days ago</Typography>
        <Typography>
        </Typography>
        
        <Typography>My son previously studied in New York Public School. Later in India we joined him in Oakridge, Gachibowli, where he attended for only two weeks and discontinued. Then we joined him in Sanskriti School with little hope, now he likes his school a lot and started focusing on his academics and also enjoying his school life. If I keep my personal experience aside, this is the school with values, here the foundation in Physics, mathematics, chemistry and all subjects is very well laid in an organized way and they prepare the kids to excel in any competitive exam( international Olympiads, JEE and other entrance exams) . They give individual attention to each and every kid and support wherever kid needs .Once I was a worried mom and now I’m totally confident about my son’s future and truly grateful to Sanskriti School( to all the people behind this institution) .</Typography>
        <Typography sx={{ fontWeight: 'bold',fontSize: 25,mt:2}}>
        Global Indian international school hyderabad
        </Typography>
        <Typography sx={{fontSize: 12,mb:2}}>By: as4909675 22 days ago</Typography>
        <Typography>We are happy that our daughter is studying in GIIS, Class 1, Section E. They have a nicely planned Academic Program. We are happy with the curriculum and teaching methods. We are grateful to the Teachers, Coordinator and well done</Typography>
      </DialogContent>
      

    </Dialog>
  )
}

export default Review