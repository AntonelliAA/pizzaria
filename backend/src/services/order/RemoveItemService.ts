import prismaClient from "../../prisma";

interface RemoveItem {
  item_id: string;
}

class RemoveItemService {
  async execute({ item_id }: RemoveItem) {
    const order = await prismaClient.item.delete({
      where: {
        id: item_id,
      },
    });

    return order;
  }
}

export { RemoveItemService };
