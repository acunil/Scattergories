"use strict";

// Beginning with a single comma-separated string to get majority of categories populated
var categoriesAsSingleString = "Things you wear, Places you stay";

// Library becomes array with each element a category as its own string.
// Can be edited with push and splice in-game
// Can be iterated over to dynamically create HTML template (Handlebars) for list structure on page
const Library = categoriesAsSingleString.split(",");
Library.push("Red foods");

export { Library };
