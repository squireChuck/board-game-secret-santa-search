# board-game-secret-santa-search
Answer the age old question of, "who has the game I'm thinking of gifting?!"
More specifically, easily search through people's exported
[Board Game Geek](https://boardgamegeek.com) collections to see if anyone
has a specific game.

Important viewport breakpoints:
-  Mobile size max-width: < 43.75em - < 700px
-  @media (min-width: 43.75em) - 700px
-  @media (min-width: 56.25em) - 900px


## Instructions
1. Install [Node.js](https://nodejs.org/en/download/)
1. Download and extract this repo.
1. Export each person's Board Game Geek game collections as csv files, saving
  them in the `resources` folder as `playerName.csv`, e.g. `john.csv`.
1. In this folder, run `npm start` to condense all of the player data into a
  single file (`resources/players.json`).
1. Copy the `players.json` file into `ui/src/resources`.
1. In the `ui` folder, run `npm run serve`.


## Project future features
- Simple server for compiled assets, quick and easy setup.
  - depending on ease of set up for Vue cli, consider adding a simple server
    that houses the static app in a `dist-`like folder
  - npm script to copy compiled ui into the `./server/dist` folder
  - npm script to copy `players.json` into the ui and server folders.
- Link board game names with Board Game Geek entries
- Stats based on a player's games, e.g. favorite genre/mechanic/etc.

## Refs
- Steve Lianardo's [Santa Hat icon](http://www.iconarchive.com/show/free-christmas-flat-icons-by-stevelianardo/santa-hat-icon.html)
  - [Iconset: Free Christmas Flat Icons (24 icons)](http://www.iconarchive.com/show/free-christmas-flat-icons-by-stevelianardo.html)
  - License: CC Attribution 4.0