import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/userController.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();

//import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

//update user
router.put("/:id",verifyUser,updateUser);

//delete user
router.delete("/:id",verifyUser, deleteUser);

//get single user 
router.get("/:id",verifyUser,getUser);

//get all users
router.get("/",verifyUser, getAllUser);

export default router
