import { Router } from "express"
import controllers from "./rate.controllers"

const router = Router()

// /api/rates
router.route("/").get(controllers.getRate)

export default router
