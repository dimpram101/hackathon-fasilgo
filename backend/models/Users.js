import db from "../database/db.js";
import { DataTypes } from "sequelize";

const User = db.define('users', {
  fullname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nomorHP: {
    type: DataTypes.STRING(14),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  isAdmin: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: true,
  }
}, {
  timestamps: true,
  freezeTableName: true
})

export default User;