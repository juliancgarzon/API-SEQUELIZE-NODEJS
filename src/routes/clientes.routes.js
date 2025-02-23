import { Router} from "express";
import {  createClientes, getClientes} from "../controllers/clientes.controller.js";

const router = Router();


router.get('/clientes', getClientes);
router.post('/clientes', createClientes);
router.put('/clientes/:id');
router.delete('/clientes/:id');
router.get('/clientes/:id');


export default router;