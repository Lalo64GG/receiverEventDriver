import { connectToRabbitMQ } from "../../../rabbitmq/rabbitmqtt.config";
import { Pagos } from "../../dominio/entities/pagos";
import { CrearPagoInterface } from "../../dominio/services/pagos.service";

export class PagosRepository implements CrearPagoInterface {
  async sendpagos(pago: Pagos): Promise<boolean> {
    try {
      const channel = await connectToRabbitMQ();
      await channel.sendToQueue("venta", Buffer.from(JSON.stringify({message: 'venta creada', pago})));
      console.log("Pago enviado a RabbitMQ:", pago);
      await channel.close();
      return true;
    } catch (error) {
      console.error("Error al enviar pago a RabbitMQ:", error);
      return false;
    }
  }
}
