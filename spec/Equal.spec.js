const Equal = require("../src/Equal.js")

describe("Equal", () => {
  describe("#checkEqual()", () => {
    it("returns true when assertion is true", () => {
      const equalAssertion = new Equal(1, 1)

      expect(equalAssertion.checkValues()).toEqual(true)
    })

    it("returns false when assertion is false", () => {
      const equalAssertion = new Equal(1, 2)

      expect(equalAssertion.checkValues()).toEqual(false)
    })
  })
})
