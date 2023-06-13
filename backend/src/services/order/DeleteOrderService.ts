import prismaClient from "../../prisma";

interface DeleteOrder {
  order_id: string;
}

class DeleteOrderService {
  async execute({ order_id }: DeleteOrder) {
    const deletedOrder = await prismaClient.order.delete({
      where: {
        id: order_id,
      },
    });

    return deletedOrder;
  }
}

export { DeleteOrderService };
