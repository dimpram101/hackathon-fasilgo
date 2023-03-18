import db from "../database/db.js";
import { DataTypes } from "sequelize";

const TransactionPhoto = db.define('transaction_photos', {
  transactionId: {
    type: DataTypes.INTEGER
  },
  photoTitle: {
    type: DataTypes.STRING
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: true,
  freezeTableName: true
})

export default TransactionPhoto;