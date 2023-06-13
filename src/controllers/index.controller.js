import {pool} from '../db.js'; // importamos la conexion

export const listar = async(req, res) => {
    const [resultado] = await pool.query('SELECT * FROM empleados')
    res.json(resultado)
}


