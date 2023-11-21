import {Request, Response, text} from 'express';

class IndexController {
    
    public index (req: Request, res: Response) {
        res.json({text: 'API Is /api/medicamentos'})
    }
}

export const indexController = new IndexController();