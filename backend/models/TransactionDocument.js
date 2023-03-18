import db from "../database/db.js";
import { DataTypes } from "sequelize";

const TransactionDocument = db.define('transaction_documents', {
  transactionId: {
    type: DataTypes.INTEGER
  },
  documentTitle: {
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

export default TransactionDocument;