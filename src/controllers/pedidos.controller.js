import {pedidos} from "../models/pedidos.js";

export const getPedidos = async (req, res )=>{
    try {
        const pedidosdata = await pedidos.findAll()
        res.json(pedidosdata);
    } catch (error) {
        return res.status(500).json({message: error.message})
    }
    
};

export async function getPedidosbyid(req, res) {
    const { id_pedido } = req.params;
    try {
        const pedido = await pedidos.findOne({
            where: { id_pedido },
        });

        if (!pedido) {
            return res.status(404).json({ message: "Pedido no encontrado" });
        }

        res.json(pedido);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createPedidos = async (req, res) => {
        const { fecha, total, id_cliente} = req.body;
        try {
            const newpedido= await pedidos.create({
                fecha,
                total,
                id_cliente
            });
    
            return res.status(201).json({
                message: "Pedido creado exitosamente",
                pedido: newpedido
            });
    
        } catch (error) {
            return res.status(500).json({ message: error.message });
        }
    };

export const updatePedidos = async (req, res) => {
    try {
        const { id_pedido } = req.params;
        const { fecha, total, id_cliente, } = req.body;

        const pedido = await pedidos.findByPk(id_pedido);

        if (!pedido) {
            return res.status(404).json({ message: "Pedido no encontrado" });
        }

        pedido.fecha = fecha;
        pedido.total = total;
        pedido.id_cliente = id_cliente;
        

        await pedido.save();

        return res.json({ message: `Pedido ${id_pedido} updated successfully`, pedido });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};    

export const deletePedidos = async (req, res) => {
    try {
        const { id_pedido } = req.params;
        const deleted = await pedidos.destroy({
            where: { id_pedido },
        });

        if (!deleted) {
            return res.status(404).json({ message: "Pedido no encontrado" });
        }

        return res.json({ message: `Pedido ${id_pedido} deleted successfully` });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};
