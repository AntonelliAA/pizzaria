import prismaClient from "../../prisma";

interface ItemService{
    order_id: string;
    product_id: string;
    amount: number;
    
    
}



class AddItemService{
    async execute({order_id,product_id,amount}: ItemService){

        if(!order_id || !product_id || !amount){
            throw new Error("Um ou mais campos faltando")
        }

        const order = await prismaClient.item.create({
            data:{
                order_id: order_id,
                product_id: product_id,
                amount: amount
            }
        })


        return order
    }
}

export {AddItemService}