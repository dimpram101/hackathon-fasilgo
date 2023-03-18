import db from "../database/db.js";
import { DataTypes } from "sequelize";

const UserKTP = db.define('user_ktp', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  imageName: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  path: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  freezeTableName: true,
  timestamps: true
})

export default UserKTP;