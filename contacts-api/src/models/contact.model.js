import { DataTypes } from "sequelize";
import { sequelize } from "../config/db.config.js";

export const Contact = sequelize.define("contact", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.BIGINT,
    allowNull: false,
  },
});
