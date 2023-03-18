import authRoute from "./authRoutes.js";
import adminRoutes from "./adminRoutes.js";
import facilityRoutes from "./facilityRoutes.js"
import { Router } from "express";
import verifyToken from "../middlewares/verifyToken.js";
import { isUserAdmin } from "../middlewares/authMiddleware.js";
import transactionRoutes from "./transactionRoutes.js";
import userRoutes from "./userRoutes.js";

const indexRoute = Router();

indexRoute.use(authRoute);
indexRoute.use('/user', [verifyToken], userRoutes);
indexRoute.use('/admin', [verifyToken, isUserAdmin, adminRoutes]);
indexRoute.use('/transactions', transactionRoutes);
indexRoute.use('/facilities', facilityRoutes);

export default indexRoute;