 
//  Create a Hotel database with a collection called “HotelBookings”,
//  containing documents with some or all of the following 
//  fields: HotelId, HotelName,
//  HotelType(Note: An array is expected, Example: 1 Star, 2 Star etc.),
//  TotNoOfRooms, CityName, and 
//  DateOfRegistration (Note: Use Proper Date format), 
//  ContactNumber, 
//  Ratings, 
//  Owners (containing fields: OwnerName)  and
//  Bookings (containing fields:BookingId, BookingDate, 
// 			RoomType (Note: An array is expected, Example: Deluxe, Double,Twin etc.), 
// 			CustomerName, NoOfRoomsBooked, Price, Discount) .

			

// use Hotel
 
// use Hotel
db.HotelBookings.insert({
    _id: 1,
    HotelId: "HOT0395",
    HotelName: "Hotel ABC",
    HotelType: ["1 Star", "2 Star"],
    TotNoOfRooms: 10,
    CityName: "Surat",
    DateOfRegistration: new Date("2022-01-21"),
    ContactNumber: "1234567890",
    Ratings: 4.5,
    Owners: ["Ratan Tata", "Adani"],
    Bookings: [
      {
        BookingId: 101,
        BookingDate: new Date("2023-02-05"),
        RoomType: ["Double", "Twin"],
        CustomerName: "Mr. Nath",
        NoOfRoomsBooked: 1,
        Price: 1650,
        Discount: 150
      },
      {
        BookingId: 102,
        BookingDate: new Date("2023-04-05"),
        RoomType: ["Double", "Twin"],
        CustomerName: "Mr. Singh",
        NoOfRoomsBooked: 2,
        Price: 3600,
        Discount: 270
      },
      {
        BookingId: 103,
        BookingDate: new Date("2023-10-05"),
        RoomType: ["Double", "Twin"],
        CustomerName: "Mrs. Soni",
        NoOfRoomsBooked: 1,
        Price: 1260,
        Discount: 50
      }
    ]
  })
  
  db.HotelBookings.insert({
    _id: 2,
    HotelId: "HOT2659",
    HotelName: "Grand Plaza",
    HotelType: ["3 Star", "4 Star"],
    TotNoOfRooms: 20,
    CityName: "Mumbai",
    DateOfRegistration: new Date("2022-03-15"),
    ContactNumber: "9876543210",
    Ratings: 4.2,
    Owners: ["XYZ Group"],
    Bookings: [
      {
        BookingId: 201,
        BookingDate: new Date("2023-07-20"),
        RoomType: ["Deluxe", "Suite"],
        CustomerName: "Ms. Patel",
        NoOfRoomsBooked: 1,
        Price: 2500,
        Discount: 200
      },
      {
        BookingId: 202,
        BookingDate: new Date("2023-09-10"),
        RoomType: ["Single", "Double"],
        CustomerName: "Mr. Sharma",
        NoOfRoomsBooked: 3,
        Price: 4200,
        Discount: 350
      }
    ]
  })
  
  
  db.HotelBookings.insert({
    _id: 3,
    HotelId: "HOT3951",
    HotelName: "Taj Hotel",
    HotelType: ["5 Star"],
    TotNoOfRooms: 30,
    CityName: "Goa",
    DateOfRegistration: new Date("2022-05-10"),
    ContactNumber: "9871234560",
    Ratings: 4.8,
    Owners: ["Ratan Tata"],
    Bookings: [
      {
        BookingId: 301,
        BookingDate: new Date("2023-05-28"),
        RoomType: ["Ocean View", "Luxury"],
        CustomerName: "Mr. Patel",
        NoOfRoomsBooked: 2,
        Price: 7000,
        Discount: 500
      }
    ]
  })
  
  
  db.HotelBookings.insert({
    _id: 4,
    HotelId: "HOT2156",
    HotelName: "Mountain Lodge",
    HotelType: ["2 Star", "3 Star"],
    TotNoOfRooms: 32,
    CityName: "Shimla",
    DateOfRegistration: new Date("2022-06-25"),
    ContactNumber: "9998887770",
    Ratings: 4.0,
    Owners: ["Ms. Malik"],
    Bookings: [
  {
        BookingId: 301,
        BookingDate: new Date("2023-06-28"),
        RoomType: ["Ocean View", "Luxury"],
        CustomerName: "Mr. Patel",
        NoOfRoomsBooked: 2,
        Price: 6000,
        Discount: 500
          }
      ]
  })
  
  
  db.HotelBookings.insert({
    _id: 5,
    HotelId: "HOT3654",
    HotelName: "Blue Stay Inn",
    HotelType: ["Budget"],
    TotNoOfRooms: 45,
    CityName: "New York",
    DateOfRegistration: new Date("2022-08-17"),
    ContactNumber: "1234567890",
    Ratings: 3.5,
    Owners: ["Mr. Amar Singh"],
    Bookings: [
      {
        BookingId: 501,
        BookingDate: new Date("2023-11-15"),
        RoomType: ["Standard", "Economy"],
        CustomerName: "Ms. Seth",
        NoOfRoomsBooked: 1,
        Price: 900,
        Discount: 50
      },
      {
        BookingId: 502,
        BookingDate: new Date("2024-01-03"),
        RoomType: ["Standard", "Economy"],
        CustomerName: "Mr. Peter",
        NoOfRoomsBooked: 2,
        Price: 1800,
        Discount: 100
      }
    ]
  })

