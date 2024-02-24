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

export const getSingleUser = async (request,response) =>//id is ther in request ie in params
{
    try{
      //const user = await User.find({_id:request.params.id});//to extract the data from data base based on the id;
      const user = await User.findById(request.params.id);
      response.status(201).json(user);// Response is from backend to front-end;
    }catch(error)
    {
      response.status(404).json({message:error.message});
    }
}

export const editUser= async(request, response)=>
{
  let user=request.body;
  let edituser= new User(user);
  try{
    await User.updateOne({_id:request.params.id},edituser);//finds the object by _id and replaces it with the new edit user.
    response.status(201).json(edituser);
  }catch(error)
  {
    response.status(409).json({message:error.message});
  }
}

export const deleteUser=async(request,response)=>{
try{
  await User.deleteOne({_id:request.params.id});
  response.status(201).json({message: "user deleted sucessfully"});//if this is not added then the api will remain in pending state..
}catch(error)
{
response.status(409).json({message:error.message});
}
}