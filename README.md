# board-game-secret-santa
Answer the age old question of, "who has the game I'm thinking of gifting?!"

TODO
- [x] init npm project
- [x] script to convert separate csv's into a single JSON file
- [x] init Vue project
- [x] filtering/searching behavior
  - include a `resources`-like folder to house the json file
- [ ] styles/fleshing out UI features
  - simple CSS? Vue material?
  - [x] include message saying: "These people might have {{searchText}}: person1..."
    or "Hooray, nobody has {{searchText}}"
- [ ] instructions for use
- [ ] how is the user-friendliness for set up??
  - depending on ease of set up for Vue cli, consider adding a simple server
    that houses the static app in a `dist-`like folder

Need to support:
-  Mobile size max-width: < 43.75em - < 700px
-  @media (min-width: 43.75em) - 700px
-  @media (min-width: 56.25em) - 900px


## Instructions
1. Install Node.js
1. Export the BGG game collections as csv's, save them in the `resources`
    folder.
1. Run `npm start` to condense all of the player data into a single file
    (`resources/players.json`)
1. ????


### Refs
- Steve Lianardo's [Santa Hat icon](http://www.iconarchive.com/show/free-christmas-flat-icons-by-stevelianardo/santa-hat-icon.html)
  - [Iconset: Free Christmas Flat Icons (24 icons)](http://www.iconarchive.com/show/free-christmas-flat-icons-by-stevelianardo.html)
  - License: CC Attribution 4.0