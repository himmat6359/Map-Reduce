// use Book

db.createCollection("Books")

db.Books.insertMany([
    {
        _id: 1, bookId: "b101", bookTitle: "The Secret 1", authors: ["Rhonda Byrne"], publicationYear: 2006, publisher: "Atria Publishing Group",
        orders: [{
            OrderedId: "o101", orderDate: new Date("2020-02-11"), customerName: "Jainam", price: 1000,
            quantityOrdered: 1, discount: 100
        }, {
            OrderedId: "o102", orderDate: new Date("2020-02-12"), customerName: "Rahil", price: 1000,
            quantityOrdered: 2, discount: 50
        }, {
            OrderedId: "o103", orderDate: new Date("2020-02-13"), customerName: "Gautam", price: 1000,
            quantityOrdered: 2, discount: 150
        }, {
            OrderedId: "o104", orderDate: new Date("2020-02-14"), customerName: "Darshan", price: 1000,
            quantityOrdered: 1, discount: 100
        }]
    },
    {
        _id: 2, bookId: "b102", bookTitle: "The Secret 2", authors: ["Rhonda Byrne", "Bob Proctor"], publicationYear: 2006, publisher: "Atria Publishing Group",
        orders: [{
            OrderedId: "o101", orderDate: new Date("2020-02-11"), customerName: "Jainam", price: 1000,
            quantityOrdered: 1, discount: 100
        }, {
            OrderedId: "o102", orderDate: new Date("2020-02-12"), customerName: "Rahil", price: 1000,
            quantityOrdered: 2, discount: 50
        }, {
            OrderedId: "o103", orderDate: new Date("2020-02-13"), customerName: "Gautam", price: 1000,
            quantityOrdered: 2, discount: 150
        }]
    },
    {
        _id: 3, bookId: "b103", bookTitle: "The Secret 3", authors: ["Rhonda Byrne", "Esther Hicks"], publicationYear: 2006, publisher: "Atria Publishing Group",
        orders: [{
            OrderedId: "o101", orderDate: new Date("2020-02-11"), customerName: "Jainam", price: 1000,
            quantityOrdered: 1, discount: 100
        }, {
            OrderedId: "o102", orderDate: new Date("2020-02-12"), customerName: "Rahil", price: 1000,
            quantityOrdered: 2, discount: 50
        }, {
            OrderedId: "o103", orderDate: new Date("2020-02-13"), customerName: "Gautam", price: 1000,
            quantityOrdered: 2, discount: 150
        }, {
            OrderedId: "o104", orderDate: new Date("2020-02-14"), customerName: "Darshan", price: 1000,
            quantityOrdered: 1, discount: 100
        }]
    },
    {
        _id: 4, bookId: "b104", bookTitle: "The Secret 4", authors: ["Rhonda Byrne", "Bob Proctor"], publicationYear: 2006, publisher: "Beyond Words Publishing",
        orders: [{
            OrderedId: "o101", orderDate: new Date("2020-02-11"), customerName: "Jainam", price: 1000,
            quantityOrdered: 1, discount: 100
        }, {
            OrderedId: "o102", orderDate: new Date("2020-02-12"), customerName: "Rahil", price: 1000,
            quantityOrdered: 2, discount: 50
        }, {
            OrderedId: "o103", orderDate: new Date("2020-02-13"), customerName: "Gautam", price: 1000,
            quantityOrdered: 2, discount: 150
        }]
    },
    {
        _id: 5, bookId: "b105", bookTitle: "The Secret 5", authors: ["Rhonda Byrne"], publicationYear: 2006, publisher: "Atria Publishing Group",
        orders: [{
            OrderedId: "o101", orderDate: new Date("2020-02-11"), customerName: "Jainam", price: 1000,
            quantityOrdered: 1, discount: 100
        }, {
            OrderedId: "o102", orderDate: new Date("2020-02-12"), customerName: "Rahil", price: 1000,
            quantityOrdered: 2, discount: 50
        }]
    },
    {
        _id: 6, bookId: "b106", bookTitle: "The Secret 6", authors: ["Rhonda Byrne", "EstherHicks", "Esther Hicks"], publicationYear: 2006, publisher: "Beyond Words Publishing",
        orders: [{
            OrderedId: "o101", orderDate: new Date("2020-02-11"), customerName: "Jainam", price: 1000,
            quantityOrdered: 1, discount: 100
        }, {
            OrderedId: "o102", orderDate: new Date("2020-02-12"), customerName: "Rahil", price: 1000,
            quantityOrdered: 2, discount: 50
        }, {
            OrderedId: "o103", orderDate: new Date("2020-02-13"), customerName: "Gautam", price: 1000,
            quantityOrdered: 2, discount: 150
        }]
    },
    {
        _id: 7, bookId: "b107", bookTitle: "The Secret 7", authors: ["Rhonda Byrne", "BobProctor", "Esther Hicks"], publicationYear: 2006, publisher: "Atria Publishing Group",
        orders: [{
            OrderedId: "o103", orderDate: new Date("2020-02-13"), customerName: "Gautam", price: 1000,
            quantityOrdered: 2, discount: 150
        }, {
            OrderedId: "o104", orderDate: new Date("2020-02-14"), customerName: "Darshan", price: 1000,
            quantityOrdered: 1, discount: 100
        }]
    },
    {
        _id: 8, bookId: "b108", bookTitle: "The Secret 8", authors: ["Rhonda Byrne"], publicationYear: 2006, publisher: "Beyond Words Publishing",
        orders: [{
            OrderedId: "o101", orderDate: new Date("2020-02-11"), customerName: "Jainam", price: 1000,
            quantityOrdered: 1, discount: 100
        }, {
            OrderedId: "o102", orderDate: new Date("2020-02-12"), customerName: "Rahil", price: 1000,
            quantityOrdered: 2, discount: 50
        }, {
            OrderedId: "o103", orderDate: new Date("2020-02-13"), customerName: "Gautam", price: 1000,
            quantityOrdered: 2, discount: 150
        }]
    },
    {
        _id: 9, bookId: "b109", bookTitle: "The Secret 9", authors: ["Rhonda Byrne", "Esther Hicks"], publicationYear: 2006, publisher: "Atria Publishing Group",
        orders: [{
            OrderedId: "o101", orderDate: new Date("2020-02-11"), customerName: "Jainam", price: 1000,
            quantityOrdered: 1, discount: 100
        }, {
            OrderedId: "o102", orderDate: new Date("2020-02-12"), customerName: "Rahil", price: 1000,
            quantityOrdered: 2, discount: 50
        }, {
            OrderedId: "o104", orderDate: new Date("2020-02-14"), customerName: "Darshan", price: 1000,
            quantityOrdered: 1, discount: 100
        }]
    },
    {
        _id: 10, bookId: "b110", bookTitle: "The Secret 10", authors: ["Rhonda Byrne", "BobProctor", "Esther Hicks"], publicationYear: 2006, publisher: "Beyond Words Publishing",
        orders: [{
            OrderedId: "o102", orderDate: new Date("2020-02-12"), customerName: "Rahil", price: 1000,
            quantityOrdered: 2, discount: 50
          },
          {
            OrderedId: "o103", orderDate: new Date("2020-02-13"), customerName: "Gautam", price: 1000,
            quantityOrdered: 2, discount: 150
          },
          {
            OrderedId: "o104", orderDate: new Date("2020-02-14"), customerName: "Darshan", price: 1000,
            quantityOrdered: 1, discount: 100
        }]
    },
])

