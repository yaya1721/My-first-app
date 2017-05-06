var fdb = new ForerunnerDB();
var db = fdb.db("score");
var scoreCollection = db.collection("score");
scoreCollection.load();
