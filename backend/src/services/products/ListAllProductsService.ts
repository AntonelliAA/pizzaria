import prismaClient from "../../prisma";

class ListAllProductsService {
  async execute() {
    const products = await prismaClient.product.findMany({
      select: {
        id: true,
        name: true,
        category_id: true
      },
    });

    return products;
  }
}

export { ListAllProductsService };
