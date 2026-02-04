import {Router} from 'express';
import { createStudent, getStudents, removeStudent, updateStudent } from '../controllers/student.controller.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.middleware.js';
const router = Router();
router.route("/").post(isAuthenticated,isAuthorized("admin"),createStudent).get(isAuthenticated,isAuthorized("admin","teacher"),getStudents);
router.route("/:id").put(isAuthenticated,isAuthorized("admin"),updateStudent)
router.route("/:id").put(isAuthenticated,isAuthorized("admin"),removeStudent)
export default router;