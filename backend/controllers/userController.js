import { editUserSchema, transactionSchema } from "../utils/joyVerification.js";
import { Users, KTPUser, Transaction, TransactionPhoto, Review } from "../models/Association.js";

export const inputKTP = async (req, res) => {
  const userId = res.locals.userId;
  const file = req.file;
  console.log(file);
  const fileName = file.originalname.split('.')[0];
  KTPUser.create({
    userId,
    imageName: fileName,
    path: file.path
  }).then(() => res.status(201).json({ msg: "Berhasil memasukkan data!" }))
    .catch(err => res.status(400).json({ msg: "Gagal menambahkan data!", payload: err }))
  // res.send(file)
};

export const editAccount = async (req, res) => {
  const userId = res.locals.userId;
  const { fullname, nomorHP } = req.body;
  console.log(fullname, nomorHP)
  const validatedData = await editUserSchema.validateAsync({
    fullname,
    nomorHP
  }).catch(err => res.status(400).json({ msg: err.details[0].message }));

  // console.log(validatedData)

  Users.update(validatedData, {
    where: {
      id: userId
    }
  }).then(() => res.status(200).json({ msg: "Akun berhasil diperbaharui!" }))
    .catch(err => res.status(400).json({ msg: "Gagal memperbaharui akun!", payload: err }))
}

export const getSelfData = (req, res) => {
  const id = req.params.id;

  Users.findOne({
    where: {
      id
    },
    include: [KTPUser]
  }).then((user) => {
    return res.status(200).json({ payload: user })
  }).catch(err => {
    console.log(err)
    res.status(400).json({ msg: "ERROR", payload: err })
  })
}

export const createTransaction = async (req, res) => {
  const userId = res.locals.userId;
  const { facilityId } = req.params;

  Transaction.create({
    ...req.body,
    userId,
    facilityId
  }).then(() => res.status(201).json({
    msg: "Pengajuan kamu telah diajukan, harap menunggu verifikasi!"
  })).catch(err => res.status(400).json({
    msg: "Pengajuan gagal",
    payload: err
  }))
}

export const insertTransactionPayment = async (req, res) => {
  const { transactionId, photoTitle } = req.body;
  const file = req.file;
  const filename = file.originalname.split('.')[0];

  TransactionPhoto.create({
    transactionId,
    photoTitle: filename,
    path: file.path
  }).then(() => res.status(201).json({ msg: "Berhasil menambahkan bukti transaksi!" }))
    .catch(err => res.status(400).json({ msg: "Gagal menambahkan bukti transaksi!", payload: err }))
}

export const insertFacilityReview = (req, res) => {
  const userId = res.locals.userId;
  const facilityId = req.params;
  const { review } = req.body;

  if (!review) return res.status(400).json({ msg: "Harap mengisi ulasan!" })

  Review.create({
    userId,
    facilityId,
    review
  }).then(result => res.status(201).json({ msg: "Berhasil menambahkan ulasan!" }))
    .catch(err => res.status(400).json({ msg: "Gagal menambahkan ulasan", payload: err }))
}

export const getByFullname = (req, res) => {
  const { fullname } = req.body;

  Users.findOne({
    where: {
      fullname
    },
    attributes: ["id"]
  }).then(user => {
    return res.status(200).json({ msg: "User ditemukan", payload: user })
  }).catch(err => {
    console.log(err);
    return res.status(400).json({ msg: "ERROR", payload: err })
  })
}