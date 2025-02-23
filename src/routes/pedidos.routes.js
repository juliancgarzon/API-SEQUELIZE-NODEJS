import { Router } from "express";
import {  createPedidos, deletePedidos, getPedidos, updatePedidos, getPedidosbyid} from "../controllers/pedidos.controller.js";
const router = Router();

router.get('/pedidos', getPedidos);
router.post('/pedidos', createPedidos);
router.put('/pedidos/:id_pedido',updatePedidos);
router.delete('/pedidos/:id_pedido',deletePedidos);
router.get('/pedidos/:id_pedido',getPedidosbyid);


export default router;