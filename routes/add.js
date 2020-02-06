var data = require("../data.json");

exports.addFriend = function(request, response) {
	// Your code goes here
  var name = request.query.name;
  var description = request.query.description;

  let obj = {
			"name": name,
			"description": description,
			"imageURL": "http://lorempixel.com/400/400/people",
		};

  data.friends.push(obj);
}
