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
exports.PagosRepository = void 0;
const rabbitmqtt_config_1 = require("../../../rabbitmq/rabbitmqtt.config");
class PagosRepository {
    sendpagos(pago) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const channel = yield (0, rabbitmqtt_config_1.connectToRabbitMQ)();
                yield channel.sendToQueue("ventas", Buffer.from(JSON.stringify({ message: 'venta creada', pago })));
                console.log("Pago enviado a RabbitMQ:", pago);
                yield channel.close();
                return true;
            }
            catch (error) {
                console.error("Error al enviar pago a RabbitMQ:", error);
                return false;
            }
        });
    }
}
exports.PagosRepository = PagosRepository;
