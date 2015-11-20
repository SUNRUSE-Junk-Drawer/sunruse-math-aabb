if(SUNRUSE === undefined) {
	var SUNRUSE = {}
}
SUNRUSE.math = SUNRUSE.math || {}
SUNRUSE.math.aabb = (function() {
	var instance = {}
	var vector = function() { return SUNRUSE.math.vector }
