import { Router } from "express";
import { getAllTransaction, getTransactionById, getTransactionFacility, getUserTransaction } from "../controllers/transactionController.js";
const transactionRoutes = Router();

transactionRoutes.get('/', getAllTransaction)
// transactionRoutes.get('/get/excel', getAllOnlyTransactionExcel)
transactionRoutes.get('/:id', getTransactionById)
transactionRoutes.get('/user/:id', getUserTransaction)
transactionRoutes.get('/facility/:facilityId', getTransactionFacility)

export default transactionRoutes;