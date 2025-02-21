import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const clientes = sequelize.define("clientes",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    nombre:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING,
    },
    telefono:{
        type:DataTypes.STRING,
    },
    direccion:{
        type:DataTypes.STRING,
    },
},{
    timestamps:false
});