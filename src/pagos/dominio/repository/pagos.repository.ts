import { Pagos } from "../entities/pagos";

export interface PagoReposotiry {
    createPago(pagos: Pagos): Promise<any>;
}