import { Router } from "express";
import facilityStorage from "../utils/storage/facilityStorage.js";
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
  insertNewFacilityPhoto,
} from "../controllers/adminController.js";

const adminRoutes = Router();

adminRoutes.post('/create-akun-pengelola', createAkunPengelola)
adminRoutes.get('/get-akun-pengelola', getAkunPengelola)
adminRoutes.get('/get-akun-penyewa', getAkunPenyewa)
adminRoutes.delete('/delete-akun/:id', deleteAkun)

adminRoutes.post('/create-new-facility', [facilityStorage.single('file')], insertNewFacility)
// adminRoutes.post('/create-new-facility-photo', [facilityStorage.single('file')], insertNewFacilityPhoto)
adminRoutes.put('/facility/:id', editFacility)
adminRoutes.delete('/facility/:id', deleteFacility)

adminRoutes.post('/facility/:id/photo', addFacilityPhoto)
adminRoutes.delete('/facility/:id/photo/:photoId', deleteFacilityPhoto)
adminRoutes.put('/transaction/:id', updateTransaction)


export default adminRoutes;