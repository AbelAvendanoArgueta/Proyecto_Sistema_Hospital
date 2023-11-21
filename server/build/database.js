"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
let pool; // Inicializado con un valor indefinido
promise_mysql_1.default.createPool(keys_1.default.database)
    .then((p) => {
    pool = p;
    return pool.getConnection();
})
    .then((connection) => {
    // Realiza tus operaciones aquí usando la conexión
    // Por ejemplo, ejecutar consultas, etc.
    // Luego, libera la conexión usando la función `release`
    connection.release();
    console.log('DB is connected');
})
    .catch((error) => {
    console.error('Error connecting to the database:', error);
});
exports.default = pool;
