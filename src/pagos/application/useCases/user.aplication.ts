import  { Pagos } from '../../dominio/entities/pagos';
import { PagoReposotiry } from '../../dominio/repository/pagos.repository';

export class PagoApplication {
   constructor(private pagoRepository : PagoReposotiry){}

   async createPago(pagos: Pagos): Promise<any>{
    return await this.pagoRepository.createPago(pagos);
   }
}