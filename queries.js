/* Add all the required libraries*/
var fs = require('fs'),
User = require('./ListingSchema.js'),
mongoose = require('mongoose');
config = require('./config.js');
/* Connect to your database using mongoose - remember to keep your key secret*/

var connection = mongoose.connect(config.db.uri);

/* Fill out these functions using Mongoose queries*/
//Check out - https://mongoosejs.com/docs/queries.html

var findLibraryWest = function() {
  /* 
    Find the document that contains data corresponding to Library West,
    then log it to the console. 
   */
   User.find({name:'Library West'}, function(err,user)
	   {
		   if(err) throw err;
		   console.log(user);
	   });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
   User.findOneAndRemove({code: 'CABL'}, function(err,user)
	   {
		   if(err) throw err;
		   console.log(user);
	   });
};
var updatePhelpsLab = function() {
  /*
    Phelps Lab address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
    
    Correct Address: 1953 Museum Rd, Gainesville, FL 32603

   */
   User.findOneAndUpdate({code: 'PHL'}, {address: '1952 Museum Rd, Gainesville, FL 32603'}, function(err,user)
	   {
		   if(err) throw err;
		   console.log(user);
	   });
};
var retrieveAllListings = function() {
  /* 
    Retrieve all listings in the database, and log them to the console. 
   */
   User.find({}, function(err,users)
	   {
		   if(err) throw err;
		   console.log(users);
	   });
};

findLibraryWest();
removeCable();
updatePhelpsLab();
retrieveAllListings();
