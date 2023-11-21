"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicamentosController = void 0;
const database_1 = __importDefault(require("../database"));
class MedicamentosController {
    index(req, res) {
        database_1.default.query('DESCRIBE medicamentos');
        res.json('medicamentos');
    }
}
exports.medicamentosController = new MedicamentosController();
exports.default = exports.medicamentosController;
