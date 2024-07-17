import { Sequelize } from "sequelize";
import modeleContact from "./contact.model.js";

const BDD_SQL_HOST = 'localhost';
const BDD_SQL_NAME = 'contact';
const BDD_SQL_USER = 'root';
const BDD_SQL_PASSWORD = '';
const BDD_SQL_DIALECT = 'mysql';

const connection = new Sequelize(
    BDD_SQL_NAME,
    BDD_SQL_USER,
    BDD_SQL_PASSWORD,
    {
        host: BDD_SQL_HOST,
        dialect: BDD_SQL_DIALECT
    }
);

try {
    await connection.authenticate();
    console.log("Connexion à la BDD OK");
} catch (error) {
    console.error("Problème lors de la connexion à la BDD", error);
}

modeleContact(connection, Sequelize);

const {
    Contact
} = connection.models;

await connection.sync( {alter: true} );
console.log("La synchronisation de la base de donnée pour les contacts est OK !");

export {
    Contact
};