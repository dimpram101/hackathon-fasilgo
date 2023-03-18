import { makeDiskStorage, makeStorage } from "../multer.js";

const storage = makeDiskStorage('./public/facilities/');
const facilityStorage = makeStorage(storage);

export default facilityStorage;