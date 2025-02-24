import {clientes} from "../models/clientes.js";
import {pedidos} from "../models/pedidos.js";

export const getClientes = async (req, res )=>{
    try {
        
        const clientesdata = await clientes.findAll()
        res.json(clientesdata);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
};

export async function getclientebyid(req, res) {
    const { id } = req.params;
    try {
        const cliente = await clientes.findOne({
            where: { id },
        });

        if (!cliente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }

        res.json(cliente);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


export const createClientes = async (req, res) => {
        const { nombre, email, telefono, direccion } = req.body;
        try {
            const newclient = await clientes.create({
                nombre,
                email,
                telefono,
                direccion
            });
    
            return res.status(201).json({
                message: "Cliente creado exitosamente",
                cliente: newclient
            });
    
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };
    

export const updateClientes = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, email, telefono, direccion } = req.body;

        const cliente = await clientes.findByPk(id);

        if (!cliente) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }

        cliente.nombre = nombre;
        cliente.email = email;
        cliente.telefono = telefono;
        cliente.direccion = direccion;

        await cliente.save();

        return res.json({ message: `USER ${id} updated successfully`, cliente });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};


export const deleteClientes = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await clientes.destroy({
            where: { id },
        });

        if (!deleted) {
            return res.status(404).json({ message: "Cliente no encontrado" });
        }

        return res.json({ message: `USER ${id} deleted successfully` });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export async function getclientepedidos(req, res) {
    const { id } = req.params;
    try {
        const listaPedidos = await pedidos.findAll({ 
            where: { id_cliente: id },
        });
        res.json(listaPedidos);
    } catch (e) {
        return res.status(500).json({ message: e.message });
    }
}

