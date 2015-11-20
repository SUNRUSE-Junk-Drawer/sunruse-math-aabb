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
