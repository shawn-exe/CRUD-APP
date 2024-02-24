import { useState, useEffect } from 'react';
import React from 'react';
import {useNavigate,useParams} from 'react-router-dom';
import { FormGroup,FormControl,InputLabel, Input ,Typography,Button} from '@mui/material'
//setuser({...user,[e.target.name]:e.target.value}); here ...User is to Skip over writing if didnt use that then old values will be deleted while typing new values  
//...user is called spreadding
import {getSingleUser, editUser} from '../services/api';
const EditUsers = () => {
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

    const {id}=useParams();

    const LoadUser = async () =>
    {
        const response = await getSingleUser(id);
        setuser(response.data);
    }

    useEffect(()=>
    {
        LoadUser();
    },[])

    const submitEdit = async () => {
       await editUser(user,id);
       navigate('/AllUsers');
    }

    return(
    <div style={{ margin: 'auto' }}>  
        <Typography sx={{pl:10,pt:5}} variant="h5" >Edit Users</Typography>
        <FormGroup sx={{width:600, pl:9}}>
        <FormControl sx={{marginTop:2}} >
            <InputLabel>Name</InputLabel>
            <Input onChange={(e)=> AddUser(e)} name='name' value={user.name} />
        </FormControl> 
        <FormControl sx={{marginTop:2}} >
            <InputLabel>USN</InputLabel>
            <Input onChange={(e)=> AddUser(e)} name='usn' value={user.usn} />
        </FormControl> 
        <FormControl sx={{marginTop:2}} >
            <InputLabel>Phone</InputLabel>
            <Input onChange={(e)=> AddUser(e)} name='phone' value={user.phone} />
        </FormControl> 
        <FormControl sx={{marginTop:2}} >
            <InputLabel>Email</InputLabel>
            <Input onChange={(e)=> AddUser(e)} name='email' value={user.email} />
        </FormControl> 
        <FormControl sx={{width:100,marginTop:2}} >
        <Button variant='contained' style={{ width: '200px' }} onClick={()=> submitEdit()}>
            Edit User
        </Button>
        </FormControl>    
       </FormGroup>
    </div>
    )
}
export default EditUsers