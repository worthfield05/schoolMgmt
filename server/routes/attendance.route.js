import {Router} from 'express';
import { isAuthenticated, isAuthorized } from '../middleware/auth.middleware.js';
import { getAttendance, markAttendance } from '../controllers/attendance.controller.js';
const router = Router();
router.route("/").post(isAuthenticated,isAuthorized("teacher"),markAttendance)
.get(isAuthenticated,isAuthorized("admin","teacher"),getAttendance)

export default router;