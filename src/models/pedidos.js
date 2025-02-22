import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const pedidos = sequelize.define("pedidos",{
    id_pedido:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    fecha:{
        type:DataTypes.DATE,
    },
    total:{
        type:DataTypes.REAL,
    },
},{
    timestamps:true
});

