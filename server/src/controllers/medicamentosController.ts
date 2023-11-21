import {Request, Response, request} from 'express';

import pool from '../database';
class MedicamentosController {
    
    public list (req: Request, res: Response) {
        res.json({text: 'listing drugs'})
    }

    public list_unique (req: Request, res: Response) {
        res.json({text: 'listing unique drug' + req.params.id})
    }

    public async create (req: Request, res: Response) {
        await pool.promise().query('INSERT INTO games SET ?', [req.body]);
        res.json({ message: 'juego guardado' });
    } 
    
    public update (req: Request, res: Response){
        res.json({text: 'updating drug' + req.params.id })
    }

    public delete (req: Request, res: Response){
        res.json({text: 'deleting drug' + req.params.id})
    }

}

export const medicamentosController = new MedicamentosController();
export default medicamentosController;