//   db.HotelBookings.find()
//   { "_id" : 1, "HotelId" : "HOT0395", "HotelName" : "Hotel ABC", "HotelType" : [ "1 Star", "2 Star" ], "TotNoOfRooms" : 10, "CityName" : "Surat", "DateOfRegistration" : ISODate("2022-01-21T00:00:00Z"), "ContactNumber" : "1234567890", "Ratings" : 4.5, "Owners" : [ "Ratan Tata", "Adani" ], "Bookings" : [ { "BookingId" : 101, "BookingDate" : ISODate("2023-02-05T00:00:00Z"), "RoomType" : [ "Double", "Twin" ], "CustomerName" : "Mr. Nath", "NoOfRoomsBooked" : 1, "Price" : 1650, "Discount" : 150 }, { "BookingId" : 102, "BookingDate" : ISODate("2023-04-05T00:00:00Z"), "RoomType" : [ "Double", "Twin" ], "CustomerName" : "Mr. Singh", "NoOfRoomsBooked" : 2, "Price" : 3600, "Discount" : 270 }, { "BookingId" : 103, "BookingDate" : ISODate("2023-10-05T00:00:00Z"), "RoomType" : [ "Double", "Twin" ], "CustomerName" : "Mrs. Soni", "NoOfRoomsBooked" : 1, "Price" : 1260, "Discount" : 50 } ] }
//   { "_id" : 2, "HotelId" : "HOT2659", "HotelName" : "Grand Plaza", "HotelType" : [ "3 Star", "4 Star" ], "TotNoOfRooms" : 20, "CityName" : "Mumbai", "DateOfRegistration" : ISODate("2022-03-15T00:00:00Z"), "ContactNumber" : "9876543210", "Ratings" : 4.2, "Owners" : [ "XYZ Group" ], "Bookings" : [ { "BookingId" : 201, "BookingDate" : ISODate("2023-07-20T00:00:00Z"), "RoomType" : [ "Deluxe", "Suite" ], "CustomerName" : "Ms. Patel", "NoOfRoomsBooked" : 1, "Price" : 2500, "Discount" : 200 }, { "BookingId" : 202, "BookingDate" : ISODate("2023-09-10T00:00:00Z"), "RoomType" : [ "Single", "Double" ], "CustomerName" : "Mr. Sharma", "NoOfRoomsBooked" : 3, "Price" : 4200, "Discount" : 350 } ] }
//   { "_id" : 3, "HotelId" : "HOT3951", "HotelName" : "Taj Hotel", "HotelType" : [ "5 Star" ], "TotNoOfRooms" : 30, "CityName" : "Goa", "DateOfRegistration" : ISODate("2022-05-10T00:00:00Z"), "ContactNumber" : "9871234560", "Ratings" : 4.8, "Owners" : [ "Ratan Tata" ], "Bookings" : [ { "BookingId" : 301, "BookingDate" : ISODate("2023-05-28T00:00:00Z"), "RoomType" : [ "Ocean View", "Luxury" ], "CustomerName" : "Mr. Patel", "NoOfRoomsBooked" : 2, "Price" : 7000, "Discount" : 500 } ] }
//   { "_id" : 4, "HotelId" : "HOT2156", "HotelName" : "Mountain Lodge", "HotelType" : [ "2 Star", "3 Star" ], "TotNoOfRooms" : 32, "CityName" : "Shimla", "DateOfRegistration" : ISODate("2022-06-25T00:00:00Z"), "ContactNumber" : "9998887770", "Ratings" : 4, "Owners" : [ "Ms. Malik" ], "Bookings" : [ { "BookingId" : 301, "BookingDate" : ISODate("2023-06-28T00:00:00Z"), "RoomType" : [ "Ocean View", "Luxury" ], "CustomerName" : "Mr. Patel", "NoOfRoomsBooked" : 2, "Price" : 6000, "Discount" : 500 } ] }
//   { "_id" : 5, "HotelId" : "HOT3654", "HotelName" : "Blue Stay Inn", "HotelType" : [ "Budget" ], "TotNoOfRooms" : 45, "CityName" : "New York", "DateOfRegistration" : ISODate("2022-08-17T00:00:00Z"), "ContactNumber" : "1234567890", "Ratings" : 3.5, "Owners" : [ "Mr. Amar Singh" ], "Bookings" : [ { "BookingId" : 501, "BookingDate" : ISODate("2023-11-15T00:00:00Z"), "RoomType" : [ "Standard", "Economy" ], "CustomerName" : "Ms. Seth", "NoOfRoomsBooked" : 1, "Price" : 900, "Discount" : 50 }, { "BookingId" : 502, "BookingDate" : ISODate("2024-01-03T00:00:00Z"), "RoomType" : [ "Standard", "Economy" ], "CustomerName" : "Mr. Peter", "NoOfRoomsBooked" : 2, "Price" : 1800, "Discount" : 100 } ] }
  
 
// 1.	Display only the HotelName’s, where TotNoOfRooms is greater than 35.


db.HotelBookings.find()
  
  /*
Perform the following operations on the database. (Insert at least 5 documents) 
 
1.	Display only the HotelName’s, where TotNoOfRooms is greater than 35.

2.	Find HotelName and CityName, where HotelId is either “HOT0395” or “HOT2659”.

3.	Display the HotelName’s and DateOfRegistration of hotels, whose TotNoOfRooms is greater than 30 and less than 45.

4.	Modify HotelType of hotel with HotelId: “HOT3951”.

5.	Add a field called “History”, which describes the hotel for documents with HotelId, “HOT2156”, “HOT3951” and “HOT3654”.

7.	Find those documents where the HotelType is not “4 Star”.

8.	Display only the HotelName and DateOfRegistration where HotelName begins with letter “S”.

9.	Display HotelName and ContactNumber in the descending order of the HotelName’s.

10.	Find those hotels where number of owners is 3.


11.	Add an owner “Mr. Mathur” in the list of owners in the document whose HotelId is “HOT0395”.

12.	Create an index on HotelId.

Q.2 Use MapReduce function to display the total Ratings for every hotel, where the HotelType is “5 Star”.
*/