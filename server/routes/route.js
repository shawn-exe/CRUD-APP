import  express  from "express";
const router = express.Router();
import addUser from '../controllers/userController.js'

router.post('/add',addUser);


export default router;