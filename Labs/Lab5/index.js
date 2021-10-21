let firstName = "Mickey";
let lastName = "Mouse";

// Build a string "Hello M M "
// use backticks for variable usage ` not ' 
let message = `Hello ${firstName} ${lastName}`;
//let message2 = "Hello " + firstName + " " + lastName;

console.log(message);

function writeMessage(msg) {
    console.log(msg);
}

// writeMessage("Test");

// not
// let testMsg = writeMessage("Testing123"); 
// as that calls it directly
// simply name the function:
let testMSg = writeMessage;
// call it whenever you want
testMSg("Testing123"); 

// arrow function is a type of anon function
let arrow = (msgs) => {
    console.log("Test arrow function");
    console.log(msgs);
}

arrow("testing");

// -------------------------------------- //

const { MongoClient } = require('mongodb');

const protocol = 'mongodb+srv';
const credentials = 'comp-206:comp-206';
const host = 'vue-express-mdb.ck6mp.mongodb.net';
const options = 'retryWrites=true&w=majority';
const url = `${protocol}://${credentials}@${host}?${options}`;
console.log(url);

const dbClient = new MongoClient(url);

let getDatabaseList = 
    (client) => { return client.db().admin().listDatabases() }; 

let logDatabaseList = 
    (dbList) => { dbList.databases.foreach((db)=>{console.log(db)}) };

dbClient.connect()
    .then(getDatabaseList)
    .then(logDatabaseList)

dbClient.connect()
    .then( (client) => {
        let airbnb = client.db();
        let listing = airbnb.collection('listingsAndReviews');
        listing.findOne({}, (err, item) => { console.log(item)});
    })