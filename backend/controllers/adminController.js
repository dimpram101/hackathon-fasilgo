import { userRegistrationSchema } from "../utils/joyVerification.js";
import { Users, Facility, FacilityPhoto, Transaction, KTPUser } from "../models/Association.js";
import bcrypt from "bcrypt";
import UserKTP from "../models/KTPUser.js";
import mailTransporter from "../utils/mail/mails.js";

/////////////////
// Facility
/////////////////
const insertNewFacility = async (req, res) => {
  const { namaFasilitas, alamat, deskripsi, hargaSewa, rekening, pengelolaId } = req.body;
  const file = req.file;
  const filename = file.originalname.split('.')[0];
  try {
    const f = await Facility.create({
      namaFasilitas, alamat, deskripsi, hargaSewa, rekening, pengelolaId,
    });

    if (file) {
      // facilityPhoto.forEach(async (photo) => {
      await FacilityPhoto.create({
        photoTitle: filename,
        path: file.path,
        facilityId: f.id
      });
      // })
    }

    return res.status(201).json({
      msg: "Fasilitas berhasil dibuat!",
    });
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      msg: "Fasilitas gagal dibuat!",
      payload: error
    })
  }
}

const insertNewFacilityPhoto = async (req, res) => {
  const file = req.file;
  console.log(file);
  const filename = file.originalname.split('.')[0];
  if (file) {
    // facilityPhoto.forEach(async (photo) => {
    await FacilityPhoto.create({
      photoTitle: filename,
      path: file.path,
      facilityId: f.id
    });
    // })
  }
  return res.status(201).json({ msg: "Berhasil menambahkan photo!" });
}

const editFacility = async (req, res) => {
  const { id } = req.params;
  const { namaFacility, alamat, deskripsi, rekening, pengelolaId } = req.body

  try {
    await Facility.update({ namaFacility, alamat, deskripsi, rekening, pengelolaId }, {
      where: { id }
    });

    return res.status(200).json({
      msg: "Fasilitas berhasil diperbaharui!",
    });
  } catch (error) {
    return res.status(400).json({
      msg: "Fasilitas gagal diperbaharui!",
      payload: error
    })
  }
}

const deleteFacility = async (req, res) => {
  const { id } = req.params;

  Facility.destroy({
    where: {
      id
    }
  }).then(() => res.status(200).json({ msg: "Fasilitas berhasil dihapus!" }))
    .catch(err => res.status(400).json({ msg: "Gagal menghapus fasilitas!", payload: err }))
}

/////////////////////
// Facility Photo
/////////////////////
const addFacilityPhoto = (req, res) => {
  const { id } = req.params;
  const { facilityPhoto } = req.body;

  facilityPhoto.forEach(async (photo) => {
    await FacilityPhoto.create({
      ...photo,
      facilityId: id
    }).catch(err => res.status(200).json({ msg: "Foto gagal ditambahkan!", payload: err }))
  })

  return res.status(200).json({ msg: "Foto berhasil ditambahkan!" });
}

const deleteFacilityPhoto = async (req, res) => {
  const { id, photoId } = req.params;

  try {
    const facility = await FacilityPhoto.destroy({
      where: {
        id: photoId,
        facilityId: id
      }
    })

    if (!facility) {
      return res.status(404).json({
        msg: "Gagal menghapus foto!, Karena foto tidak ditemukan atau telah dihapus"
      })
    }

    return res.status(200).json({ msg: "Berhasil menghapus foto" })
  } catch (error) {
    return res.status(400).json({ msg: "Gagal menghapus foto!", payload: error })
  }
}

