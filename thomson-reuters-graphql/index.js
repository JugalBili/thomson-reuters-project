var MongoClient = require("mongodb").MongoClient;
const { ApolloServer } = require("apollo-server");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers.js");

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

require("dotenv").config({ path: "../.env" });

var mongo_url = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@salesforce-data.xg1r1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

/*
MongoClient.connect(mongo_url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("TomsonReutersData");
  var coll = dbo.collection("salesforceData");

  coll.find({ id: 2 }).toArray(function (err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
*/

const PORT = process.env.PORT || 3030;

server.listen(PORT).then((serverInfo) => {
  console.log(`Server running at port: ${serverInfo.url}`);
});
