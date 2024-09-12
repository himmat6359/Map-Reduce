// Find Out total number of posts by each user whose status is active.
// use Blogs

// use Blogs

db.createCollection("Blogs")
db.Blogs.insertMany([
{_id:1,userId:"u101",post_text:"Python MapReduce", status:"Active"},
{_id:2,userId:"u101",post_text:"Python Socket", status:"Active"},
{_id:3,userId:"u102",post_text:"Java Script", status:"Active"},
{_id:4,userId:"u102",post_text:"Css&bootstrap", status:"Active"},
{_id:5,userId:"u101",post_text:"Python ADT", status:"Passive"},
])

var map = function(){emit (this.userId,1);}

var reduce = function(userId,count){return Array.sum(count);}

db.Blogs.mapReduce(map,reduce,{out:"total_post"});


db.Blogs.mapReduce(map,reduce,{out:"total_post",query:{status:"Active"}});


db.total_post.find().pretty()

// { "_id" : "u101", "value" : 2 }
// { "_id" : "u102", "value" : 2 }

3. 
// ===================================================
// use Customers

db.createCollection("Custtomers")

db.Customers.insert({CustID:"C123", AccBal:500, AccType:"S"})
db.Customers.insert({CustID:"C123", AccBal:900, AccType:"S"})
db.Customers.insert({CustID:"C123", AccBal:1500, AccType:"C"})
db.Customers.insert({CustID:"C111", AccBal:1200, AccType:"S"})
db.Customers.insert({CustID:"C111", AccBal:1000, AccType:"C"})
db.Customers.insert({CustID:"C111", AccBal:5000, AccType:"S"})

// Find Out total balance, Average balance of the customer whose AccType is “S”
 
 
// Map function
var  mapfun = function() {
    if (this.AccType === "S") {
        emit(this.CustID, { totalBalance: this.AccBal, count: 1 });
    }
};

// Reduce function
var  mapfun = function(key, values) {
    var reducedVal = { totalBalance: 0, count: 0 };

    values.forEach(function(value) {
        reducedVal.totalBalance += value.totalBalance;
        reducedVal.count += value.count;
    });

    return reducedVal;
};

// Finalize function (optional)
var lastFun = function(key, reducedVal) {
    reducedVal.averageBalance = reducedVal.totalBalance / reducedVal.count;
    return reducedVal;
};

// Execute MapReduce
db.Customers.mapReduce(
    mapFunction,
    reduceFunction,
    {
        out: { inline: 1 }, // Output results inline
        finalize:  lastFun // Apply finalize function to calculate average balance
    }
);
// { "results" : [ ], "ok" : 1 }

