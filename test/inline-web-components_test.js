/* global describe, it */

"use strict";

var assert  = require("assert"),
	fs      = require("fs"),
	cheerio = require("cheerio"),
	inlineWebComponents = require("../lib/inline-web-components.js");

describe("inline-web-components node module", function() {
	it("should inline the components", function() {
		var source     = fs.readFileSync("test/test.html", "utf8"),
			components = {
				"about-app": "test/components/about-app.html",
				"cool-component": "test/components/cool-component.html"
			},
			result     = fs.readFileSync("test/result.html", "utf8");

		assert.equal(inlineWebComponents(source, components), cheerio.load(result).html());
	});
});
