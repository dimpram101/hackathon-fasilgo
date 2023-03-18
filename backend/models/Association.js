import Users from "./Users.js";
import KTPUser from "./KTPUser.js";
import Facility from "./Facility.js";
import FacilityPhoto from "./FacilityPhoto.js";
import Review from "./Review.js";
import Transaction from "./Transaction.js"
import TransactionDocument from "./TransactionDocument.js";
import TransactionPhoto from "./TransactionPhoto.js";
import db from "../database/db.js";

Users.hasMany(Review, {
  foreignKey: "userId",
  onDelete: "SET NULL"
})

Review.belongsTo(Users);

Users.hasMany(Facility, {
  foreignKey: "pengelolaId",
  onDelete: "SET NULL"
});

Facility.belongsTo(Users, {
  foreignKey: "pengelolaId"
});

Facility.hasMany(Review, {
  foreignKey: "facilityId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
})

Review.belongsTo(Facility);

Facility.hasMany(FacilityPhoto, {
  foreignKey: "facilityId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
})

FacilityPhoto.belongsTo(Facility, {
  foreignKey: "facilityId"
});

Facility.hasMany(Transaction, {
  foreignKey: "facilityId"
})

Transaction.belongsTo(Facility, {
  foreignKey: "facilityId"
})


Users.hasMany(Transaction, {
  foreignKey: "userId"
})

Transaction.belongsTo(Users, {
  foreignKey: "userId"
});

Transaction.hasMany(TransactionPhoto, {
  foreignKey: "transactionId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
});

TransactionPhoto.belongsTo(Transaction);

Transaction.hasOne(TransactionDocument, {
  foreignKey: "transactionId"
})

TransactionDocument.belongsTo(Transaction);

Users.hasOne(KTPUser, {
  foreignKey: "userId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE"
})
KTPUser.belongsTo(Users);

export {
  db,
  Users,
  KTPUser,
  Review,
  Facility,
  FacilityPhoto,
  Transaction,
  TransactionPhoto,
  TransactionDocument
};