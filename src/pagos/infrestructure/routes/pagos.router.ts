import express from 'express';
import { PagosController } from '../controller/pagos.controller';
export const router = express.Router();

router.post('/', PagosController.createPago);

export default router;