import { Router } from "express";
import controller from '../controllers/register.js'

/**
 * REGISTER DEBE TENER:
 * (manejo de passport, middleware de auth)
register get, post
login get, post
loginerror y registererror y logout
 */

const router = Router()

router.get('/register', controller.renderRegister)

router.post('/register', controller.postRegister)

router.get('/login', controller.renderLogin)

router.post('/login', controller.postLogin)

router.get('/loginerror', controller.renderLoginError)

router.get('/registererror', controller.renderRegisterError)

router.get('/logout', controller.renderLogout)

export default router