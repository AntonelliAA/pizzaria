import { Request, Response } from "express";
import { ListOrderItemsService } from "../../services/order/ListOrderItemsService";

class ListOrderItemsController {
  async handle(req: Request, res: Response) {

    const order_id = req.query.order_id as string;

    const listOrderItemsService = new ListOrderItemsService();

    const orderItems = await listOrderItemsService.execute({order_id})

    return res.json(orderItems)
  }
}

export { ListOrderItemsController };
