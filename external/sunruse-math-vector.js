if(SUNRUSE === undefined) {
	var SUNRUSE = {}
}
SUNRUSE.math = SUNRUSE.math || {}
SUNRUSE.math.vector = (function() {
	var instance = {}


instance.add = function(a, b, output) {
	instance.zip(a, b, output, function(a, b) { return a + b })
}

instance.subtract = function(a, b, output) {
	instance.zip(a, b, output, function(a, b) { return a - b })
}

instance.multiply = function(a, b, output) {
	instance.zip(a, b, output, function(a, b) { return a * b })
}

instance.divide = function(a, b, output) {
	instance.zip(a, b, output, function(a, b) { return a / b })
}

instance.dot = function(a, b) {
	return instance.zipFold(a, b, function(a, b) { return a * b }, function(accumulated, next) { return accumulated + next })
}

instance.cross = function(a, b, output) {
	var tempA0, tempA1, tempA2
	if(a instanceof Array) {
		tempA0 = a[0]
		tempA1 = a[1]
		tempA2 = a[2]
	} else {
		tempA0 = a
		tempA1 = a
		tempA2 = a
	}
	var tempB0, tempB1, tempB2
	if(b instanceof Array) {
		tempB0 = b[0]
		tempB1 = b[1]
		tempB2 = b[2]
	} else {
		tempB0 = b
		tempB1 = b
		tempB2 = b
	}
	output[0] = tempA1 * tempB2 - tempA2 * tempB1
	output[1] = tempA2 * tempB0 - tempA0 * tempB2
	output[2] = tempA0 * tempB1 - tempA1 * tempB0
}

instance.reflect = function(vector, normal, output) {
	var dot = instance.dot(vector, normal) * 2
	instance.zip(vector, normal, output, function(a, b) { return a - b * dot })
}

instance.sum = function(input) {
	return instance.fold(input, function(a, b) { return a + b })
}

instance.product = function(input) {
	return instance.fold(input, function(a, b) { return a * b })
}

instance.map = function(input, output, callback) {
	if(input instanceof Array) {
		for(var i = 0; i < input.length; i++) {
			output[i] = callback(input[i])
		}
	} else {
		output[0] = callback(input)
	}
}

instance.zip = function(inputA, inputB, output, callback) {
	if(inputA instanceof Array) {
		if(inputB instanceof Array) {
			for(var i = 0; i < inputA.length; i++) {
				output[i] = callback(inputA[i], inputB[i])
			}
		} else {
			for(var i = 0; i < inputA.length; i++) {
				output[i] = callback(inputA[i], inputB)
			}
		}		
	} else {
		if(inputB instanceof Array) {
			for(var i = 0; i < inputB.length; i++) {
				output[i] = callback(inputA, inputB[i])
			}
		} else {
			output[0] = callback(inputA, inputB)
		}
	}
}

instance.fold = function(input, callback) {
	if(input instanceof Array) {
		var computed = input[0]
		for(var i = 1; i < input.length; i++) {
			computed = callback(computed, input[i])
		}
		return computed
	} else {
		return input
	}
}

instance.zipFold = function(inputA, inputB, zipCallback, foldCallback) {
	if(inputA instanceof Array) {
		if(inputB instanceof Array) {
			var computed = zipCallback(inputA[0], inputB[0])
			for(var i = 1; i < inputA.length; i++) {
				computed = foldCallback(computed, zipCallback(inputA[i], inputB[i]))
			}
			return computed
		} else {
			var computed = zipCallback(inputA[0], inputB)
			for(var i = 1; i < inputA.length; i++) {
				computed = foldCallback(computed, zipCallback(inputA[i], inputB))
			}
			return computed
		}		
	} else {
		if(inputB instanceof Array) {
			var computed = zipCallback(inputA, inputB[0])
			for(var i = 1; i < inputB.length; i++) {
				computed = foldCallback(computed, zipCallback(inputA, inputB[i]))
			}
			return computed
		} else {
			return zipCallback(inputA, inputB)
		}
	}
}

instance.magnitudeSquared = function(input) {
	return instance.dot(input, input)
}

instance.magnitude = function(input) {
	return Math.sqrt(instance.magnitudeSquared(input))
}

instance.distanceSquared = function(a, b) {
	return instance.zipFold(a, b, function(a, b) {
		var temp = a - b
		return temp * temp
	}, function(accumulated, next) { return accumulated + next })
}

instance.distance = function(a, b) {
	return Math.sqrt(instance.distanceSquared(a, b))
}

instance.clone = function(input, output) {
	instance.map(input, output, function(item) { return item })
}

instance.negate = function(input, output) {
	instance.map(input, output, function(item) { return -item })
}

instance.normalize = function(input, output) {
	var magnitude = instance.magnitude(input)
	instance.divide(input, magnitude, output)
}

	return instance
})()

