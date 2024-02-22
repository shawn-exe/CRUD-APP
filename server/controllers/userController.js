import User from "../models/users.js";
const addUser=async (request, response)=>{//req-> what is the data sent in api res->backend to frontend response
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
export default addUser;