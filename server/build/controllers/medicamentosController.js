"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.medicamentosController = void 0;
const database_1 = __importDefault(require("../database"));
class MedicamentosController {
    list(req, res) {
        res.json({ text: 'listing drugs' });
    }
    list_unique(req, res) {
        res.json({ text: 'listing unique drug' + req.params.id });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.promise().query('INSERT INTO games SET ?', [req.body]);
            res.json({ message: 'juego guardado' });
        });
    }
    update(req, res) {
        res.json({ text: 'updating drug' + req.params.id });
    }
    delete(req, res) {
        res.json({ text: 'deleting drug' + req.params.id });
    }
}
exports.medicamentosController = new MedicamentosController();
exports.default = exports.medicamentosController;
