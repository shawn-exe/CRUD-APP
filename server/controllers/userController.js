import User from "../models/users.js";
export const addUser=async (request, response)=>{//req-> what is the data sent in api res->backend to frontend response
    const user= request.body;//extracts all the data from the request
    const newUser=new User(user);// this line validates the data according to what is mentioned in the models/users.js file
    try{
       await newUser.save(); //saves the data into the databse;
       response.status(201).json(newUser);
    }catch(error)
    {
        response.status(409).json({message:error.message});
    }
}


export const getUsers = async (request,response) =>
{
    try{
      const user = await User.find({});//to extract all the data from data base;
      response.status(201).json(user);// Response is from backend to front-end;
    }catch(error)
    {
      response.status(404).json({message:error.message});
    }
}