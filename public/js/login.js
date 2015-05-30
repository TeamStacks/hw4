function addStuff() {
	var xhr = new XMLHttpRequest();
	xhr.open("POST", "https://api.parse.com/1/classes/test", true);
	xhr.setRequestHeader("X-Parse-Application-Id", "m8lsJLtBtcOGqT0h9RmcWRIpxpiwyb3Yq6HqrCk2");
	xhr.setRequestHeader("X-Parse-REST-API-Key", "JrtCwMABQRvOOtixhzLAZwk46nhxnUlJBIuxx1NZ");
	xhr.setRequestHeader("Content-Type", "application/json");

	xhr.onreadystatechange = function() {
	  if (xhr.readyState == 4) {
	    var result = JSON.parse(xhr.responseText);
	    if (result.objectId) {
	      alert("saved an object with id: " + result.objectId);
	      
	    }
	  }
	}
	  
	var data = JSON.stringify({ message: "Hello world!" });
	xhr.send(data);

	//document.getElementById("test").innerHTML = "HELLO";

	console.log(xhr.statusText);
	window.location = "http://teamstacks.parseapp.com/wire2.html";
}