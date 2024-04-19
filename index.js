"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const pagos_router_1 = __importDefault(require("./src/pagos/infrestructure/routes/pagos.router"));
const app = (0, express_1.default)();
const PORT = '3001';
let corOptions = {
    origin: '*'
};
app.use((0, cors_1.default)(corOptions));
app.use(express_1.default.json());
app.use('/pagos', pagos_router_1.default);
app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto:', PORT);
});
