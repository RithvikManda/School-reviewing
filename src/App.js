import React from "react";
import {  Grid, ThemeProvider } from "@mui/material";
import theme from "./theme/theme"
import Header from "./components/Header/index"
import SearchBar from "./components/SearchBar/SearchBar";
import JobCard from "./components/Job/JobCard";
import NewJobModel from "./components/Job/NewJobModel";
import jobData from "./dummyData"

export default () => {
  
  return <ThemeProvider theme={theme}>
    <Header></Header>
    <NewJobModel/>
    {/* <ViewJobModel/> */}
    <Grid container justifyContent="center">
      <Grid item xs={10}>
        <SearchBar/>  

       
        {jobData.map(job=><JobCard key={job.id} {...job}/>)}
        {/* <JobCard/>   
        <JobCard/> 
        <JobCard/>     */}
      </Grid>
    </Grid>
  </ThemeProvider>;
};