db.Books.find()

>    db.Books.find()
/*
{ "_id" : 1, "bookId" : "b101", "bookTitle" : "The Secret 1", "authors" : [ "Rhonda Byrne" ], "publicationYear" : 2006, "publisher" : "Atria Publishing Group", "orders" : [ { "OrderedId" : "o101", "orderDate" : ISODate("2020-02-11T00:00:00Z"), "customerName" : "Jainam", "price" : 1000, "quantityOrdered" : 1, "discount" : 100 }, { "OrderedId" : "o102", "orderDate" : ISODate("2020-02-12T00:00:00Z"), "customerName" : "Rahil", "price" : 1000, "quantityOrdered" : 2, "discount" : 50 }, { "OrderedId" : "o103", "orderDate" : ISODate("2020-02-13T00:00:00Z"), "customerName" : "Gautam", "price" : 1000, "quantityOrdered" : 2, "discount" : 150 }, { "OrderedId" : "o104", "orderDate" : ISODate("2020-02-14T00:00:00Z"), "customerName" : "Darshan", "price" : 1000, "quantityOrdered" : 1, "discount" : 100 } ] }
{ "_id" : 2, "bookId" : "b102", "bookTitle" : "The Secret 2", "authors" : [ "Rhonda Byrne", "Bob Proctor" ], "publicationYear" : 2006, "publisher" : "Atria Publishing Group", "orders" : [ { "OrderedId" : "o101", "orderDate" : ISODate("2020-02-11T00:00:00Z"), "customerName" : "Jainam", "price" : 1000, "quantityOrdered" : 1, "discount" : 100 }, { "OrderedId" : "o102", "orderDate" : ISODate("2020-02-12T00:00:00Z"), "customerName" : "Rahil", "price" : 1000, "quantityOrdered" : 2, "discount" : 50 }, { "OrderedId" : "o103", "orderDate" : ISODate("2020-02-13T00:00:00Z"), "customerName" : "Gautam", "price" : 1000, "quantityOrdered" : 2, "discount" : 150 } ] }
{ "_id" : 3, "bookId" : "b103", "bookTitle" : "The Secret 3", "authors" : [ "Rhonda Byrne", "Esther Hicks" ], "publicationYear" : 2006, "publisher" : "Atria Publishing Group", "orders" : [ { "OrderedId" : "o101", "orderDate" : ISODate("2020-02-11T00:00:00Z"), "customerName" : "Jainam", "price" : 1000, "quantityOrdered" : 1, "discount" : 100 }, { "OrderedId" : "o102", "orderDate" : ISODate("2020-02-12T00:00:00Z"), "customerName" : "Rahil", "price" : 1000, "quantityOrdered" : 2, "discount" : 50 }, { "OrderedId" : "o103", "orderDate" : ISODate("2020-02-13T00:00:00Z"), "customerName" : "Gautam", "price" : 1000, "quantityOrdered" : 2, "discount" : 150 }, { "OrderedId" : "o104", "orderDate" : ISODate("2020-02-14T00:00:00Z"), "customerName" : "Darshan", "price" : 1000, "quantityOrdered" : 1, "discount" : 100 } ] }
{ "_id" : 4, "bookId" : "b104", "bookTitle" : "The Secret 4", "authors" : [ "Rhonda Byrne", "Bob Proctor" ], "publicationYear" : 2006, "publisher" : "Beyond Words Publishing", "orders" : [ { "OrderedId" : "o101", "orderDate" : ISODate("2020-02-11T00:00:00Z"), "customerName" : "Jainam", "price" : 1000, "quantityOrdered" : 1, "discount" : 100 }, { "OrderedId" : "o102", "orderDate" : ISODate("2020-02-12T00:00:00Z"), "customerName" : "Rahil", "price" : 1000, "quantityOrdered" : 2, "discount" : 50 }, { "OrderedId" : "o103", "orderDate" : ISODate("2020-02-13T00:00:00Z"), "customerName" : "Gautam", "price" : 1000, "quantityOrdered" : 2, "discount" : 150 } ] }
{ "_id" : 5, "bookId" : "b105", "bookTitle" : "The Secret 5", "authors" : [ "Rhonda Byrne" ], "publicationYear" : 2006, "publisher" : "Atria Publishing Group", "orders" : [ { "OrderedId" : "o101", "orderDate" : ISODate("2020-02-11T00:00:00Z"), "customerName" : "Jainam", "price" : 1000, "quantityOrdered" : 1, "discount" : 100 }, { "OrderedId" : "o102", "orderDate" : ISODate("2020-02-12T00:00:00Z"), "customerName" : "Rahil", "price" : 1000, "quantityOrdered" : 2, "discount" : 50 } ] }
{ "_id" : 6, "bookId" : "b106", "bookTitle" : "The Secret 6", "authors" : [ "Rhonda Byrne", "EstherHicks", "Esther Hicks" ], "publicationYear" : 2006, "publisher" : "Beyond Words Publishing", "orders" : [ { "OrderedId" : "o101", "orderDate" : ISODate("2020-02-11T00:00:00Z"), "customerName" : "Jainam", "price" : 1000, "quantityOrdered" : 1, "discount" : 100 }, { "OrderedId" : "o102", "orderDate" : ISODate("2020-02-12T00:00:00Z"), "customerName" : "Rahil", "price" : 1000, "quantityOrdered" : 2, "discount" : 50 }, { "OrderedId" : "o103", "orderDate" : ISODate("2020-02-13T00:00:00Z"), "customerName" : "Gautam", "price" : 1000, "quantityOrdered" : 2, "discount" : 150 } ] }
{ "_id" : 7, "bookId" : "b107", "bookTitle" : "The Secret 7", "authors" : [ "Rhonda Byrne", "BobProctor", "Esther Hicks" ], "publicationYear" : 2006, "publisher" : "Atria Publishing Group", "orders" : [ { "OrderedId" : "o103", "orderDate" : ISODate("2020-02-13T00:00:00Z"), "customerName" : "Gautam", "price" : 1000, "quantityOrdered" : 2, "discount" : 150 }, { "OrderedId" : "o104", "orderDate" : ISODate("2020-02-14T00:00:00Z"), "customerName" : "Darshan", "price" : 1000, "quantityOrdered" : 1, "discount" : 100 } ] }
{ "_id" : 8, "bookId" : "b108", "bookTitle" : "The Secret 8", "authors" : [ "Rhonda Byrne" ], "publicationYear" : 2006, "publisher" : "Beyond Words Publishing", "orders" : [ { "OrderedId" : "o101", "orderDate" : ISODate("2020-02-11T00:00:00Z"), "customerName" : "Jainam", "price" : 1000, "quantityOrdered" : 1, "discount" : 100 }, { "OrderedId" : "o102", "orderDate" : ISODate("2020-02-12T00:00:00Z"), "customerName" : "Rahil", "price" : 1000, "quantityOrdered" : 2, "discount" : 50 }, { "OrderedId" : "o103", "orderDate" : ISODate("2020-02-13T00:00:00Z"), "customerName" : "Gautam", "price" : 1000, "quantityOrdered" : 2, "discount" : 150 } ] }
{ "_id" : 9, "bookId" : "b109", "bookTitle" : "The Secret 9", "authors" : [ "Rhonda Byrne", "Esther Hicks" ], "publicationYear" : 2006, "publisher" : "Atria Publishing Group", "orders" : [ { "OrderedId" : "o101", "orderDate" : ISODate("2020-02-11T00:00:00Z"), "customerName" : "Jainam", "price" : 1000, "quantityOrdered" : 1, "discount" : 100 }, { "OrderedId" : "o102", "orderDate" : ISODate("2020-02-12T00:00:00Z"), "customerName" : "Rahil", "price" : 1000, "quantityOrdered" : 2, "discount" : 50 }, { "OrderedId" : "o104", "orderDate" : ISODate("2020-02-14T00:00:00Z"), "customerName" : "Darshan", "price" : 1000, "quantityOrdered" : 1, "discount" : 100 } ] }
{ "_id" : 10, "bookId" : "b110", "bookTitle" : "The Secret 10", "authors" : [ "Rhonda Byrne", "BobProctor", "Esther Hicks" ], "publicationYear" : 2006, "publisher" : "Beyond Words Publishing", "orders" : [ { "OrderedId" : "o102", "orderDate" : ISODate("2020-02-12T00:00:00Z"), "customerName" : "Rahil", "price" : 1000, "quantityOrdered" : 2, "discount" : 50 }, { "OrderedId" : "o103", "orderDate" : ISODate("2020-02-13T00:00:00Z"), "customerName" : "Gautam", "price" : 1000, "quantityOrdered" : 2, "discount" : 150 }, { "OrderedId" : "o104", "orderDate" : ISODate("2020-02-14T00:00:00Z"), "customerName" : "Darshan", "price" : 1000, "quantityOrdered" : 1, "discount" : 100 } ] }
*/

