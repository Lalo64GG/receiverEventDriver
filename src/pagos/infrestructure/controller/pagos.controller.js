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
exports.PagosController = void 0;
const user_aplication_1 = require("../../application/useCases/user.aplication");
const mysql_repository_1 = require("../dataAcess/mysql.repository");
const rabbit_usecase_1 = require("../../application/service/rabbit.usecase");
const mysqlRepository = new mysql_repository_1.MysqlRepository();
const pagoAppService = new user_aplication_1.PagoApplication(mysqlRepository);
const pagosRepository = new rabbit_usecase_1.PagosRepository();
class PagosController {
    static createPago(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const newPagos = req.body;
                yield pagoAppService.createPago(newPagos);
                yield pagosRepository.sendpagos(newPagos);
                res.status(201).json({
                    message: 'La venta fue creada exitosamente',
                    venta: newPagos
                });
            }
            catch (error) {
                console.error('Hubo un error al crear la venta:', error);
                res.status(500).json({
                    error: 'Hubo un error al crear la venta'
                });
            }
        });
    }
}
exports.PagosController = PagosController;
