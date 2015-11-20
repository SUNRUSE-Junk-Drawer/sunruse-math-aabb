var instance = {}
var _vector = require("sunruse-math-vector")
var vector = function() { return _vector }

instance.create = function(point) {
	var output = {min: [], max: []}
	vector().clone(point, output.min)
	vector().clone(point, output.max)
	return output
}

instance.expand = function(input, point, output) {
	vector().zip(input.min, point, output.min, Math.min)
	vector().zip(input.max, point, output.max, Math.max)
}

instance.contains = function(bounds, point) {
	return vector().zipFold(bounds.min, point, function(bound, point) { return point >= bound }, function(accumulated, next) { return accumulated && next }) && 
		vector().zipFold(bounds.max, point, function(bound, point) { return point <= bound }, function(accumulated, next) { return accumulated && next })
}

instance.constrain = function(bounds, input, output) {
	vector().zip(bounds.min, input, output, Math.max)
	vector().zip(bounds.max, output, output, Math.min)
}

module.exports = instance