var map = function(){
    for(var i = 0; i < this.orders.length; i++)
    {
           var key = this.orders[i].orderDate;
           var values = { count :1,qtyOrder:this.orders[i].quantityOrdered};
           emit(key,values);
    }
}

var reduce = function(key_obj,count_obj){
reduceval={count:0,qtyOrder:0}
for(var i=0;idx<countqty.length;idx++)
{
    reduceval.count = reduceval.count+countqty[idx].count;
    reduceval.qty = reduceval.qty+countqty[idx].qty;
}
return reduceval;
}

db.Orders.mapReduce(map,reduce,{out:"Example_order",query:{Status:"A"}})

db.Example_order.find().pretty()


// 1. Use MapReduce function to display the total quantity of books ordered for 
//   each date.

var map = function(){
    for(var i = 0; i < this.quantityOrdered.length; i++)
    {
           var key = this.Items[i].sku;
           var values = { count :1,qty:this.Items[i].qty};
           emit(key,b=values);
    }
}

var reduce = function(keysku,countqty){
reduceval={count:0,qty:0}
for(var idx=0;idx<countqty.length;idx++)
{
    reduceval.count = reduceval.count+countqty[idx].count;
    reduceval.qty = reduceval.qty+countqty[idx].qty;
}
return reduceval;
}

db.Orders.mapReduce(map,reduce,{out:"Example_order",query:{Status:"A"}})

db.Example_order.find().pretty()


