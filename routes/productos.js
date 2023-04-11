import { Router } from "express";
import controller from '../controllers/productos.js'
import auth from './middlewares/isAuth.js'

const router = Router()

//router de prueba
router.get('/', controller.listarProductos)
router.put('/:id', controller.modificarProducto)
router.delete('/:id', controller.eliminarProducto)
router.post('/', controller.agregarProducto)

//router.get('/', auth.isAuth, controller.renderPrincipal)

export default router