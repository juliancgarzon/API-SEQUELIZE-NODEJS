import express from "express";
import clientesRoutes from "./routes/clientes.routes.js";
import pedidosRoutes  from "./routes/pedidos.routes.js";

const app = express();

// middlewares
app.use(express.json());


app.use(clientesRoutes)
app.use(pedidosRoutes)


export default app;