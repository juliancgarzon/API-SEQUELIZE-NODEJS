import { Router} from "express";
import {  createClientes, deleteClientes, getClientes, updateClientes, getclientebyid} from "../controllers/clientes.controller.js";

const router = Router();


router.get('/clientes', getClientes);
router.post('/clientes', createClientes);
router.put('/clientes/:id',updateClientes);
router.delete('/clientes/:id',deleteClientes);
router.get('/clientes/:id',getclientebyid);


export default router;