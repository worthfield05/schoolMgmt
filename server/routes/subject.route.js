import {Router} from 'express';
import { isAuthenticated, isAuthorized } from '../middleware/auth.middleware.js';
import { createSubject, getSubjects } from '../controllers/subject.controller.js';
const router = Router();
router.route("/").post(isAuthenticated,isAuthorized("admin"),createSubject);
router.route("/").get(isAuthenticated,isAuthorized("admin","teacher"),getSubjects);

export default router;