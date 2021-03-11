# board-game-secret-santa-search
Answer the age old question of, "who has the game I'm thinking of gifting?!"
More specifically, easily search through people's exported
[Board Game Geek](https://boardgamegeek.com) collections to see if anyone
has a specific game.



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
- Link board game names with Board Game Geek entries
- Stats based on a player's games, e.g. favorite genre/mechanic/etc.

## UI future features
- Selectable participant filter.
  - e.g. `I want to see games owned by: <badges/list of selected people>`,
    including a mechanism option to add/remove people.
  - Addresses the case of, `I only want to see games owned by <person X>`.
- Test on desktop, mobile; fix any weirdness.
- Replace "Avenir" with Roboto/other sans-serif typeface with progressive enhancement if
  typeface unavailable.
- Investigate `vue-mq` to expose media query breakpoints. Can this handle em's (if necessary)?

## Server future features
-  Make it easy to swap in a custom `players.json` on the server side.
  - Current process involves recompiling the entire `ui` and copying it into the
    `server/dist` folder as the data file is
    [inlined during webpack compilation](https://cli.vuejs.org/guide/html-and-static-assets.html#static-assets-handling).
  - Along with this, consider:
    - npm script to copy compiled ui into the `./server/dist` folder
    - npm script to copy `players.json` into the ui and server folders.

## Refs
- Steve Lianardo's [Santa Hat icon](http://www.iconarchive.com/show/free-christmas-flat-icons-by-stevelianardo/santa-hat-icon.html)
  - [Iconset: Free Christmas Flat Icons (24 icons)](http://www.iconarchive.com/show/free-christmas-flat-icons-by-stevelianardo.html)
  - License: CC Attribution 4.0
- https://boardgamegeek.com/wiki/page/Data_Mining#
- https://mail.google.com/mail/u/0/#search/board+game+secret+santa/FMfcgxmMmWLHDcbwQzKQxzHdSNpHgxvW <= contains links to people's collections
- https://boardgamegeek.com/geekcollection.php?action=exportcsv&subtype=boardgame&username=Jasimmons3085&all=1 => csv download link
