module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-contrib-clean")
	grunt.loadNpmTasks("grunt-contrib-copy")
	grunt.loadNpmTasks("grunt-contrib-concat")
	grunt.loadNpmTasks("grunt-contrib-uglify")
	grunt.loadNpmTasks("grunt-jasmine-nodejs")
	grunt.loadNpmTasks("grunt-contrib-watch")

	grunt.registerTask("build", ["clean", "concat", "uglify", "copy"])
	grunt.registerTask("test", ["jasmine_nodejs"])

	grunt.initConfig({
		clean: {
			dist: "dist"
		},
		copy: {
			demo: {
				files: {
					"dist/demo.html": "src/browser/demo.html"
				}
			}
		},
		concat: {
			browser: {
				src: ["src/browser/header.js", "src/library/*.js", "!src/library/*.unit.js", "src/browser/footer.js"],
				dest: "dist/browser.js"
			},
			node: {
				src: ["src/node/header.js", "src/library/*.js", "!src/library/*.unit.js", "src/node/footer.js"],
				dest: "dist/node.js"
			}
		},
		uglify: {
			browser: {
				files: {
					"dist/browser.min.js": "dist/browser.js"
				}
			},
			node: {
				files: {
					"dist/node.min.js": "dist/node.js"
				}
			}
		},
        jasmine_nodejs: {
            unit: {
                options: {
                    specNameSuffix: ".unit.js"
				},
                specs: ["src/**"]
			}
		},
		watch: {
			buildAndTest: {
				options: {
					atBegin: true
				},
				files: ["src/**/*"],
				tasks: ["build", "test"]
			}
		}
	})
}
