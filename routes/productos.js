import { Router } from "express";
import controller from '../controllers/productos.js'
import auth from './middlewares/isAuth.js'

const router = Router()

router.get('/', auth.isAuth, controller.renderPrincipal)

export default router