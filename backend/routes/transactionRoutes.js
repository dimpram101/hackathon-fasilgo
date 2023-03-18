import { Router } from "express";
import { getAllTransaction, getTransactionById } from "../controllers/transactionController.js";
const transactionRoutes = Router();

transactionRoutes.get('/', getAllTransaction)
// transactionRoutes.get('/get/excel', getAllOnlyTransactionExcel)
transactionRoutes.get('/:id', getTransactionById)

export default transactionRoutes;