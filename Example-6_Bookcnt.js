// Create a database "BookStore" with a collection called "Books" containing 
// documents with some or all of the following fields: Category, BookName, Author, 
// quantity, price, pages. 

// Perform the following operations on the database:
// a) Insert Records for 5 books.
// -------------------------------
    book1 = {name : "Understanding JAVA", pages : 100, price:500, quantity:20, author:"Himmat"} 
	db.books.save(book1) 
	book2 = {name : "Understanding JSON", pages : 200, price:100, quantity:40, author:"Namrta"} 
	db.books.save(book2)  
	book = {name : "Understanding XML", pages : 300, price:290, quantity:50, author:"Mahesh Chavda"}  
    db.books.save(book)  
    book = {name : "Understanding Web Services", pages : 140, price:300, quantity:26, author:"Jay Shahaa"}  
    db.books.save(book)  
    book = {name : "Understanding Axis2", pages : 150, price:560, quantity:12, author:"Jigar"}  
    db.books.save(book) 
	
db.books.find() /*
{ "_id" : ObjectId("66043df0400b3a2061df6d2d"), "name" : "Understanding JAVA", "pages" : 100, "price" : 500, "quantity" : 20, "author" : "Himmat" }
{ "_id" : ObjectId("66043df0400b3a2061df6d2e"), "name" : "Understanding JSON", "pages" : 200, "price" : 100, "quantity" : 40, "author" : "Namrta" }
{ "_id" : ObjectId("66043df0400b3a2061df6d2f"), "name" : "Understanding XML", "pages" : 300, "price" : 290, "quantity" : 50, "author" : "Mahesh Chavda" }
{ "_id" : ObjectId("66043df0400b3a2061df6d30"), "name" : "Understanding Web Services", "pages" : 140, "price" : 300, "quantity" : 26, "author" : "Jay Shahaa" }
{ "_id" : ObjectId("66043df0400b3a2061df6d31"), "name" : "Understanding Axis2", "pages" : 150, "price" : 560, "quantity" : 12, "author" : "Jigar" }
*/

// b) Write Map & Reduce functions to split the books into the following two 
// categories: Bigbooks, Smallbooks. (Books which have more than 300 pages 
// should be in the Big books category. Books which have less than 300 pages 
// should be in the Small books category.)

var map = function()  
                                                       


// c) Count the number of books in each category
  

var map = function() {  
    var category;  
    if ( this.count)   
    category = "Big Books";  
    else   
    category = "Small Books";  
    emit(category, {name: this.name});  
    };  
var reduce = function(key, values) {  
    var sum = 0;  
    values.forEach(function(doc) {  
    sum += 1;  
    });  
    return {books: sum};  
    };  
	
var count  = db.books.mapReduce(map, reduce, {out: "book_results"});  
db[count.result].find()

// d) Store the output as follow as documents in a new collection called "Book