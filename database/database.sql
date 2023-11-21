-- database.sql

-- Crear la base de datos
CREATE DATABASE IF NOT EXISTS ng_hospital_db;

-- Usar la base de datos recién creada
USE ng_hospital_db;

-- Crear la tabla 'medicamentos'
CREATE TABLE IF NOT EXISTS medicamentos (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(180),
    description VARCHAR(255),
    image VARCHAR(200),
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Crear el usuario 'admin_Hospital'
CREATE USER 'admin_Hospital'@'localhost' IDENTIFIED WITH mysql_native_password BY 'admin_Hospital.@7';

-- Otorgar todos los privilegios sobre todas las bases de datos al usuario 'admin_Hospital'
GRANT ALL PRIVILEGES ON *.* TO 'admin_Hospital'@'localhost';
FLUSH PRIVILEGES;

-- Mostrar la descripción de la tabla 'medicamentos'
DESCRIBE medicamentos;
