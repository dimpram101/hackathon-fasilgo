import { Transaction, TransactionDocument, TransactionPhoto } from "../models/Association.js";
////////////////////
// Transaction
////////////////////
const getAllTransaction = async (req, res) => {
  Transaction.findAll().then(transactions => {
    res.status(200).json({ msg: "Berhasil mendapatkan data transaksi", payload: transactions })
  }).catch(err => {
    res.status(400).json({ msg: "Berhasil mendapatkan data transaksi", payload: err })
  })
}

const getTransactionById = async (req, res) => {
  const { id } = req.params;

  Transaction.findOne({
    where: { id },
    include: [
      { model: TransactionDocument },
      { model: TransactionPhoto }
    ]
  }).then(transaction => {
    if (!transaction) {
      return res.status(404).json({ msg: `Tidak ditemukan data transaksi dengan id: ${id}`, payload: null })
    }
    return res.status(200).json({ msg: `Berhasil mendapatkan data transaksi dengan id: ${id}`, payload: transaction })
  }).catch(err => {
    res.status(400).json({ msg: `Gagal mendapatkan data transaksi dengan id: ${id}`, payload: err })
  })
}

export {
  getAllTransaction,
  getAllOnlyTransactionExcel,
  getTransactionById
}