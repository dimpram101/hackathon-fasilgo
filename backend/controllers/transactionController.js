import { Facility, FacilityPhoto, Transaction, TransactionDocument, TransactionPhoto, Users } from "../models/Association.js";
////////////////////
// Transaction
////////////////////
const getAllTransaction = async (req, res) => {
  Transaction.findAll({
    include: [
      {
        model: Users,
        attributes: ['fullname']
      },
      { model: TransactionDocument },
      { model: TransactionPhoto }
    ]
  }).then(transactions => {
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
      { model: Users },
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

const getUserTransaction = async (req, res) => {
  const userId = req.params.id;
  // console.log(userId)

  Transaction.findAll({
    where: { userId },
    include: [
      { model: Users },
      { model: Facility },
      { model: TransactionDocument },
      { model: TransactionPhoto }
    ]
  }).then(transaction => {
    if (!transaction) {
      return res.status(404).json({ msg: `Tidak ditemukan data transaksi`, payload: null })
    }
    return res.status(200).json({ msg: `Berhasil mendapatkan data transaksi`, payload: transaction })
  }).catch(err => {
    console.log(err)
    res.status(400).json({ msg: `Gagal mendapatkan data transaksi`, payload: err })
  })
}

const getTransactionFacility = (req, res) => {
  const facilityId = req.params.facilityId;

  Transaction.findAll({
    where: {
      facilityId,

    },
    include: [
      {
        model: Facility,
        include: [FacilityPhoto]
      }
    ]
  }).then(transaction => {
    if (!transaction) {
      return res.status(404).json({ msg: `Tidak ditemukan data transaksi`, payload: null })
    }
    return res.status(200).json({ msg: `Berhasil mendapatkan data transaksi`, payload: transaction })
  }).catch(err => {
    console.log(err)
    res.status(400).json({ msg: `Gagal mendapatkan data transaksi`, payload: err })
  })
}

export {
  getAllTransaction,
  getTransactionById,
  getUserTransaction,
  getTransactionFacility
}