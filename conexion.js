import pg from 'pg-promise';
const conxion = pg({})
const conexionString = process.env.DATABASE_URL
const db = conxion(conexionString);

// metodos CRUD
export async function listar() {
    try {
        const datos = db.query("SELECT * FROM usuarios");
        return datos;
    } catch (error) {
        console.log("Error al consular los datos: ",error);
        return error;
    }
}