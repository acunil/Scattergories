"use strict";

// Beginning with a single comma-separated string to get majority of categories populated
var categoriesAsSingleString =
  "Things you wear, Places you stay, Things at a wedding, Famous buildings, Aquatic creatures, Things seen on your face, Famous females, Things in a casino, Places in Europe, Authors, Things related to money, Things seen at a festival, Things you hear, Things you can read, Titles (eg Mister), Jobs which wear a uniform";

// Library becomes array with each element a category as its own string.
// Can be edited with push and splice in-game
// Can be iterated over to dynamically create HTML template (Handlebars) for list structure on page
const Library = categoriesAsSingleString.split(", ");
Library.push("Things that are red");

export { Library };
