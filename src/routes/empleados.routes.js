import { Router } from "express"; // modulo de express
import { listarEmpleados, listarEmpleado, crearEmpleado, actualizarEmpleado, borrarEmpleado } from "../controllers/empleados.controller.js";

const router = Router(); // variable para usar las rutas

// GET all Employees
router.get("/empleados", listarEmpleados);

// Agregamos un endpoint para un solo empleado

router.get("/empleados/:id", listarEmpleado);

// INSERT An Employee
router.post("/empleados", crearEmpleado);

// PUT An Employee
router.put("/empleados/:id", actualizarEmpleado);

// DELETE An Employee
router.delete("/empleados/:id", borrarEmpleado );

export default router; // se exporta para trabajar en los otros archivos