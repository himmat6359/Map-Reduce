 // Create Sales collection and insert documents
// use Sales

 db.createCollection("Sales");

db.Sales.insertMany([
    { 
        customerId: 1,
        customerName: "Himmat", 
        gender: "Male", 
        contactNumber: "1234567890",
        address: { 
            houseNo: "123",
            street: "Syamal Street",
            area: "AnandNagar",
            city: "Ahmedabad",
            pincode: "380001"
        },
        item: { 
            itemId: 1,
            itemName: "Laptop", 
            itemPrice: 1000,
            quantityOrdered: 2 
        },
        orders: {
            orderId: 1,
            orderDate: ISODate("2023-03-20")
        }
    },
    { 
        customerId: 2, 
        customerName: "Smith", 
        gender: "Female",
        address: { 
            houseNo: "456",
            street: "odhav",
            area: "West End",
            city: "Mumbai",
            pincode: "400001"
        },  
        item: { 
            itemId: 2,
            itemName: "Phone",
            itemPrice: 500, 
            quantityOrdered: 5 
        },
        orders: {
            orderId: 2,
            orderDate: ISODate("2023-04-10")
        }
    },
    { 
        customerId: 3, 
        customerName: "Naman",
        gender: "Female",
        contactNumber: "9876543210",
        address: { 
            houseNo: "789", 
            street: "Elm Street", 
            area: "East Side",
            city: "Ahmedabad",
            pincode: "380002"
        }, 
        item: { 
            itemId: 4,
            itemName: "Headphones", 
            itemPrice: 50, 
            quantityOrdered: 10 
        },
        orders: {
            orderId: 3,
            orderDate: ISODate("2023-10-12")
        }
    }
]);

// Update the contact number of a particular customer
db.Sales.updateOne({ customerId: 2 }, { $set: { contactNumber: "9998887776" } });
// { "acknowledged" : true, "matchedCount" : 1, "modifiedCount" : 1 }
 
// Display customerId, customerName, gender, contactNumber of customers residing in “Ahmedabad”
db.Sales.find({ "address.city": "Ahmedabad" }, { customerId: 1, customerName: 1, gender: 1, contactNumber: 1 });
// { "_id" : ObjectId("66101cb50f32a7d1ec426978"), "customerId" : 1, "customerName" : "Himmat", "gender" : "Male", "contactNumber" : "1234567890" }
// { "_id" : ObjectId("66101cb50f32a7d1ec42697a"), "customerId" : 3, "customerName" : "Naman", "gender" : "Female", "contactNumber" : "9876543210" }

// Display city-wise count of customers
db.Sales.aggregate([
    { $group: { _id: "$address.city", count: { $sum: 1 } } }
]);

// { "_id" : "Mumbai", "count" : 1 }
// { "_id" : "Ahmedabad", "count" : 2 }

// Use MapReduce function to display the number of times each item was sold
var mapFunction = function() {
    emit(this.item.itemId, 1);
    emit(this.orders.orderId, 1);
};

var reduceFunction = function(key, values) {
    return Array.sum(values);
};

db.Sales.mapReduce(
    mapFunction,
    reduceFunction,
    { out: "item_sales_count" }
);

db.item_sales_count.find();

db.item_sales_count.find();
// { "_id" : 2, "value" : 2 }
// { "_id" : 3, "value" : 1 }
// { "_id" : 4, "value" : 1 }
// { "_id" : 1, "value" : 2 }

