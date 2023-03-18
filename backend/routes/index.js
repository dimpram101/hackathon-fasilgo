import authRoute from "./authRoutes.js";
import { Router } from "express";

const indexRoute = Router();

indexRoute.use(authRoute);

export default indexRoute;