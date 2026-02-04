import {Router} from 'express';
import { isAuthenticated, isAuthorized } from '../middleware/auth.middleware.js';
import { createTeacher, getTeachers, removeTeacher, updateTeacher } from '../controllers/teacher.controller.js';
const router = Router();
router.route("/").post(isAuthenticated,isAuthorized("admin"),createTeacher).get(isAuthenticated,isAuthorized("admin"),getTeachers);
router.route("/:id").put(isAuthenticated,isAuthorized("admin"),updateTeacher)
router.route("/:id").put(isAuthenticated,isAuthorized("admin"),removeTeacher)
export default router;