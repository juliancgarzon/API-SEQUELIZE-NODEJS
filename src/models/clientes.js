import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { pedidos} from "./pedidos.js";


export const clientes = sequelize.define("clientes",{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    nombre:{
        type:DataTypes.STRING,
        allowNull: false
    },
    email:{
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    telefono:{
        type:DataTypes.STRING,
    },
    direccion:{
        type:DataTypes.STRING,
    },
},{
    timestamps:true
});

clientes.hasMany(pedidos ,{
    foreignKey: 'id_cliente',
    sourceKey: 'id'
})

pedidos.belongsTo(clientes,{
    foreignKey: 'id_cliente',
    targetKey: "id"
})