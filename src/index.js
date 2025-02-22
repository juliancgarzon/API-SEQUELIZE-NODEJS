import app from "./app.js";
import {sequelize} from "./database/database.js";

import './models/clientes.js'
import './models/pedidos.js'

async function main () {
    try {
        await sequelize.sync({force: true})
        app.listen (3000)
        console.log("Server is listening on port 3000")
    } catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}

main();