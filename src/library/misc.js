instance.create = function(point) {
	var output = {min: [], max: []}
	vector().clone(point, output.min)
	vector().clone(point, output.max)
	return output
}
