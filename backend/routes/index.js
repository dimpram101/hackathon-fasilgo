import authRoute from "./authRoutes.js";
import adminRoutes from "./adminRoutes.js";
import facilityRoutes from "./facilityRoutes.js"
import { Router } from "express";

const indexRoute = Router();

indexRoute.use(authRoute);
indexRoute.use('/admin', adminRoutes);

export default authRoute;