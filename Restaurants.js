// use Restaurants

db.createCollection("Restaurants")

db.Restaurants.insertMany([
                        { "_id" : 1,
                        "RestaurantId" : 1, 
                        "RestaurantName" : "Mirch Masala",
                        "Grades" : [ "A", "A+" ],
                        "Cuisine" : "Kitchen King", 
                        "Address" : [ { "BuildingName" : "Himalaya",
                                        "Street" : "Vastrapur",
                                        "Area" : "Vastrapur Lake", 
                                        "City" : "Ahmedabad",
                                        "ZipCode" : 380052 } ],
                        "DateofEstablishment" : "1-Jan-2008", 
                        "Score" : 90, 
                        "Rating" : 4.9 
                        },
                        { "_id" :2,
                        "RestaurantId" : 2,
                        "RestaurantName" : "Jassi De Parathe",
                        "Grades" : [ "A" ],
                        "Cuisine" : "Kitchen Masala",
                        "Address" : [ { "BuildingName" : "Sarkhej",
                                        "Street" : "Maninagar",
                                         "Area" : "Kankaria Lake",
                                          "City" : "Ahmedabad", 
                                          "ZipCode" : 380052 } ],
                       "DateofEstablishment" : "1-Jan-2008",
                        "Score" : 40, "Rating" : 3.9 
                       },
                         { "_id" : 3,
                        "RestaurantId" : 4,
                        "RestaurantName" : "Nini's Kitchen",
                        "Grades" : [ "A" ],
                        "Cuisine" : "Multi Cuisine",
                        "Address" : [ { "BuildingName" : "Saket-II",
                                    "Street" : "Abc", 
                                    "Area" : "Science City", 
                                    "City" : "Baroda",
                                    "ZipCode" : 380051 } ],
                        "DateofEstablishment" : "1-Jan-2008",
                        "Score" : 40, 
                        "Rating" : 3.9 
                    },
                    { "_id" : 4,
                    "RestaurantId" : 3,
                    "RestaurantName" : "Barbeque Nation",
                    "Grades" : [ "C" ], 
                    "Cuisine" : "Multi Cuisine", 
                    "Address" : [ { "BuildingName" : "Memnagar", 
                                "Street" : "Maninagar",
                                "Area" : "Iskon",
                                "City" : "Surat",
                                "ZipCode" : 380052 } ], 
                    "DateofEstablishment" : "1-Jan-2008", 
                    "Score" : 40,
                    "Rating" : 3.9 },
                    { "_id" : 5,
                    "RestaurantId" : 5, 
                    "RestaurantName" : "Nini's Kitchen",
                    "Grades" : [ "A" ], 
                    "Cuisine" : "Multi Cuisine", 
                    "Address" : [ { "BuildingName" : "Saket-II",
                                    "Street" : "Abc", 
                                    "Area" : "Science City", 
                                    "City" : "Baroda",
                                    "ZipCode" : 380051 } ], 
                    "DateofEstablishment" : "1-Jan-2024",
                    "Score" : 40,
                    "Rating" : 3.9 }
                    ])

// Use MapReduce function to display the avgrage Rating for every restaurant (Note: Group 
// on Restaurant Id), whose Score is less than 50.

 

var mapFunction = function() {
  if (this.Score < 50) {
      emit(this["RestaurantId"], this.Rating);
  }
};

var reduceFunction = function(key, values) {
  return Array.sum(values);
};

db.Restaurants.mapReduce(
  mapFunction,
  reduceFunction,
  { out: "Total_rating :" }
)

// Display the results
db.Total_rating.find()

// { "result" : "Total_rating :", "ok" : 1 }


