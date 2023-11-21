import { Router } from "express";

import {medicamentosController} from '../controllers/medicamentosController';

class MedicamentosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', medicamentosController.list);
        this.router.get('/:id', medicamentosController.list_unique);
        this.router.post('/',medicamentosController.create)
        this.router.put('/:id', medicamentosController.update)
        this.router.delete('/:id', medicamentosController.delete)
    }
}

const medicamentosRoutes = new MedicamentosRoutes();
export default medicamentosRoutes.router;