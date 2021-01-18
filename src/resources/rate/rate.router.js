import { Router } from "express"
import { getRate } from "./rate.controllers"

const router = Router()

// /api/rates
router.route("/").get(getRate)

export default router
