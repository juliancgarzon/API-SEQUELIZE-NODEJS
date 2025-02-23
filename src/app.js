import express from "express";
import clientesRoutes from "./routes/clientes.routes.js";

const app = express();

// middlewares
app.use(express.json());


app.use(clientesRoutes)


export default app;