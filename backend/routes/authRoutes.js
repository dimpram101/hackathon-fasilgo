import { Router } from "express";
import { login, logout, register } from "../controllers/authController.js";
import { isEmailExist, loginVerify, registerVerify } from "../middlewares/authMiddleware.js";
import verifyToken from "../middlewares/verifyToken.js";

const authRoute = Router();

authRoute.post('/login', [loginVerify], login);
authRoute.post('/register', [registerVerify, isEmailExist], register);
authRoute.post('/logout', [verifyToken], logout);

export default authRoute;