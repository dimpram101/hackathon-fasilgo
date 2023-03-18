import { Router } from "express";
import { getAllFacilitiesOnly, getAllFacilitiesWithPhoto, getFacilityWithId } from "../controllers/facilityController.js";
const facilityRoutes = Router();

facilityRoutes.get('/', getAllFacilitiesOnly)
facilityRoutes.get('/get-with-photo', getAllFacilitiesWithPhoto)
facilityRoutes.get('/:id', getFacilityWithId)


export default facilityRoutes;