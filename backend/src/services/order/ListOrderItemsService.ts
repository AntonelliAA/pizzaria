import prismaClient from "../../prisma";

interface ListOrder{
  order_id: string;
}


class ListOrderItemsService {
  async execute({ order_id }: ListOrder) {

    if(!order_id){
      throw new Error("Pedido inválido!")
    }

    const orderItems = await prismaClient.item.findMany({
      where:{
        order_id: order_id,
      },
      include:{
        product: true,
        order: true,
      }
    });

    return orderItems;
  }
}

export { ListOrderItemsService };
