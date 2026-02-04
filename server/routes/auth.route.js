import {Router} from 'express';
import { getMe, login, register } from '../controllers/auth.controller.js';
import  { isAuthenticated } from '../middleware/auth.middleware.js';
const router = Router();
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/me").get(isAuthenticated ,getMe)
export default router;