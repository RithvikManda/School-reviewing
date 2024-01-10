import React from 'react'
import { Box,Grid,Typography,Button } from '@mui/material'
import {makeStyles} from "@mui/styles"
import theme from '../../theme/theme'
import { Link } from '@mui/material'
import { useState } from 'react'
import ReviewModel from './review'

const useStyles=makeStyles({
    wrapper:{
        border:"1px solid #e8e8e8",
        cursor:"pointer",
        transition:".3s",
        "&:hover":{
            boxShadow:"0px 5px 25px rgba(0,0,0,0.1)",
            borderLeft:"6px solid #4D64E4",
        }
    },
    companyName:{
        fontSize:"13.5px",
        backgroundColor:theme.palette.primary.main,
        padding:theme.spacing(0.75),
        borderRadius:"5px",
        display:"inline-block",
        fontWeight:600,
    },
    skillChip:{
        margin:theme.spacing(0.5),
        padding:theme.spacing(0.75),
        fontSize:"14.5px",
        borderRadius:"5px",       
        fontWeight:600,
        backgroundColor:theme.palette.secondary.main,
        color:"#fff",
    },
    checkButton: {
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
          color:"#010101",
          transition:".3s"
        }
    },
})

const skills=["Javascript","React.js","Node.js"]

export default(props)=> {
    const [toggle, setToggle] = useState(false);

  const handleOpen = () => {
    setToggle(true);
  };

  const handleClose = () => {
    setToggle(false);
  };
    const classes=useStyles()
    const one=[
        {
            img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
            title: 'Breakfast',
            author: '@bkristastucchio',
            rows: 2,
            cols: 2,
            featured: true,
          },
    ]
  return (
    <Box p={2} className={classes.wrapper}>
        <Grid container alignItems="center">
            <Grid>
            <img
            srcSet={`${props.img}?w=148&fit=crop&auto=format&dpr=2 2x`}
            src={`${props.img}?w=248&fit=crop&auto=format`}            
            loading="lazy"
            style={{ marginRight:"20px" }}
          />

            </Grid>
            <Grid item xs>
                <Typography variant='subtitle1'>{props.title}</Typography>
                <Typography className={classes.companyName} variant='subtitle2'>{props.companyName}</Typography>
            </Grid>
            <Grid item container xs >
               {props.skills.map((skill)=>(
                <Grid key={skill} className={classes.skillChip}>{skill}</Grid>
               ))}                  
            </Grid>
            <Grid item container direction="column" alignItems="flex-end" xs>
                <Grid item>
                <Typography variant='caption'>{`${props.postedOn}`} | {props.type} | {props.location}</Typography>
                </Grid>
                <Grid item>
                    <Box mt={2}>
                        <Button variant='outlined' className={classes.checkButton}  disableElevation onClick={handleOpen}>Reviews</Button>                   
                </Box>  
                </Grid>   
                <Grid item>
                    <Box mt={2}>
                    <Link href={props.link} target="_blank" rel="noopener noreferrer"><Button variant='outlined' className={classes.checkButton}>Check</Button></Link>
                   
                </Box>  
                </Grid>           
            </Grid>
        </Grid>
        <ReviewModel open={toggle} handleClose={handleClose}/>

        
    </Box>

    
  )
}
