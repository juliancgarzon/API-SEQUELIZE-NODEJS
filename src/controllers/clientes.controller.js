import {clientes} from "../models/clientes.js";

export const getClientes = async (req, res )=>{
    try {
        throw new Error('query failed')
        const clientesdata = await clientes.findAll()
        res.json(clientesdata);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
}
export const createClientes = async (req, res )=>{
    const {nombre, email, telefono, direccion} = req.body;
    try {
        const newclient = await clientes.create ({
            nombre,
            email,
            telefono,
            direccion
        });
        res.json(newclient)
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
};

