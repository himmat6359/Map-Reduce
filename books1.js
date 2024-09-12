// 1.
// Create a database “BookStore” with a collection called “Books” containing 
// documents with some or all of the following fields: Category, BookName, 
// Author, quantity, price, pages. Perform the following operations on the 
// database

// use Books1

db.createCollection("Book")

db.Book.insertMany([{_id:1,
                     BookName:"VijayRathi",
                     Author : "Ravindr",
                     quantity : 120,
                     price : 300,
                     pages :180},
                    {
                        _id:2,
                        BookName:"Syamsya",
                        Author : "Sagrika",
                        quantity :10,
                        price : 80,
                        pages :520
                    },
                    {
                        _id:3,
                        BookName:"MaindLog",
                        Author : "Hiren_patel",
                        quantity :105,
                        price : 800,
                        pages :52
                    },
                    {
                        _id:4,
                        BookName:"Mongodb",
                        Author : "Jinalmemm",
                        quantity :100,
                        price : 500,
                        pages : 600
                    },
                    {
                        _id:5,
                        BookName:"Python",
                        Author : "Urjamem",
                        quantity :500,
                        price : 250,
                        pages : 420
                    }
                ])
// { "acknowledged" : true, "insertedIds" : [ 1, 2, 3, 4, 5 ] }

var mapFunction = function() {
    if (this.pages > 300) {
        emit("Bigbooks", 1);
    } else {
        emit("Smallbooks", 1);
    }
};

var reduceFunction = function(key,values){return Array.sum(values)};

var mapReduceResult = db.Book.mapReduce(
    mapFunction,
    reduceFunction,
    {out:{inline :1}}
);

var mapReduceResult = db.Books.mapReduce(
    mapFunction,
    reduceFunction,
    { out: { inline: 1 } }
);

var counts = {};
mapReduceResult.results.forEach(function(doc) {
    counts[doc._id] = doc.value;
});

print("Number of Bigbooks: " + counts.Bigbooks);
// Number of Bigbooks: 3
print("Number of Smallbooks: " + counts.Smallbooks);
// Number of Smallbooks: 2

