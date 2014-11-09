/*
 * inline-web-components
 * https://github.com/fredrikekelund/inline-web-components
 *
 * Copyright (c) 2014 Fredrik Ekelund
 * Licensed under the MIT license.
 */

"use strict";

var fs      = require("fs"),
	cheerio = require("cheerio");

/**
 * Inlines the content of web components in an HTML file
 * @param  {String} source     A full HTML source to parse
 * @param  {Object} components Each key is a jQuery style selector, its value is a path to a template file to inline into every node that matches the selector
 * @return {String}            The HTML source with the specified web components filled with content
 */
module.exports = function(source, components) {
	var $ = cheerio.load(source);

	for (var component in components) {
		$(component).each(function(i, node) {
			var componentContent = fs.readFileSync(components[component], "utf8");
			cheerio(node).html(componentContent);
		});
	}

	return $.html();
};
