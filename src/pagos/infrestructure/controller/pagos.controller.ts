import { Request, Response } from "express";
import { PagoApplication } from "../../application/useCases/user.aplication";
import { MysqlRepository } from "../dataAcess/mysql.repository";
import { Pagos } from "../../dominio/entities/pagos";
import { PagosRepository } from "../../application/service/rabbit.usecase";

const mysqlRepository = new MysqlRepository();
const pagoAppService = new PagoApplication(mysqlRepository);
const pagosRepository = new PagosRepository();

export class PagosController {


  static async createPago(req: Request, res: Response): Promise<void>  {
 
     try {
        const newPagos: Pagos = req.body;


        await pagoAppService.createPago(newPagos)
        await pagosRepository.sendpagos(newPagos);
        
        res.status(201).json({
            message: 'La venta fue creada exitosamente',
            venta: newPagos
        });
    } catch (error) {
        console.error('Hubo un error al crear la venta:', error);
        res.status(500).json({
            error: 'Hubo un error al crear la venta'
        });
    }
    } 
}
