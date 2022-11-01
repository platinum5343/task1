import React, { Fragment } from 'react'
import SocialImg from '../../src/assets/Icon.png'
import SackImg from '../../src/assets/slack3.jpg'
import HngImg from '../../src/assets/I4G.png'
import SlackImg from '../../src/assets/Vectors.png'
import classes from './Footer.module.css'
import { Box } from '@mui/material'
const Footer = () => {
  return (
    <Fragment> 
        <Box gap={2} className={classes.footer1} >
        <div>
    <img src={SackImg} alt="" />
    </div>
        <div>
    <img src={SocialImg} alt="" />
    </div>
    </Box>   
    <Box px={5}>
    <hr />
    </Box>
    <div className={classes.footer2} pt={5} sx={{xs: { flexDirection: 'column'}}}>
    <Box px={5} pt={3}>
    <img src={SlackImg} alt="" />
    </Box>
    <div >
    <Box px={5}  pt={3}>
    hng internship 9 frontend task
    </Box>
    
    </div>
    <Box px={5}  pt={3} className={classes.footer3}>
    <img src={HngImg} alt="" />
    </Box>
    
    </div>
    </Fragment>
  )
}

export default Footer
