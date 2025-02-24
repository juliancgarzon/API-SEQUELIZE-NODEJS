import { Router} from "express";
import { createClientes, deleteClientes, getClientes, updateClientes, getclientebyid, getclientepedidos} from "../controllers/clientes.controller.js";

const router = Router();


router.get('/clientes', getClientes);
router.post('/clientes', createClientes);
router.put('/clientes/:id',updateClientes);
router.delete('/clientes/:id',deleteClientes);
router.get('/clientes/:id',getclientebyid);
router.get('/clientes/:id/pedidos',getclientepedidos);

export default router;