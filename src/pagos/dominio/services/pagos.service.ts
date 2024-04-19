import { Pagos } from "../entities/pagos";

export interface CrearPagoInterface {
    sendpagos(pagos: Pagos): Promise<any>;
}