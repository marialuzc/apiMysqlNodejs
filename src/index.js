import express from "express";

import empleadosRoutes from "./routes/empleados.routes.js";

import indexRoutes from "./routes/index.routes.js";

const app = express(); // Ejecute express

// llamamos la funcion de express json antes de las rutas

app.use(express.json());

// traemos nuestras rutas

app.use(indexRoutes);
app.use(empleadosRoutes);

app.listen(3000); // escuche en el puerto 3000
console.log("Servidor corriendo en el puerto 3000");
