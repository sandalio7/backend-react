import { Router } from "express";
import productoCtrl from "../controllers/producto.controllers";

const router = Router();

//crear rutas
router
  .route("/")
  .delete(productoCtrl.borrarProducto)
  .get(productoCtrl.listarProductos)
  .post(productoCtrl.crearProducto);

  router
  //el /:id es un parametro , :id representa la req del front con el parametro que nos pasaran que vendria a ser el codigo id
  .route("/:id")
  .get(productoCtrl.obtenerProducto)

export default router;
