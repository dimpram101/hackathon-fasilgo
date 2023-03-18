import { makeStorage, makeDiskStorage } from "../multer.js";

const storage = makeDiskStorage('./public/transactions/');
const transactionStorage = makeStorage(storage);

export default transactionStorage;