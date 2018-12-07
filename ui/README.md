# bgs3

## Running todo's
- [x] Fixed header
- [x] Simplify header (see GH, GMail as examples) - make the title less jumpy/prominent
- [x] Spruce up the body
  - [x] verbiage
  - [x] make verbiage stand out for players matching search
  - [x] Grid/flexbox the GameListItem's
  - [x] Restrict size of each GameListItem
    - [x] consistent width
    - ~~height~~ => Decided against this - displaying a player's entire game
      list is much easier to visually scan and use the native browser search.
      Making expandable cards/scrollbars on each player's list doesn't do
      anything better than a more specific search.
      - show first 5 - 10 games in each GameListItem
      - make expandable
  - [x] margins for some whitespace on small viewports
  - [x] adjust alignment/order of search box/label for small viewports.
- [ ] ~~Allow user to enter person's name in the box.~~ => would require
  complicating the search status, e.g. entering "Jim" and seeing "Jim might
  have that game". Not worth it considering there are better ways to filter
  based on participants (multi-select, expand/contract each player's entire
  list).
- [ ] Test on desktop, mobile; fix any weirdness.
- [ ] Replace "Avenir" with Roboto/other sans-serif typeface with progressive enhancement if
  typeface unavailable.
- [ ] Investigate `vue-mq` to expose media query breakpoints. Can this handle em's (if necessary)?
- [ ] Expand/contract entire player list, with button/icon near player name heading
- [ ] Multi-select filter based on the participants.
  - e.g. `I want to see games owned by: <badges/list of selected people>`,
    including a mechanism option to add/remove people.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
