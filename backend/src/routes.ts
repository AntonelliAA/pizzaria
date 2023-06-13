import { Router, Request, Response } from "express";
import multer from "multer";


//user
import { CreateUserController } from "./controllers/user/CreateUserController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { DetailUserController } from "./controllers/user/DetailUserController";

//category
import { CreateCategoryController } from "./controllers/category/CreateCategoryController";
import { ListCategoryController } from "./controllers/category/ListCategoryController";


//products
import { ListAllProductsController } from "./controllers/products/ListAllProductsController";
import { CreateProductsController } from "./controllers/products/CreateProductsController";
import { ListByCategoryController } from "./controllers/products/ListByCategoryController";

//orders
import { DeleteOrderController } from "./controllers/order/DeleteOrderController";
import { CreateOrderController } from "./controllers/order/CreateOrderController";
import { AddItemController } from "./controllers/order/AddItemController";
import { RemoveItemController } from "./controllers/order/RemoveItemController";
import { SendOrderController } from "./controllers/order/SendOrderController";
import { ListOrdersController } from "./controllers/order/ListOrdersController";


//Middlaware

import { isAuthenticated } from "./middlewares/isAuthenticated";

//Multer for randomImgNames
import uploadConfig from './config/multer'
import { ListOrderItemsController } from "./controllers/order/ListOrderItemsController";
import { FinishOrderController } from "./controllers/order/FinishOrderController";





const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

//--Rotas USER--
router.post("/users", new CreateUserController().handle);

router.post("/session", new AuthUserController().handle);

router.get("/me", isAuthenticated, new DetailUserController().handle);

//--Rotas Category--

router.post(
  "/category",
  isAuthenticated,
  new CreateCategoryController().handle
);

router.get("/category", isAuthenticated, new ListCategoryController().handle);

//--Rotas Products--

router.get("/products", isAuthenticated, new ListAllProductsController().handle)
router.post("/products", isAuthenticated, upload.single('file'), new CreateProductsController().handle);
router.get("/category/products", isAuthenticated, new ListByCategoryController().handle)

//--Rotas Order--

router.get("/order", isAuthenticated, new ListOrdersController().handle)

router.post("/order", isAuthenticated, new CreateOrderController().handle)

router.delete("/order", isAuthenticated, new DeleteOrderController().handle)  

router.post("/order/add", isAuthenticated, new AddItemController().handle)

router.delete("/order/remove", isAuthenticated, new RemoveItemController().handle)

router.put("/order/send", isAuthenticated, new SendOrderController().handle)

router.get("/order/items", isAuthenticated, new ListOrderItemsController().handle)

router.put("/order/finish", isAuthenticated, new FinishOrderController().handle)


export { router };
