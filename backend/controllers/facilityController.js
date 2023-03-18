import { Facility, FacilityPhoto, Transaction, Users } from "../models/Association.js";

const getAllFacilitiesWithPhoto = (req, res) => {
  Facility.findAll({
    include: {
      model: FacilityPhoto
    }
  }).then(facility => {
    if (!facility) return res.status(404).json({ msg: "Tidak ada data fasilitas!" })
    return res.status(200).json({ msg: "Data ditemukan!", payload: facility })
  }).catch(err => {
    console.log(err);
    return res.status(400).json({ msg: "Terjadi masalah!", payload: err })
  })
}

const getAllFacilitiesOnly = (req, res) => {
  Facility.findAll({
    include: {
      model: Users,
      attributes: ["id", "fullname"]
    }
  })
    .then(facility => {
      if (!facility) return res.status(404).json({ msg: "Tidak ada data fasilitas!" })
      return res.status(200).json({ msg: "Data ditemukan!", payload: facility })
    })
    .catch(err => {
      console.log(err);
      return res.status(400).json({ msg: "Terjadi masalah!", payload: err })
    })
}

const getFacilityWithId = async (req, res) => {
  const facilityId = req.params.id;

  try {
    const facility = await Facility.findOne({
      where: {
        id: facilityId
      },
      include: [
        { model: FacilityPhoto },
        { model: Users, attributes: ["id", "fullname"] }
      ]
    })

    const transaction = await Transaction.findAll({
      where: {
        facilityId,
        status: "Disetujui"
      }
    })

    return res.status(200).json({ msg: "Data ditemukan!", payload: { facility, transaction } })
  } catch (error) {
    return res.status(400).json({ msg: "Terjadi masalah!", payload: err })
  }


  // Facility.findOne({
  //   where: {
  //     id: facilityId
  //   },
  //   include: [
  //     { model: FacilityPhoto },
  //     { model: Users, attributes: ["id", "fullname"] },
  //     { model: Transaction }
  //   ]
  // }).then(facility => {
  //   if (!facility) return res.status(404).json({ msg: `Tidak ada data fasilitas dengan id: ${facilityId}!` })
  //   return res.status(200).json({ msg: "Data ditemukan!", payload: facility })
  // }).catch(err => {
  //   console.log(err);
  //   return res.status(400).json({ msg: "Terjadi masalah!", payload: err })

}

export { getAllFacilitiesOnly, getFacilityWithId, getAllFacilitiesWithPhoto };