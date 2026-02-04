import {Router} from 'express';
import { getMe, login, logout, register } from '../controllers/auth.controller.js';
import  { isAuthenticated, isAuthorized } from '../middleware/auth.middleware.js';
const router = Router();
router.route("/register").post(isAuthenticated,isAuthorized('admin'),register);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/me").get(isAuthenticated ,getMe)
export default router;