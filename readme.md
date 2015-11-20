A simple, low-dependency JavaScript library for working with axis-aligned-bounding-boxes of any number of dimensions.

# Installation

* NPM/NodeJS

[Use "npm install sunruse-math-aabb"](https://docs.npmjs.com/cli/install) like any other NPM package.
Requiring "sunruse-math-vectors" will get you the object described in [Usage](#Usage).

* Browser

Include dist/browser.js or dist/browser.min.js in your page, or add it to an existing script.
The object described in [Usage](#Usage) is globally accessible at "SUNRUSE.math.aabb".
If you're using webpack, it is safe to use the NPM module "sunruse-math-aabb" in the browser.

This library also requires sunruse-math-vector.

# Usage

Vectors are defined as any anonymous array of numbers such as [5, 7.5, -3.4] for a 3D vector.

Scalars are defined as standard numbers such as 43.6 or -7.0.

An axis-aligned-bounding-box is defined as an anonymous array of pairs of numbers defining the minimum and maximum bound on each axis.
An example might be {} [[4, 8], [10, 15], [-40, 50]].
This is a 3D axis-aligned-bounding-box extending from 4 to 8 on the X axis, 10 to 15 on the Y axis, and -40 to 50 on the Z axis.

# Example

	var toExpand = {min:[4, 10], max: [5, 15]}
	SUNRUSE.math.aabb.expand(toExpand, [7, 11], toExpand)
	console.log(toExpand) // {min: [4, 10], max: [7, 15]}

# Function Reference

## create
Given a vector, creates and returns a new axis-aligned-bounding-box containing it.
This has a width, height, depth, etc. of zero.

## clone
Given:

- An input axis-aligned-bounding-box
- An output axis-aligned-bounding-box

Performs a deep copy of the axis-aligned-bounding-box from the input to the output.
The output axis-aligned-bounding-box may be empty, but dimensions beyond those of the input are undefined behaviour.

## expand
Given:

- An input axis-aligned-bounding-box
- An output axis-aligned-bounding-box
- An input vector or scalar

Expands, if necessary, the axis-aligned-bounding-box to contain the point located by the vector or scalar.

## constrain
Given:

- An input axis-aligned-bounding-box
- An input vector or scalar
- An output vector

Constrains the point represented by the vector or scalar to within the axis-aligned-bounding box.

## contains
Given:

- An axis-aligned-bounding-box
- An input vector or scalar

Returns truthy when the point located by the vector or scalar is within the axis-aligned-bounding-box, and falsy when it is not.

## union
Given:

- An axis-aligned-bounding-box
- An axis-aligned-bounding-box
- An output input axis-aligned-bounding-box

Expands the first bounding box to contain the second fully, writing the result to the third.

## intersect
Given:

- An axis-aligned-bounding-box
- An axis-aligned-bounding-box
- An output input axis-aligned-bounding-box

Shrinks the first bounding box to fit inside the second fully, writing the result to the third.

## overlaps
Given:

- An axis-aligned-bounding-box
- An axis-aligned-bounding-box

Returns truthy when any part of the two axis-aligned-bounding-boxes overlap, and falsy when they do not.

## contains
Given:

- An axis-aligned-bounding-box
- An axis-aligned-bounding-box

Returns truthy when the entire second axis-aligned-bounding-box fits in the first, and falsy when it does not.

# Undefined behaviour

## Mixing the number of dimensions in axis-aligned-bounding-boxes

	var temp = {min:[4, 5], max:[16, 20, 8]}
	SUNRUSE.math.aabb.expand(temp, [9, 10])
	console.log(temp) // ???

## Mixing vector length and the number of dimensions in axis-aligned-bounding-boxes

	var temp = {min:[4, 5], max:[16, 20]}
	SUNRUSE.math.aabb.expand(temp, [9, 10, 15])
	console.log(temp) // ???

## Anything other than number pairs in an axis-aligned-bounding-box

	var temp = {min:[4, 5], max:[16, "invalid"]}
	SUNRUSE.math.aabb.expand(temp, [9, 10])
	console.log(temp) // ???

## Anything other than numbers in a vector

	var temp = {min:[4, 5], max: [16, 20]}
	SUNRUSE.math.aabb.expand(temp, [9, "invalid"])
	console.log(temp) // ???

## Mixing the number of dimensions in axis-aligned-bounding-boxes

	var temp = {min:[4, 5], max:[16, 20]}
	SUNRUSE.math.aabb.union(temp, {min:[25, 30, 60], max:[80, 10, 15]})
	console.log(temp) // ???
