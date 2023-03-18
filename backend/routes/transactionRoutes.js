import { Router } from "express";
import { getAllTransaction, getTransactionById, getUserTransaction } from "../controllers/transactionController.js";
const transactionRoutes = Router();

transactionRoutes.get('/', getAllTransaction)
// transactionRoutes.get('/get/excel', getAllOnlyTransactionExcel)
transactionRoutes.get('/:id', getTransactionById)
transactionRoutes.get('/user/:id', getUserTransaction)

export default transactionRoutes;