import mongoose from "mongoose"
const connection = async(username,password)=>{
    const url=`mongodb+srv://${username}:${password}@cluster0.udgsndn.mongodb.net/?retryWrites=true&w=majority`; 
    try{
       await mongoose.connect(url);
       console.log("DB connected successfully");
    }
    catch(error)
    {
        console.log("Error connecting to the database",error);
    }
}
export default connection;

