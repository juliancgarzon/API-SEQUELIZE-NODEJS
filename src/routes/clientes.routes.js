import { Router} from 'express';
const router = Router()


router.get('/clientes')
router.post('/clientes')
router.put('/clientes/:id')
router.delete('/clientes/:id')
router.get('/clientes/:id')




export default router