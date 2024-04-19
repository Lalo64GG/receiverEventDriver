"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlRepository = void 0;
const db_confing_1 = require("../../../database/db.confing");
class MysqlRepository {
    constructor() {
        this.createPago = (pagos) => __awaiter(this, void 0, void 0, function* () {
            const sql = 'INSERT INTO pagos(nombre, apellido, cantidad, producto, telefono) VALUES (?, ?, ?, ?, ?)';
            const params = [pagos.nombre, pagos.apellido, pagos.cantidad, pagos.producto, pagos.telefono];
            try {
                const result = yield (0, db_confing_1.query)(sql, params);
                return result;
            }
            catch (error) {
                console.log('Hubo un error al crear el pago em MySQL, ', error);
                throw new Error('Error al crear el pago en MySQL');
            }
        });
    }
}
exports.MysqlRepository = MysqlRepository;
