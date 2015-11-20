describe("misc", function(){
	aabb = require("./../../dist/node.js")
	describe("create", function(){
		var input, result
		beforeEach(function(){
			input = [4, -12]
			result = aabb.create(input)
		})
		it("does not modify the input", function(){
			expect(input).toEqual([4, -12])
		})
		it("creates an axis-aligned-bounding-box containing the input", function(){
			expect(result).toEqual({min: [4, -12], max: [4, -12]})
		})
		it("makes distinct arrays for the min and max of the axis-aligned-bounding-box", function(){
			expect(result.min).not.toBe(input)
			expect(result.max).not.toBe(input)
			expect(result.min).not.toBe(result.max)
		})
	})
})
