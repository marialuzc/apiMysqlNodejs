import { pool } from "../db.js"; // importamos la conexion

export const listarEmpleados = async (req, res) => {
  const [empleados] = await pool.query("SELECT * FROM empleados");
  res.json(empleados);
};

export const listarEmpleado = async (req, res) => {
  //console.log(req.params);
  const [empleado] = await pool.query(
    "SELECT * FROM empleados WHERE id = ?",
    req.params.id
  );
  res.json(empleado[0]); // indicar que es el elemento 0
  res.send("obteniendo empleado");
};

//export const crearEmpleado = (req, res) => res.send("creando empleado");

export const crearEmpleado = async (req, res) => {
  //console.log(req.body);
  //res.send('Creando Empleado')
  const { nombre, edad, pais, cargo, salario } = req.body;
  const [filas] = await pool.query(
    "INSERT INTO empleados(nombre, edad, pais, cargo,salario) VALUES (?, ?, ?, ?, ?)",
    [nombre, edad, pais, cargo, salario]
  );
  res.send({ filas });
};

export const actualizarEmpleado = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, edad, pais, cargo, salario } = req.body;
    const [result] = await pool.query(
      "UPDATE empleados SET nombre = ?, edad =?, pais=?, cargo=?, salario=? WHERE id = ?",
      [nombre, edad, pais, cargo, salario, id]
    );
    if (result.affectedRows === 0)
      return res.status(404).json({ message: "Empleado no encontrado" });
    const [empleado] = await pool.query(
      "SELECT * FROM empleados WHERE id = ?",
      [id]
    );
    res.json(empleado[0]);
    res.send("Actualizando empleado");
  } catch (error) {
    return res.status(500).json({ message: "Error en el servidor." });
  }
};

export const borrarEmpleado = async (req, res) => {
  //console.log(req.params);
  const [empleado] = await pool.query(
    "DELETE FROM empleados WHERE id = ?",
    req.params.id
  );
  res.send("Borrando empleado");
};
