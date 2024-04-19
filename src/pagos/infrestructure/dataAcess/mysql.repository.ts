import { query } from "../../../database/db.confing";
import { Pagos } from "../../dominio/entities/pagos";
import { PagoReposotiry } from "../../dominio/repository/pagos.repository";

export class MysqlRepository implements PagoReposotiry {

    createPago = async (pagos: Pagos): Promise<any> => {
        const sql = 'INSERT INTO pagos(nombre, apellido, cantidad, producto, telefono) VALUES (?, ?, ?, ?, ?)';
        const params = [pagos.nombre, pagos.apellido, pagos.cantidad, pagos.producto, pagos.telefono];

        try {
            const result = await query(sql, params);
            return result;
        } catch ( error ) {
            console.log('Hubo un error al crear el pago em MySQL, ', error);
            throw new Error('Error al crear el pago en MySQL');
        }
    }
}