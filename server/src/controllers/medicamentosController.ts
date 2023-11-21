import {Request, Response} from 'express';

import pool from '../database';
class MedicamentosController {
    
    public index (req: Request, res: Response) {
        pool.query('DESCRIBE medicamentos')
        res.json('medicamentos')
    }
}

export const medicamentosController = new MedicamentosController();
export default medicamentosController;