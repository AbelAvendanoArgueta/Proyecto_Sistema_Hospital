"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medicamentosController_1 = require("../controllers/medicamentosController");
class MedicamentosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', medicamentosController_1.medicamentosController.list);
        this.router.get('/:id', medicamentosController_1.medicamentosController.list_unique);
        this.router.post('/', medicamentosController_1.medicamentosController.create);
        this.router.put('/:id', medicamentosController_1.medicamentosController.update);
        this.router.delete('/:id', medicamentosController_1.medicamentosController.delete);
    }
}
const medicamentosRoutes = new MedicamentosRoutes();
exports.default = medicamentosRoutes.router;