////////////////////
// Akun Pengelola
////////////////////
const createAkunPengelola = async (req, res) => {
  if (req.body.password !== req.body.confirmPassword)
    return res.status(400).json({ msg: "Password tidak cocok dengan Confirm Password!" })

  try {
    const user = await userRegistrationSchema.validateAsync(req.body, { abortEarly: false })
    delete user.confirmPassword;

    const genSalt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password, genSalt);

    Users.create({
      ...user,
      password: hashPassword
    }).then(user => res.status(201).json({ msg: "Berhasil membuat akun!", payload: user }));

  } catch (err) {
    console.log(err)
    return res.status(400).json({ err });
  }
}

const deleteAkunPengelola = async (req, res) => {
  const { pengelolaId } = req.body

  Users.destroy({
    where: {
      id: pengelolaId
    }
  }).then(() => res.status(200).json({ msg: "Akun berhasil dihapus!" }))
    .catch(err => res.status(400).json({ msg: "Gagal menghapus akun!", err }))
}

const getAkunPengelola = (req, res) => {
  Facility.findAll({
    attributes: ['id'],
    include: {
      model: Users,
      attributes: ['id', 'fullname', 'email', 'nomorHP'],
      include: [UserKTP]
    }
  }).then((user) => {
    if (!user) return res.status(404).json({ msg: "Belum ada user!" })

    return res.status(200).json({ msg: "User ditemukan", payload: user })
  }).catch(err => {
    console.log(err)
    return res.status(400).json({ msg: "Terjadi error", payload: err })
  })
}

const updateTransaction = async (req, res) => {
  const userId = res.locals.userId
  const { id } = req.params;
  const { status, catatan } = req.body;
  // console.log(status,catatan)
  // Transaction.update({ status }, { where: { id } })
  //   .then(result => res.status(200).json({ msg: "Transaksi berhasil diperbaharui!", payload: result }))
  //   .catch(err => res.status(400).json({ msg: "Transaksi gagal diperbaharui!", payload: err }));

  try {
    let transaction = await Transaction.findOne({
      where: { id },
      include: [
        {
          model: Users,
          attributes: ["email"]
        },
        {
          model: Facility,
          attributes: ["namaFasilitas"]
        }
      ]
    })

    if (!transaction) return res.status(404).json({ msg: "Tidak ditemukan data transaksi!" })
    transaction = await transaction.update({ status, catatan });
    // console.log(transaction.facility.namaFasilitas)
    // if (status == "Disetujui") {
    await mailTransporter.sendMail({
      from: 'dimpram10@gmail.com',
      to: "dimas2004211@gmail.com",
      subject: "Update Pengajuan Penyewaan Fasilitas",
      text: `Halo, Status pengajuan kamu pada ${transaction.facility.namaFasilitas} telah diperbaharui, yuk cek status pengajuan kamu pada web FasilGo!`
    }).then(() => {
      console.log("Email telah terkirim!")
    })
    // }

    return res.status(200).json({ msg: "Transaksi berhasil diperbaharui!", payload: transaction })
  } catch (err) {
    console.log(err);
    return res.status(400).json({ msg: "Transaksi gagal diperbaharui!", payload: err });
  }
}

const getAkunPenyewa = (req, res) => {
  Users.findAll({
    include: [
      {
        model: Facility,
        attributes: ["id"]
      },
      {
        model: KTPUser
      }
    ]
  }).then((user) => {
    return res.status(200).json({ msg: "Data ditemukan!", payload: user })
  }).catch(err => res.status(400).json({ msg: "ERROR", payload: err }))
}

const deleteAkun = (req, res) => {
  const id = req.params.id;

  Users.destroy({
    where: {
      id
    }
  }).then(() => res.status(200).json({ msg: "Berhasil mengahpus akun!" }))
    .catch(err => {
      console.log(err)
      return res.status(400).json({ msg: "ERROR", payload: err })
    })
}

export {
  insertNewFacility,
  insertNewFacilityPhoto,
  editFacility,
  deleteFacility,
  addFacilityPhoto,
  deleteFacilityPhoto,
  createAkunPengelola,
  deleteAkunPengelola,
  getAkunPengelola,
  getAkunPenyewa,
  updateTransaction,
  deleteAkun
}