import mysql, { Pool, MysqlError } from 'promise-mysql';
import keys from './keys';

let pool: Pool; // Inicializado con un valor indefinido

mysql.createPool(keys.database)
    .then((p: Pool) => {
        pool = p;
        return pool.getConnection();
    })
    .then((connection: mysql.PoolConnection) => {
        // Realiza tus operaciones aquí usando la conexión
        // Por ejemplo, ejecutar consultas, etc.

        // Luego, libera la conexión usando la función `release`
        connection.release();

        console.log('DB is connected');
    })
    .catch((error: MysqlError) => {
        console.error('Error connecting to the database:', error);
    });

export default pool;
