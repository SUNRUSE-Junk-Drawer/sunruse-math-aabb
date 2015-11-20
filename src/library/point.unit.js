describe("point", function(){
	aabb = require("./../../dist/node.js")
	describe("expand", function(){
		describe("when the point is a scalar", function(){
			describe("when the output is not the input", function(){
				describe("when the point is already contained", function(){
					var input, output
					beforeEach(function(){
						input = {min: [3, 5], max: [5, 12]}
						output = {min: [16, 2], max: [4, 18]}
						aabb.expand(input, 5, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual({min: [3, 5], max: [5, 12]})
					})
					it("copies the input to the output", function(){
						expect(output).toEqual({min: [3, 5], max: [5, 12]})
					})
				})
				describe("when the point is over a positive bound", function(){
					var input, output
					beforeEach(function(){
						input = {min: [3, 5], max: [5, 12]}
						output = {min: [16, 2], max: [4, 18]}
						aabb.expand(input, 7, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual({min: [3, 5], max: [5, 12]})
					})
					it("copies the input to the output, expanded", function(){
						expect(output).toEqual({min: [3, 5], max: [7, 12]})
					})
				})
				describe("when the point is over a negative bound", function(){
					var input, output
					beforeEach(function(){
						input = {min: [3, 5], max: [5, 12]}
						output = {min: [16, 2], max: [4, 18]}
						aabb.expand(input, 4, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual({min: [3, 5], max: [5, 12]})
					})
					it("copies the input to the output, expanded", function(){
						expect(output).toEqual({min: [3, 4], max: [5, 12]})
					})
				})
				describe("when the point is over multiple bounds", function(){
					var input, output
					beforeEach(function(){
						input = {min: [15, 5], max: [20, 12]}
						output = {min: [16, 2], max: [4, 18]}
						aabb.expand(input, 14, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual({min: [15, 5], max: [20, 12]})
					})
					it("copies the input to the output", function(){
						expect(output).toEqual({min: [14, 5], max: [20, 14]})
					})
				})
			})
			describe("when the output is the input", function(){
				describe("when the point is already contained", function(){
					var output
					beforeEach(function(){
						output = {min: [3, 5], max: [5, 12]}
						aabb.expand(output, 5, output)
					})
					it("copies the input to the output", function(){
						expect(output).toEqual({min: [3, 5], max: [5, 12]})
					})
				})
				describe("when the point is over a positive bound", function(){
					var output
					beforeEach(function(){
						output = {min: [3, 5], max: [5, 12]}
						aabb.expand(output, 7, output)
					})
					it("copies the input to the output, expanded", function(){
						expect(output).toEqual({min: [3, 5], max: [7, 12]})
					})
				})
				describe("when the point is over a negative bound", function(){
					var output
					beforeEach(function(){
						output = {min: [3, 5], max: [5, 12]}
						aabb.expand(output, 4, output)
					})
					it("copies the input to the output, expanded", function(){
						expect(output).toEqual({min: [3, 4], max: [5, 12]})
					})
				})
				describe("when the point is over multiple bounds", function(){
					var output
					beforeEach(function(){
						output = {min: [15, 5], max: [20, 12]}
						aabb.expand(output, 14, output)
					})
					it("copies the input to the output", function(){
						expect(output).toEqual({min: [14, 5], max: [20, 14]})
					})
				})
			})
		})
		describe("when the point is a vector", function(){
			describe("when the output is not the input", function(){
				describe("when the point is already contained", function(){
					var input, point, output
					beforeEach(function(){
						input = {min: [3, 5], max: [5, 12]}
						point = [5, 9]
						output = {min: [16, 2], max: [4, 18]}
						aabb.expand(input, point, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual({min: [3, 5], max: [5, 12]})
					})
					it("does not modify the point", function(){
						expect(point).toEqual([5, 9])
					})
					it("copies the input to the output", function(){
						expect(output).toEqual({min: [3, 5], max: [5, 12]})
					})
				})
				describe("when the point is over a positive bound", function(){
					var input, point, output
					beforeEach(function(){
						input = {min: [3, 5], max: [5, 12]}
						point = [11, 9]
						output = {min: [16, 2], max: [4, 18]}
						aabb.expand(input, point, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual({min: [3, 5], max: [5, 12]})
					})
					it("does not modify the point", function(){
						expect(point).toEqual([11, 9])
					})
					it("copies the input to the output, expanded", function(){
						expect(output).toEqual({min: [3, 5], max: [11, 12]})
					})
				})
				describe("when the point is over a negative bound", function(){
					var input, point, output
					beforeEach(function(){
						input = {min: [3, 5], max: [5, 12]}
						point = [5, 2]
						output = {min: [16, 2], max: [4, 18]}
						aabb.expand(input, point, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual({min: [3, 5], max: [5, 12]})
					})
					it("does not modify the point", function(){
						expect(point).toEqual([5, 2])
					})
					it("copies the input to the output, expanded", function(){
						expect(output).toEqual({min: [3, 2], max: [5, 12]})
					})
				})
				describe("when the point is over multiple bounds", function(){
					var input, point, output
					beforeEach(function(){
						input = {min: [3, 5], max: [5, 12]}
						point = [1, 15]
						output = {min: [16, 2], max: [4, 18]}
						aabb.expand(input, point, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual({min: [3, 5], max: [5, 12]})
					})
					it("does not modify the point", function(){
						expect(point).toEqual([1, 15])
					})
					it("copies the input to the output", function(){
						expect(output).toEqual({min: [1, 5], max: [5, 15]})
					})
				})
			})
			describe("when the output is the input", function(){
				describe("when the point is already contained", function(){
					var point, output
					beforeEach(function(){
						output = {min: [3, 5], max: [5, 12]}
						point = [5, 9]
						aabb.expand(output, point, output)
					})
					it("does not modify the input", function(){
						expect(output).toEqual({min: [3, 5], max: [5, 12]})
					})
					it("does not modify the point", function(){
						expect(point).toEqual([5, 9])
					})
				})
				describe("when the point is over a positive bound", function(){
					var point, output
					beforeEach(function(){
						point = [11, 9]
						output = {min: [3, 5], max: [5, 12]}
						aabb.expand(output, point, output)
					})
					it("does not modify the point", function(){
						expect(point).toEqual([11, 9])
					})
					it("expands the output", function(){
						expect(output).toEqual({min: [3, 5], max: [11, 12]})
					})
				})
				describe("when the point is over a negative bound", function(){
					var point, output
					beforeEach(function(){
						point = [5, 2]
						output = {min: [3, 5], max: [5, 12]}
						aabb.expand(output, point, output)
					})
					it("does not modify the point", function(){
						expect(point).toEqual([5, 2])
					})
					it("expands the output", function(){
						expect(output).toEqual({min: [3, 2], max: [5, 12]})
					})
				})
				describe("when the point is over multiple bounds", function(){
					var point, output
					beforeEach(function(){
						point = [1, 15]
						output = {min: [3, 5], max: [5, 12]}
						aabb.expand(output, point, output)
					})
					it("does not modify the point", function(){
						expect(point).toEqual([1, 15])
					})
					it("copies the input to the output", function(){
						expect(output).toEqual({min: [1, 5], max: [5, 15]})
					})
				})
			})
		})
	})
	describe("contains", function(){
		describe("when the point is a scalar", function(){
			describe("when the point is within the bounds", function(){
				var bounds, result
				beforeEach(function(){
					bounds = {min:[1, 3], max:[7, 6]}
					result = aabb.contains(bounds, 4)
				})
				it("does not modify the bounds", function(){
					expect(bounds).toEqual({min:[1, 3], max:[7, 6]})
				})
				it("returns truthy", function(){
					expect(result).toBeTruthy()
				})
			})
			describe("when the point is touching a positive bound", function(){
				var bounds, result
				beforeEach(function(){
					bounds = {min:[1, 3], max:[4, 6]}
					result = aabb.contains(bounds, 4)
				})
				it("does not modify the bounds", function(){
					expect(bounds).toEqual({min:[1, 3], max:[4, 6]})
				})
				it("returns truthy", function(){
					expect(result).toBeTruthy()
				})
			})
			describe("when the point is touching a negative bound", function(){
				var bounds, result
				beforeEach(function(){
					bounds = {min:[1, 4], max:[7, 6]}
					result = aabb.contains(bounds, 4)
				})
				it("does not modify the bounds", function(){
					expect(bounds).toEqual({min:[1, 4], max:[7, 6]})
				})
				it("returns truthy", function(){
					expect(result).toBeTruthy()
				})
			})
			describe("when the point is over a positive bound", function(){
				var bounds, result
				beforeEach(function(){
					bounds = {min:[1, 3], max:[7, 3]}
					result = aabb.contains(bounds, 4)
				})
				it("does not modify the bounds", function(){
					expect(bounds).toEqual({min:[1, 3], max:[7, 3]})
				})
				it("returns falsy", function(){
					expect(result).toBeFalsy()
				})
			})
			describe("when the point is over a negative bound", function(){
				var bounds, result
				beforeEach(function(){
					bounds = {min:[1, 5], max:[7, 6]}
					result = aabb.contains(bounds, 4)
				})
				it("does not modify the bounds", function(){
					expect(bounds).toEqual({min:[1, 5], max:[7, 6]})
				})
				it("returns falsy", function(){
					expect(result).toBeFalsy()
				})
			})
		})
		describe("when the point is a vector", function(){
			describe("when the point is within the bounds", function(){
				var bounds, point, result
				beforeEach(function(){
					bounds = {min:[1, 23], max:[7, 26]}
					point = [5, 24]
					result = aabb.contains(bounds, point)
				})
				it("does not modify the bounds", function(){
					expect(bounds).toEqual({min:[1, 23], max:[7, 26]})
				})
				it("does not modify the point", function(){
					expect(point).toEqual([5, 24])
				})
				it("returns truthy", function(){
					expect(result).toBeTruthy()
				})
			})
			describe("when the point is touching a positive bound", function(){
				var bounds, point, result
				beforeEach(function(){
					bounds = {min:[1, 23], max:[7, 26]}
					point = [5, 26]
					result = aabb.contains(bounds, point)
				})
				it("does not modify the bounds", function(){
					expect(bounds).toEqual({min:[1, 23], max:[7, 26]})
				})
				it("does not modify the point", function(){
					expect(point).toEqual([5, 26])
				})
				it("returns truthy", function(){
					expect(result).toBeTruthy()
				})
			})
			describe("when the point is touching a negative bound", function(){
				var bounds, point, result
				beforeEach(function(){
					bounds = {min:[1, 23], max:[7, 26]}
					point = [5, 23]
					result = aabb.contains(bounds, point)
				})
				it("does not modify the bounds", function(){
					expect(bounds).toEqual({min:[1, 23], max:[7, 26]})
				})
				it("does not modify the point", function(){
					expect(point).toEqual([5, 23])
				})
				it("returns truthy", function(){
					expect(result).toBeTruthy()
				})
			})
			describe("when the point is over a positive bound", function(){
				var bounds, point, result
				beforeEach(function(){
					bounds = {min:[1, 23], max:[7, 26]}
					point = [8, 24]
					result = aabb.contains(bounds, point)
				})
				it("does not modify the bounds", function(){
					expect(bounds).toEqual({min:[1, 23], max:[7, 26]})
				})
				it("does not modify the point", function(){
					expect(point).toEqual([8, 24])
				})
				it("returns falsy", function(){
					expect(result).toBeFalsy()
				})
			})
			describe("when the point is over a negative bound", function(){
				var bounds, point, result
				beforeEach(function(){
					bounds = {min:[1, 23], max:[7, 26]}
					point = [0, 24]
					result = aabb.contains(bounds, point)
				})
				it("does not modify the bounds", function(){
					expect(bounds).toEqual({min:[1, 23], max:[7, 26]})
				})
				it("does not modify the point", function(){
					expect(point).toEqual([0, 24])
				})
				it("returns falsy", function(){
					expect(result).toBeFalsy()
				})
			})
		})
	})
	describe("constrain", function(){
		describe("when the input point is a scalar", function(){
			describe("when the output is empty", function(){
				describe("when the point is within the bounds", function(){
					var bounds, output
					beforeEach(function(){
						bounds = {min: [6, 8], max: [10, 14]}
						output = []
						aabb.constrain(bounds, 9, output)
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 8], max: [10, 14]})
					})
					it("writes the original point to the output", function(){
						expect(output).toEqual([9, 9])
					})
				})
				describe("when the point is over a positive bound", function(){
					var bounds, output
					beforeEach(function(){
						bounds = {min: [6, 8], max: [10, 14]}
						output = []
						aabb.constrain(bounds, 11, output)
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 8], max: [10, 14]})
					})
					it("writes the constrained point to the output", function(){
						expect(output).toEqual([10, 11])
					})
				})
				describe("when the point is over a negative bound", function(){
					var bounds, output
					beforeEach(function(){
						bounds = {min: [6, 8], max: [10, 14]}
						output = []
						aabb.constrain(bounds, 7, output)
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 8], max: [10, 14]})
					})
					it("writes the constrained point to the output", function(){
						expect(output).toEqual([7, 8])
					})
				})
				describe("when the point is over multiple bounds", function(){
					var bounds, output
					beforeEach(function(){
						bounds = {min: [2, 9], max: [5, 20]}
						output = []
						aabb.constrain(bounds, 7, output)
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [2, 9], max: [5, 20]})
					})
					it("writes the constrained point to the output", function(){
						expect(output).toEqual([5, 9])
					})
				})
			})
			describe("when the output is populated", function(){
				describe("when the point is within the bounds", function(){
					var bounds, output
					beforeEach(function(){
						bounds = {min: [6, 8], max: [10, 14]}
						output = [13, 4]
						aabb.constrain(bounds, 9, output)
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 8], max: [10, 14]})
					})
					it("writes the original point to the output", function(){
						expect(output).toEqual([9, 9])
					})
				})
				describe("when the point is over a positive bound", function(){
					var bounds, output
					beforeEach(function(){
						bounds = {min: [6, 8], max: [10, 14]}
						output = [13, 4]
						aabb.constrain(bounds, 11, output)
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 8], max: [10, 14]})
					})
					it("writes the constrained point to the output", function(){
						expect(output).toEqual([10, 11])
					})
				})
				describe("when the point is over a negative bound", function(){
					var bounds, output
					beforeEach(function(){
						bounds = {min: [6, 8], max: [10, 14]}
						output = [13, 4]
						aabb.constrain(bounds, 7, output)
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 8], max: [10, 14]})
					})
					it("writes the constrained point to the output", function(){
						expect(output).toEqual([7, 8])
					})
				})
				describe("when the point is over multiple bounds", function(){
					var bounds, output
					beforeEach(function(){
						bounds = {min: [2, 9], max: [5, 20]}
						output = [13, 4]
						aabb.constrain(bounds, 7, output)
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [2, 9], max: [5, 20]})
					})
					it("writes the constrained point to the output", function(){
						expect(output).toEqual([5, 9])
					})
				})
			})
		})
		describe("when the input point is a vector", function(){
			describe("when the output is empty", function(){
				describe("when the point is within the bounds", function(){
					var bounds, input, output
					beforeEach(function(){
						bounds = {min: [6, 22], max: [8, 28]}
						input = [7, 24]
						output = []
						aabb.constrain(bounds, input, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual([7, 24])
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 22], max: [8, 28]})
					})
					it("writes the original point to the output", function(){
						expect(output).toEqual([7, 24])
					})
				})
				describe("when the point is over a positive bound", function(){
					var bounds, input, output
					beforeEach(function(){
						bounds = {min: [6, 22], max: [8, 28]}
						input = [9, 24]
						output = []
						aabb.constrain(bounds, input, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual([9, 24])
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 22], max: [8, 28]})
					})
					it("writes the constrainted point to the output", function(){
						expect(output).toEqual([8, 24])
					})
				})
				describe("when the point is over a negative bound", function(){
					var bounds, input, output
					beforeEach(function(){
						bounds = {min: [6, 22], max: [8, 28]}
						input = [5, 24]
						output = []
						aabb.constrain(bounds, input, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual([5, 24])
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 22], max: [8, 28]})
					})
					it("writes the constrainted point to the output", function(){
						expect(output).toEqual([6, 24])
					})
				})
				describe("when the point is over multiple bounds", function(){
					var bounds, input, output
					beforeEach(function(){
						bounds = {min: [6, 22], max: [8, 28]}
						input = [9, 20]
						output = []
						aabb.constrain(bounds, input, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual([9, 20])
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 22], max: [8, 28]})
					})
					it("writes the constrainted point to the output", function(){
						expect(output).toEqual([8, 22])
					})
				})
			})
			describe("when the output is populated", function(){
				describe("when the point is within the bounds", function(){
					var bounds, input, output
					beforeEach(function(){
						bounds = {min: [6, 22], max: [8, 28]}
						input = [7, 24]
						output = [46, 2]
						aabb.constrain(bounds, input, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual([7, 24])
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 22], max: [8, 28]})
					})
					it("writes the original point to the output", function(){
						expect(output).toEqual([7, 24])
					})
				})
				describe("when the point is over a positive bound", function(){
					var bounds, input, output
					beforeEach(function(){
						bounds = {min: [6, 22], max: [8, 28]}
						input = [9, 24]
						output = [46, 2]
						aabb.constrain(bounds, input, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual([9, 24])
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 22], max: [8, 28]})
					})
					it("writes the constrainted point to the output", function(){
						expect(output).toEqual([8, 24])
					})
				})
				describe("when the point is over a negative bound", function(){
					var bounds, input, output
					beforeEach(function(){
						bounds = {min: [6, 22], max: [8, 28]}
						input = [5, 24]
						output = [46, 2]
						aabb.constrain(bounds, input, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual([5, 24])
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 22], max: [8, 28]})
					})
					it("writes the constrainted point to the output", function(){
						expect(output).toEqual([6, 24])
					})
				})
				describe("when the point is over multiple bounds", function(){
					var bounds, input, output
					beforeEach(function(){
						bounds = {min: [6, 22], max: [8, 28]}
						input = [9, 20]
						output = [46, 2]
						aabb.constrain(bounds, input, output)
					})
					it("does not modify the input", function(){
						expect(input).toEqual([9, 20])
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 22], max: [8, 28]})
					})
					it("writes the constrainted point to the output", function(){
						expect(output).toEqual([8, 22])
					})
				})
			})
			describe("when the output is the input", function(){
				describe("when the point is within the bounds", function(){
					var bounds, output
					beforeEach(function(){
						bounds = {min: [6, 22], max: [8, 28]}
						output = [7, 24]
						aabb.constrain(bounds, output, output)
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 22], max: [8, 28]})
					})
					it("writes the original point to the output", function(){
						expect(output).toEqual([7, 24])
					})
				})
				describe("when the point is over a positive bound", function(){
					var bounds, output
					beforeEach(function(){
						bounds = {min: [6, 22], max: [8, 28]}
						output = [9, 24]
						aabb.constrain(bounds, output, output)
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 22], max: [8, 28]})
					})
					it("writes the constrainted point to the output", function(){
						expect(output).toEqual([8, 24])
					})
				})
				describe("when the point is over a negative bound", function(){
					var bounds, output
					beforeEach(function(){
						bounds = {min: [6, 22], max: [8, 28]}
						output = [5, 24]
						aabb.constrain(bounds, output, output)
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 22], max: [8, 28]})
					})
					it("writes the constrainted point to the output", function(){
						expect(output).toEqual([6, 24])
					})
				})
				describe("when the point is over multiple bounds", function(){
					var bounds, output
					beforeEach(function(){
						bounds = {min: [6, 22], max: [8, 28]}
						output = [9, 20]
						aabb.constrain(bounds, output, output)
					})
					it("does not modify the bounds", function(){
						expect(bounds).toEqual({min: [6, 22], max: [8, 28]})
					})
					it("writes the constrainted point to the output", function(){
						expect(output).toEqual([8, 22])
					})
				})
			})
		})
	})
})
