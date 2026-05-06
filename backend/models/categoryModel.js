import { database } from "../config/database.js";
import { DataTypes } from "sequelize";

const category = database.define("category",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    categoryName: {
        type: DataTypes.STRING,
        allowNull: false,

    }
})

export default category;