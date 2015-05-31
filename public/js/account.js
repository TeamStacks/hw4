
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
	    window.location.href="./wire2.html";
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
	    	window.location.href="./wire2.html";
		},
		error: function(user, error) {
	    	alert("Error: " + error.code + " " + error.message);
		}
	});


}

function logfb() {
	Parse.FacebookUtils.logIn(null, {
  success: function(user) {
    if (!user.existed()) {
      alert("You have signed up and logged in through Facebook!");
      window.location.href="./wire2.html";
    } else {
      //alert("You logged in through Facebook!");
      window.location.href="./wire2.html";
    }
  },
  error: function(user, error) {
    alert("You cancelled the Facebook login or did not fully authorize.");
  }
});
}

function linkfb() {
	var user = Parse.User.current();
	if (!Parse.FacebookUtils.isLinked(user)) {
  		Parse.FacebookUtils.link(user, null, {
    		success: function(user) {
      			alert("Woohoo, you have linked your account with Facebook!");
      			document.getElementById('fblink').innerHTML = "Unlink Facebook";
    		},
    		error: function(user, error) {
      			alert("You cancelled the Facebook login or did not fully authorize.");
    		}
  		});
	}
  	else {
  		Parse.FacebookUtils.unlink(user, {
  			success: function(user) {
    			alert("Your account is no longer associated with your Facebook account.");
    			document.getElementById('fblink').innerHTML = "Link Facebook";
  			}
		});
  	}
}


function logOut() {
	Parse.User.logOut();
	    alert("You have successfully logged out.");
	    window.location.href="./index.html"
}

function update() {
	newpass = document.getElementById('pass').value;
	var user = Parse.User.current();
	user.set("password", newpass);

	user.save(null, {
	  success: function(user) {
		alert("Your profile has been updated.");
	  },
	  error: function(user, error) {
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});
}

function verify() {
	var currentUser = Parse.User.current();
	if (currentUser) {
		Parse.User.current().fetch().then(function (user) {
    		document.getElementById('user').innerHTML = user.get('username');
    		if (Parse.FacebookUtils.isLinked(user)) {
    			document.getElementById('fblink').innerHTML = "Unlink Facebook";
    		}
		});
	} else {
	    window.location.href="./index.html"
	}
}

function verifyFirst() {
	var currentUser = Parse.User.current();
	if (currentUser) {
	    window.location.href="./wire2.html"
	}
}