import com.mongodb.MongoClient
import com.mongodb.client.MongoCollection
import com.mongodb.client.MongoDatabase
import org.bson.Document

/**
 * Created by Charlie on 12/11/2015.
 *
 * Script to figure out which games the group has and doesn't have yet for the board game secret santa.
 *
 * 1. Download board games every owns from their BoardGameGeeks accounts.
 *
 * 2. As of 12/2015, these downloads came in Excel spreadsheet format. Save/convert them to csv files and save to the
 *      resources folder.
 *
 * 3. Run script to insert everyone and their games into Mongo.
 *
 * 4. Query Mongo to see which games the group doesn't have yet.
 */
class InsertOwnedGames {

    public static void main(String[] args) {
        def people = ["john", "jane", "joanne", "jim"]

        Map<String, File> mapOfBoardGameFiles = new HashMap<String, File>()

        people.each {
            mapOfBoardGameFiles.put(it,
                new File("path\\to\\project\\folder\\secretsanta\\src\\main\\resources\\${it}.csv"))
        }

        // Verify no null files and can read them all.
        mapOfBoardGameFiles.values().each { assert it != null  && it.canRead() }

        loadFriendsGames(mapOfBoardGameFiles)

        println "********** Done **********"
    }

    /**
     * Insert the people and their owned games into Mongo.
     *
     * @param pMapOfOwnersAndGames - map of the people (and their respective files) to process.
     */
    static loadFriendsGames(Map<String, File> pMapOfOwnersAndGames) {
        MongoClient c =  new MongoClient();
        MongoDatabase db = c.getDatabase("test");
        MongoCollection<Document> boardGamesCollection = db.getCollection("boardgames");

        boardGamesCollection.drop()

        pMapOfOwnersAndGames.entrySet().each {
            Document friendGameDoc =
                    new Document("_id", it.getKey())
                        .append("ownedGames", getGameTitles(it.getValue()))

            boardGamesCollection.insertOne(friendGameDoc)
        }
    }

    /**
     * Each line of the file contains columns of all the info (for a particular game) exported by BoardGameGeeks.
     *
     * @param pFile - file to parse
     * @return List<String[]> of the info for each game in the file.
     */
    static List<String[]> getCsvRows(File pFile) {
        String[] lines = pFile.text.split('\n')
        return lines.collect {it.split(',')}
    }

    /**
     * Process the csv file and get the games within it.
     *
     * @param pFile - csv file with the person's owned games.
     * @return List<String> of the games a person owns.
     */
    static List<String> getGameTitles(File pFile) {
        List<String[]> rows = getCsvRows(pFile)

        return rows.collect { it[0].replaceAll('"', "") }
    }
}
