import express from 'express'
import { deleteUser, getAllUser, getUser, updateUser } from '../controllers/userController.js';

const router = express.Router();

//import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

//update user
router.put("/:id",updateUser);

//delete user
router.delete("/:id", deleteUser);

//get single user 
router.get("/:id", getUser);

//get all users
router.get("/", getAllUser);

export default router
