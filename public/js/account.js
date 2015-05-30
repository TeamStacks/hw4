
function signUp() {
	name = document.getElementById('user').value;
	pass = document.getElementById('pass').value;

	var user = new Parse.User();
	user.set("username", name);
	user.set("password", pass);
	//user.set("email", "email@example.com");

	// other fields can be set just like with Parse.Object
	//user.set("phone", "415-392-0202");

	user.signUp(null, {
	  success: function(user) {
	  	alert("Your account has been created!");
	    window.location="http://teamstacks.parseapp.com/wire2.html";
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});

}

function logIn() {
	name = document.getElementById('user2').value;
	pass = document.getElementById('pass2').value;
	Parse.User.logIn(name, pass, {
	  	success: function(user) {
		   	//alert("You have successfully logged in!");
	    	window.location="http://teamstacks.parseapp.com/wire2.html";
		},
		error: function(user, error) {
	    	alert("Error: " + error.code + " " + error.message);
		}
	});


}

function logOut() {
	Parse.User.logOut();
	    alert("You have successfully logged out.");
	    window.location="http://teamstacks.parseapp.com"
}

function verify() {
	var currentUser = Parse.User.current();
	if (currentUser) {
	    // do stuff with the user
	} else {
	    window.location="http://teamstacks.parseapp.com"
	}
}

function verifyFirst() {
	var currentUser = Parse.User.current();
	if (currentUser) {
	    window.location="http://teamstacks.parseapp.com/wire2.html"
	}
}