import  express  from "express";
const router = express.Router();
import {addUser,getUsers,getSingleUser,editUser,deleteUser} from '../controllers/userController.js'

router.post('/add',addUser);
router.get('/getusers',getUsers);
router.get('/getsingleUser/:id',getSingleUser);
router.post('/edituser/:id',editUser);
router.delete('/deleteuser/:id',deleteUser);

export default router;