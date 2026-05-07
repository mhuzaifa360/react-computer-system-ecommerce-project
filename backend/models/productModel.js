import { database } from "../config/database.js";
import { DataTypes } from "sequelize";

const products = database.define("products",{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    productName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    productPrice: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productCategory: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    productAvailability: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    freeShipping: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    productImage: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default products;