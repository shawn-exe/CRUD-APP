import axios from 'axios';
const url='http://localhost:8000'
export const addUser = async (data) =>{
    try{
        return await axios.post(`${url}/add`,data);
    }catch(error)
    {
        console.log('addUser error',error);
    }
}

export const getUsers =async () => 
{
    try{ 
        return await axios.get(`${url}/getusers`);
    }catch(error)
    {
        console.log("Error while retrieving users",error);
    }
}

export const getSingleUser =async (id) => 
{
    try{ 
        return await axios.get(`${url}/getsingleUser/${id}`);
    }catch(error)
    {
        console.log("Error while retrieving single user",error);
    }
}

export const editUser = async (data,id) =>{
    try{
        return await axios.post(`${url}/edituser/${id}`,data);// we can use axios.put as well
    }catch(error)
    {
        console.log('editUser error',error);
    }
}

export const deleteUser=async(id)=>{
try{
     return await axios.delete(`${url}/deleteuser/${id}`,id);   
}catch(error)
{
    console.log("Error while deleting and user",error);
}
}