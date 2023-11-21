"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class MedicamentosRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send("Hello desde medicamentosRoutes.ts"));
    }
}
const medicamentosRoutes = new MedicamentosRoutes();
exports.default = medicamentosRoutes.router;
