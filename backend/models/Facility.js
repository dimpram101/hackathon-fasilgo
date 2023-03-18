import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Facility = db.define('facilities', {
  namaFasilitas: {
    type: DataTypes.STRING,
    allowNull: false
  },
  alamat: {
    type: DataTypes.STRING,
    allowNull: false
  },
  deskripsi: {
    type: DataTypes.STRING,
    allowNull: false
  }, 
  hargaSewa: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  rekening: {
    type: DataTypes.STRING,
    allowNull: false
  },
  koordinatX: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  koordinatY: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  pengelolaId: {
    type: DataTypes.INTEGER,
    allowNull: true
  }
}, {
  timestamps: true,
  freezeTableName: true
});

export default Facility;