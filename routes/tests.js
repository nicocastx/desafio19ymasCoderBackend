import { Router } from "express";
import controller from '../controllers/tests.js'

const router = Router()

router.get("/productostest", controller.getTestProductos);

router.get("/info", controller.getInfo);

router.get("/randoms", controller.randoms);

export default router