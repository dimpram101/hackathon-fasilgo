import { Router } from "express";
import {
  addFacilityPhoto,
  deleteFacility,
  deleteFacilityPhoto,
  editFacility,
  insertNewFacility, 
  createAkunPengelola,
  updateTransaction,
  getAkunPengelola,
  getAkunPenyewa,
  deleteAkun, 
} from "../controllers/adminController.js";

const adminRoutes = Router();

adminRoutes.post('/create-akun-pengelola', createAkunPengelola)
adminRoutes.get('/get-akun-pengelola', getAkunPengelola)
adminRoutes.get('/get-akun-penyewa', getAkunPenyewa)
adminRoutes.delete('/delete-akun/:id', deleteAkun)

adminRoutes.post('/create-new-facility', insertNewFacility)
adminRoutes.put('/facility/:id', editFacility)
adminRoutes.delete('/facility/:id', deleteFacility)

adminRoutes.post('/facility/:id/photo', addFacilityPhoto)
adminRoutes.delete('/facility/:id/photo/:photoId', deleteFacilityPhoto)
adminRoutes.put('/transaction/:id', updateTransaction)


export default adminRoutes;