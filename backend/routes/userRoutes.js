import { Router } from "express";
import { createTransaction, editAccount, inputKTP, insertTransactionPayment } from "../controllers/userController.js";
import { verifyTransactionCreation } from "../middlewares/transactionMiddleware.js";
import transactionStorage from "../utils/storage/transactionStorage.js";
import ktpStorage from "../utils/storage/userKTPStorage.js";

const userRoutes = Router();

userRoutes.post('/input-ktp', [ktpStorage.single('file')], inputKTP);
userRoutes.put('/edit-account', editAccount);
userRoutes.post('/transactions/payment', [transactionStorage.single('file')], insertTransactionPayment);

userRoutes.post('/transactions/:facilityId', [verifyTransactionCreation], createTransaction)
// userRoutes.post('/transactions/:id/payment', insertTransactionPayment)

export default userRoutes;