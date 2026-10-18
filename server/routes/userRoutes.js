import express from "express";
import auth from '../middlewares/auth.js'
import { getPublishCreations, getUserCreations, toggleLikeCreations } from "../controllers/userController.js";

const userRouter = express.Router();


userRouter.get('/get-user-creations', auth, getUserCreations)
userRouter.get('/get-publish-creations', auth, getPublishCreations)
userRouter.post('/toggle-like-creations', auth, toggleLikeCreations)

export default userRouter;