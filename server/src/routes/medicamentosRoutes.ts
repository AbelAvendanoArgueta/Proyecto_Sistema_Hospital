import { Router } from "express";

class MedicamentosRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config(): void {
        this.router.get('/', (req, res) => res.send("Hello desde medicamentosRoutes.ts"));
    }
}

const medicamentosRoutes = new MedicamentosRoutes();
export default medicamentosRoutes.router;