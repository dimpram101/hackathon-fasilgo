import db from "../database/db.js";
import { DataTypes } from "sequelize";

const FacilityPhoto = db.define('facility_photos', {
  facilityId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  photoTitle: {
    type: DataTypes.STRING,
    allowNull: true
  },
  path: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  timestamps: false,
  freezeTableName: true
})

export default FacilityPhoto;