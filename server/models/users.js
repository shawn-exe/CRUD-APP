import mongoose from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
const usermodel=mongoose.Schema({// this is  the validation or structure of the collection or table
    name:String,
    usn:String,
    email:String,
    phone:String
});
autoIncrement.initialize(mongoose.connection);
usermodel.plugin(autoIncrement.plugin,'user');
const user = mongoose.model('user',usermodel);//it will add s in user automatically
//the above line is used to create the schema or table in the database
export default user;