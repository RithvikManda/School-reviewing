import React from 'react'
import { Box,Button,Select,MenuItem } from '@mui/material'
import {makeStyles} from "@mui/styles"

const useStyles=makeStyles({
  wrapper:{
    background:"#fff",
    display:"flex",
    
    boxShadow:"0px 1px 5px rgba(0,0,0,0.1)",
    borderRadius:"5px",
    "& > *":{
      flex:1,
      height:"45px",
      margin:"8px",
    }
  }
})

function SearchBar() {
  const classes=useStyles()

  return (
    <Box p={2} mt={-5} mb={2} className={classes.wrapper}>
        <Select disableUnderline variant="filled" defaultValue="School">
            <MenuItem value="school">School</MenuItem>
            <MenuItem value="inter">Intermediate</MenuItem>
            <MenuItem value="engg">Engineering</MenuItem>
        </Select>
        <Select disableUnderline variant="filled" defaultValue="Ameerpet">
            <MenuItem value="Ameerpet">Ameerpet</MenuItem>
            <MenuItem value="Balnagar">Balnagar</MenuItem>
            <MenuItem value="Begumpet">Begumpet</MenuItem>
            <MenuItem value="Begumpet">Kukatpally</MenuItem>
            <MenuItem value="Begumpet">KPHB</MenuItem>
            <MenuItem value="Begumpet">Bachupally</MenuItem>
            
        </Select>
        <Button variant="contained" color="primary" disableElevation>Search</Button>
    </Box>
  )
}

export default SearchBar