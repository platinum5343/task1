import React from 'react'
import profileImg from '../../src/assets/profile__img.png'
import iconImg from '../../src/assets/Icon(1).png'
import iconsImg from '../../src/assets/Icon2.png'
import classes from './Home.module.css';
import { Box, Typography } from '@mui/material';


const Home = () => {
  return (
    <Box>
      <Box  spacing={3}>
        <div className={classes.profile_img}>
        <img 
        src={profileImg} className={classes.profile_img} alt="profile_img" />
        </div>
        <div className={classes.icon} px={5} gap={"20px"}>
          <img 
          sx={{ display: {xs:"none", sm:"block"}}}
          src={iconImg} alt="icon"/>
          </div>
        <Typography className={classes.icons} px={5} gap={"20px"}>
          <img 
          sx={{ display: {xs:"block", sm:"small"}}}
          src={iconsImg} alt="icon"/>
          </Typography>
       
    
        </Box>
        <div className={classes.twitter}>olatunji olamiji</div>
    </Box>
  )
};

export default Home;
