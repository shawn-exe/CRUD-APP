import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connection from './database/db.js';
import routes from './routes/route.js'
const app = express ();//creating the instance
app.use(cors());
dotenv.config();
app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/',routes);//this is beacause we are using express for routing 
const port=8000;//setting up port number
const username=process.env.db_username;
const password=process.env.db_password;
connection(username,password);
app.listen(port,()=>console.log("server running"));

