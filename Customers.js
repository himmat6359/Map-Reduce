// use Cust

db.createCollection("Customers")

 
db.Customers.insert({CustID:"C123", AccBal:500, AccType:"S"})
db.Customers.insert({CustID:"C123", AccBal:900, AccType:"S"})
db.Customers.insert({CustID:"C123", AccBal:1500, AccType:"C"})
db.Customers.insert({CustID:"C123", AccBal:1200, AccType:"S"})
db.Customers.insert({CustID:"C111", AccBal:1200, AccType:"S"})
db.Customers.insert({CustID:"C111", AccBal:1000, AccType:"C"})
db.Customers.insert({CustID:"C111", AccBal:5000, AccType:"S"})
db.Customers.insert({CustID:"C112", AccBal:5000, AccType:"S"})
db.Customers.insert({CustID:"C112", AccBal:200, AccType:"S"})

var map=function(){emit(this.CustID,this.AccBal);}  // for map function

var reduce = function(key,values){return Array.sum(values);}  // For reducr function

db.Customers.mapReduce(map,reduce,{out:"Customers_Totals"}) //execute query

db.Customers_Totals.find().pretty()

// "_id" : "C111", "value" : 7200 }
// { "_id" : "C112", "value" : 5200 }
// { "_id" : "C123", "value" : 4100 }
