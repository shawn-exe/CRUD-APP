import  express  from "express";
const router = express.Router();
import {addUser,getUsers} from '../controllers/userController.js'

router.post('/add',addUser);
router.get('/getusers',getUsers);


export default router;