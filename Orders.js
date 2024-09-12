// use Orders

db.createCollection("Orders")

db.Orders.insert(
 { _id:1,
   Cust_id:"Aishwarya",  
   Ord_date: new Date("2021-06-23"),
   Price:50,
   Items:[{ sku:"pen",qty:10,price:2.00},
          { sku:"pencil",qty:6,price:10.00},
          { sku:"eraser",qty:12,price:3.00}],
   Status:"A"
  }
  )
db.Orders.insert(
 { _id:2,
   Cust_id:"Aishwarya",  
   Ord_date: new Date("2021-04-25"),
   Price:50,
   Items:[{ sku:"pen",qty:2,price:2.00},
          { sku:"sharpner",qty:15,price:10.00},
	  { sku:"scale",qty:15,price:10.00}],
   Status:"A"})
   
db.Orders.insert(
 { _id:3,
   Cust_id:"Abhishek",  
   Ord_date: new Date("2021-04-25"),
   Price:50,
   Items:[{ sku:"compass",qty:8,price:2.00},
          { sku:"scale",qty:5,price:10.00},
	  { sku:"pen",qty:4,price:5.00}],
   Status:"A"})
db.Orders.insert(
 { _id:4,
   Cust_id:"Abhishek",  
   Ord_date: new Date("2021-04-25"),
   Price:110,
   Items:[{ sku:"pen",qty:2,price:2.00},
          { sku:"pencil",qty:15,price:10.00}],
   Status:"A"})


//    { "_id" : 1, "Cust_id" : "Aishwarya", "Ord_date" : ISODate("2021-06-23T00:00:00Z"), "Price" : 50, "Items" : [ { "sku" : "pen", "qty" : 10, "price" : 2 }, { "sku" : "pencil", "qty" : 6, "price" : 10 }, { "sku" : "eraser", "qty" : 12, "price" : 3 } ], "Status" : "A" }
//    { "_id" : 2, "Cust_id" : "Aishwarya", "Ord_date" : ISODate("2021-04-25T00:00:00Z"), "Price" : 50, "Items" : [ { "sku" : "pen", "qty" : 2, "price" : 2 }, { "sku" : "sharpner", "qty" : 15, "price" : 10 }, { "sku" : "scale", "qty" : 15, "price" : 10 } ], "Status" : "A" }
//    { "_id" : 3, "Cust_id" : "Abhishek", "Ord_date" : ISODate("2021-04-25T00:00:00Z"), "Price" : 50, "Items" : [ { "sku" : "compass", "qty" : 8, "price" : 2 }, { "sku" : "scale", "qty" : 5, "price" : 10 }, { "sku" : "pen", "qty" : 4, "price" : 5 } ], "Status" : "A" }
//    { "_id" : 4, "Cust_id" : "Abhishek", "Ord_date" : ISODate("2021-04-25T00:00:00Z"), "Price" : 110, "Items" : [ { "sku" : "pen", "qty" : 2, "price" : 2 }, { "sku" : "pencil", "qty" : 15, "price" : 10 } ], "Status" : "A" }
//    >
   //====================================


var map = function(){emit(this.Cust_id,this.Price);}

var reduce = function(key,values){return Array.sum(values);}
       
db.Orders.mapReduce(map,reduce,{out:"Total_price"})

db.Total_price.find().pretty()

> db.Total_price.find().pretty()

// { "_id" : "Abhishek", "value" : 160 }
// { "_id" : "Aishwarya", "value" : 100 }

var map = function(){
       for(var i = 0; i < this.Items.length; i++)
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

 /*
{ "_id" : "compass", "value" : { "count" : 1, "qty" : 8 } }
{ "_id" : "eraser", "value" : { "count" : 1, "qty" : 12 } }
{ "_id" : "pen", "value" : { "count" : 4, "qty" : 18 } }
{ "_id" : "pencil", "value" : { "count" : 2, "qty" : 21 } }
{ "_id" : "scale", "value" : { "count" : 2, "qty" : 20 } }
{ "_id" : "sharpner", "value" : { "count" : 1, "qty" : 15 } }
*/


// var map = function(){
//        for(var i = 0; i < this.Items.length; i++)
//        {
//               var key = this.Items[i].sku;
//               var values = {no_of_item_ordered:1,qty:this.Items[idx].qty,price};
//               emit(key,b=values);
//        }
// }


// var reduce = function(keysku,countqty){
//        reduceval={no_of_item_ordered:0,qty:0,price:0}
//        for(var i=0;i<count_obj.length;idx++)
//           {
//               reduceval.no_of_item_ordered+=count_obj[i].count;
//               reduceval.qty+=count_obj[i],qty;
//               reduceval.price+=count_obj[i].price*reduceval.qty;
//           }
//           return reduceval;
// }

// db.Orders.mapReduce(map,reduce,{out:"Total_order"})

// db.Total_order.find().pretty()



var map=function(){
       for(var i=0;i<this.Items.length;i++){
           var key=this.Items[i].sku;
           var valus={const:1,qty:this.Items[i].qty,price:this.Items[i].price}
           emit(key,valus);
       }
   }
var reduce=function(key,valus){
       use={count:0,qty:0,price:0};
       for(var i=0;i<valus.length;i++){
           use.count=use.count+valus[i].count;
           use.qty=use.qty+valus[i].qty;
           use.price+=valus[i].qty*valus[i].price;
   
       }
       return use;
   }
db.Orders.mapReduce(map,reduce,{out:"Total_Qty"})
db.Total_Qty.find()
