import {clientes} from "../models/clientes.js";

export const getClientes = async (req, res )=>{
    const clientesdata = await clientes.findAll()
    res.json(clientesdata)
}
export const createClientes = async (req, res )=>{
    const {nombre, email, telefono, direccion} = req.body
    const newclient = await clientes.create ({
        nombre,
        email,
        telefono,
        direccion
    })


    res.json(newclient)
}

