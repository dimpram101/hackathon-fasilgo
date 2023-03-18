import { transactionSchema } from "../utils/joyVerification.js";

const verifyTransactionCreation = async (req, res, next) => {
  const { atasNama, keteranganPenggunaan, tanggalPeminjaman, tanggalSelesai } = req.body;
  transactionSchema.validateAsync({
    atasNama,
    keteranganPenggunaan,
    tanggalPeminjaman,
    tanggalSelesai
  }).then(() => next())
    .catch(err => res.status(400).json({ msg: err.details[0].message }))
}

export { verifyTransactionCreation }