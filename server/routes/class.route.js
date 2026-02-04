import {Router} from 'express';
import { createClass, getClasses, removeClass, updateClass } from '../controllers/class.controller.js';
import { isAuthenticated, isAuthorized } from '../middleware/auth.middleware.js';
const router = Router();
router.route("/").post(isAuthenticated,isAuthorized("admin"),createClass);
router.route("/").get(isAuthenticated,isAuthorized("admin","teacher"),getClasses);
router.route("/:id").put(isAuthenticated,isAuthorized("admin"),updateClass);
router.route("/:id").delete(isAuthenticated,isAuthorized("admin"),removeClass);

export default router;