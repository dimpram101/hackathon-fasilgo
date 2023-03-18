import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Review = db.define('reviews', {
  userId: {
    type: DataTypes.INTEGER
  },
  facilityId: {
    type: DataTypes.INTEGER
  },
  review: {
    type: DataTypes.TEXT
  }
}, {
  freezeTableName: true,
  timestamps: true
})

export default Review;