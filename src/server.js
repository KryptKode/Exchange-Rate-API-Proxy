import express from "express"
import morgan from "morgan"

import config from "./config"
import rateRouter from "./resources/rate/rate.router"

export const app = express()

app.disable("x-powered-by")

app.use(morgan("dev"))

app.use("/api/rates", rateRouter)

export const start = async () => {
  try {
    app.listen(config.port, () => {
      console.log(`API on http://localhost:${config.port}/api/rates`)
    })
  } catch (e) {
    console.error(e)
  }
}
