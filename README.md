#  inline-web-components

> Inline web components' template files into an HTML file

We all love working with web components, they make our projects nice and modular. The downside is that when we use them, we delay rendering part of our pages, so we get a kind of [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content). This module is good for making sure that certain components have their contents there from the very get-go.

## Getting started

Install the module locally with: `npm install inline-web-components`. The module then takes a HTML source string and an object where every key is a jQuery style selector, and its value represents a path to a template file.

```js
var inlineWebComponents = require("inline-web-components"),
    fs         = require("fs"),
    source     = fs.readFileSync("index.html", "utf8"),
    components = {
        "info-window": "components/info-window.html",
        "my-component:first": "components/my-component.html",
        "flashy-button.critical": "components/flashy-button.html"
    };

inlineWebComponents(source, components);  // Returns the source string with the content of the template files inlined in the elements that matched their selectors
```

### Grunt task

If you want to include this task in some kind of build process, there's a Grunt task to do just that.

## License

Copyright (c) 2014 [Fredrik Ekelund](http://fredrik.computer)
Licensed under the MIT license.
