import router from "../rate.router"

describe("rate router", () => {
  test("has get route", () => {
    const routes = [{ path: "/", method: "get" }]

    routes.forEach(route => {
      const match = router.stack.find(
        s => s.route.path === route.path && s.route.methods[route.method]
      )
      expect(match).toBeTruthy()
    })
  })
})
