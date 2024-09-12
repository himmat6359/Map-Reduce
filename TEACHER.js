// use Faculty

db.createCollection("Teacher")
// { "ok" : 1 }

// 1. Insert 7 documents into the above collection.

db.Teacher.insert({_id:1,name:"Jinal",age:38,subject:["BDT","DS"],DOB:"1995-09-26",gender:"Female",salary:49000,city:"a'bad"})
db.Teacher.insert({_id:2,name:"Anil",age:48,subject:["Hindi","English"],DOB:"1999-08-25",gender:"Male",salary:47000,city:"a'bad"})
db.Teacher.insert({_id:3,name:"Akash",age:28,subject:["Hindi","Guj"],DOB:"1981-01-01",gender:"Male",salary:30000,city:"baroda"})
db.Teacher.insert({_id:4,name:"Brinda",age:26,subject:["Computer","Guj"],DOB:"1988-12-11",gender:"Feale",salary:38000,city:"surat"})
db.Teacher.insert({_id:5,name:"Sweta",age:25,subject:["English","Sanskrit"],DOB:"1988-12-11",gender:"Female",salary:39000,city:"surat"})


// 2. Perform a MapReduce function using MongoDB to Count Average Salary by 
// Teacher
var map=function(){emit(this.age,this.salary);}  // for map function

var reduce = function(key,values){return Array.sum(values);}  // For reducr function

db.Customers.mapReduce(map,reduce,{out:"Salary_Totals"}) //execute query

db.Salary_Totals.find().pretty()


 