# board-game-secret-santa
Script to help determine which games the group has and doesn't have.

* src/main/java/InsertOwnedGames.groovy
 * Parse the Board Game Geek export files, insert each person (and the games they own) into Mongo.
 * After the data's in Mongo, query for all the games we have/don't have.
* src/main/resources/*.csv
 * Board Game Geek export file for the games a person owns.
 
Next time this is tweaked, add mongo queries to the repo for future use!
