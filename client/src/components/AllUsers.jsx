import {React,useEffect,useState} from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@mui/material';
import {getUsers} from '../services/api';

function AllUsers() {
 
  const [users,setUsers]=useState([]);

  useEffect(()=>{
    getAllUsers();
  },[]);

  const getAllUsers=async()=>{
   let response = await getUsers();
   setUsers(response.data);
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>USN</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map(user => (//maps all the users into a single unit called user   
              <TableRow>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.usn}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell sx={{width:100}}>
                <Button variant='contained'>
                  Edit
                </Button>
              </TableCell>
              <TableCell sx={{width:200}}>
                <Button variant='contained' style={{backgroundColor:'red' , color:'white'}}>
                  Delete
                </Button>
              </TableCell>
              </TableRow>
        ))
        }
      </TableBody>
    </Table>
  )
}
export default AllUsers
