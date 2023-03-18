import { makeStorage, makeDiskStorage } from "../multer.js";

const storage = makeDiskStorage('./public/ktp/');
const ktpStorage = makeStorage(storage);

export default ktpStorage;