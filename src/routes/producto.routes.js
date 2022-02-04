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
  .route("/prueba")
  .get(productoCtrl.devolverID)

export default router;
