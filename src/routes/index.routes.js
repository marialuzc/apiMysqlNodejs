import { Router } from "express"; // modulo de express
import {  listar } from "../controllers/index.controller.js";


const router = Router(); // variable para usar las rutas

// llamando otro endpoint 
router.get('/empleados', listar);

export default router;