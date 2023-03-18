import multer from "multer";
import { v4 as uuidv4 } from "uuid";

const makeDiskStorage = (dest) => {
  return multer.diskStorage({
    destination: (req, res, cb) => {
      cb(null, (dest ? dest : "/public"))
    },
    filename: (req, file, cb) => {
      cb(null, uuidv4() + "." + file.mimetype.split('/').reverse()[0])
    }
  })
}

const makeStorage = (diskStorage) => {
  return multer({ storage: diskStorage })
}

export { makeDiskStorage, makeStorage };
