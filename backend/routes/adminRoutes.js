import { Router } from "express";
import {
  addFacilityPhoto,
  deleteFacility,
  deleteFacilityPhoto,
  editFacility,
  insertNewFacility, 
  createAkunPengelola,
  updateTransaction, 
} from "../controllers/adminController.js";
import facilityStorage from "../utils/storage/facilityStorage.js";

const adminRoutes = Router();

adminRoutes.post('/create-akun-pengelola', createAkunPengelola)

adminRoutes.post('/create-new-facility', [facilityStorage.array('files')], insertNewFacility)
adminRoutes.put('/facility/:id', editFacility)
adminRoutes.delete('/facility/:id', deleteFacility)

adminRoutes.post('/facility/:id/photo', addFacilityPhoto)
adminRoutes.delete('/facility/:id/photo/:photoId', deleteFacilityPhoto)
adminRoutes.put('/transaction/:id', updateTransaction)


export default adminRoutes;