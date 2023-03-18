import db from "../database/db.js";
import { DataTypes } from "sequelize";

const Transaction = db.define('transactions', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  facilityId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  atasNama: {
    type: DataTypes.STRING,
    allowNull: false
  },
  keteranganPenggunaan: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  tanggalPeminjaman: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  tanggalSelesai: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM(['Menunggu', 'Disetujui', 'Selesai', 'Ditolak', 'Revisi']),
    defaultValue: "Menunggu"
  },
  catatan: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: null
  }
}, {
  timestamps: true,
  freezeTableName: true
})

export default Transaction;