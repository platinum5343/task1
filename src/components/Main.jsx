import React from 'react';
import { Container } from '@mui/system';
import classes from './Main.module.css';

const Main = () => {
  return (
    <Container>
      <div   className={classes.btn}
        id={classes.btn_zuri}>  
          Twitter Link
          
          </div>
        <button id='btn_zuri' 
       onClick={()=>{
        window.location.href="https://training.zuri.team/"}}  className={classes.btn}>
          Zuri Team
          </button>
          <button 
        className={classes.btn}
       id='books' onClick={()=>{
        window.location.href="https://books.zuri.team/"}}>
          Zuri books
          </button>
          <button 
        className={classes.btn}
         id='book_phyton' onClick={()=>{
          window.location.href="https://background.zuri.team/"}}>
          python books
          </button>
          <button
        className={classes.btn}
         id='pitch' onClick={()=>{
          window.location.href="https://books.zuri.team/"}}>
          Background check for coders
          </button>
          <button
        className={classes.btn}
        onClick={()=>{
          window.location.href="https://books.zuri.team/design-rules"}} id='book_design'>
          Design books
          </button>
    </Container>
  )
}

export default Main;