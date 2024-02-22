import { useState } from 'react';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import { FormGroup,FormControl,InputLabel, Input ,Typography,Button} from '@mui/material'
//setuser({...user,[e.target.name]:e.target.value}); here ...User is to Skip over writing if didnt use that then old values will be deleted while typing new values  
//...user is called spreadding
import { addUser } from '../services/api';
const AddUsers = () => {
    const dfvals={
        name:'',
        usn:'',
        phone:'',
        email:''
    }
    const[user,setuser]=useState({dfvals});
    const AddUser = (e) => {
        setuser({...user,[e.target.name]:e.target.value});
        console.log(user);
    } 

    const navigate=useNavigate();//Creating an user instance of useNavigate;

    const submitAdd = async () => {
       await addUser(user);
       navigate('/AllUsers');
    }

    return(
    <div style={{ margin: 'auto' }}>  
        <Typography sx={{pl:10,pt:5}} variant="h5" >Add Users</Typography>
        <FormGroup sx={{width:600, pl:9}}>
        <FormControl sx={{marginTop:2}} >
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=> AddUser(e)} name='name'/>
        </FormControl> 
        <FormControl sx={{marginTop:2}} >
            <InputLabel>USN</InputLabel>
            <Input onChange={(e)=> AddUser(e)} name='usn'/>
        </FormControl> 
        <FormControl sx={{marginTop:2}} >
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=> AddUser(e)} name='phone'/>
        </FormControl> 
        <FormControl sx={{marginTop:2}} >
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=> AddUser(e)} name='email'/>
        </FormControl> 
        <FormControl sx={{width:100,marginTop:2}} >
        <Button variant='contained' onClick={()=> submitAdd()}>
            Submit
        </Button>
        </FormControl>    
       </FormGroup>
    </div>
    )
}
export default AddUsers