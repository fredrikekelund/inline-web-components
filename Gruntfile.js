"use strict";

module.exports = function(grunt) {
	// Show elapsed time at the end
	require("time-grunt")(grunt);
	// Load all grunt tasks
	require("load-grunt-tasks")(grunt);

	// Project configuration.
	grunt.initConfig({
		jshint: {
			options: {
				jshintrc: ".jshintrc",
				reporter: require("jshint-stylish")
			},
			all: [
				"Gruntfile.js",
				"tasks/*.js",
				"test/*.js"
			]
		},
		mochacli: {
			options: {
				reporter: "nyan",
				bail: true
			},
			all: ["test/*.js"]
		}
	});

	// Default task.
	grunt.registerTask("default", ["jshint", "mochacli"]);
};
