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
        this.router.get('/', medicamentosController_1.medicamentosController.index);
    }
}
const medicamentosRoutes = new MedicamentosRoutes();
exports.default = medicamentosRoutes.router;
