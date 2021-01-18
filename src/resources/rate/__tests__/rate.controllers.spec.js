import controllers from "../rate.controllers"
import { isFunction } from "lodash"

describe("rate controllers", () => {
  test("has getRate controller", () => {
    expect(isFunction(controllers["getRate"])).toBe(true)
  })
})
