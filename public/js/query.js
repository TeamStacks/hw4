function parseURLParams() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(ms, key,value) {
    	console.log("key: " + key + " value: " + value);
        params[key] = value;
    });
    return params;
}

function populateTable(metalFrom) {
    var query = new Parse.Query(Parse.Object.extend("Inventory"));
    var info = {};

    query.get(Parse.User.current().id, {
    	success: function(results) {
    		for (var i = 0; i < results.length; i++) {
    			var curr = results[i]; // all coins in user's inventory
    			if (coin.get("metal") == metalFrom) {
    				addToTable();
    			}
    				
    		}
    		
    	},
    	error: function (inventory, error){
    		alert("You do not have any coins added.");
    	}
    });

    
}

function addToTable(metalId, invenId, coinId) {
    if (metalId.imageURL == null) {
        var col1 = '<td class="stack_img_col"><div class="coin_mini"></div></td>';
    }
    else {
        var col1 = '<td class="stack_img_col"><img class="img_mini" src="'+metalId.imageURL+'"></td>';
    }
    var col2 = '<td>' + metalId.coinType + '</td>';
    var col3 = '<td>' + inventories[invenId].quantity + '</td>';
    var col4 = '<td>' + metalId.weightPerUnit + '</td>';
    var col5 = '<td>' + metalId.metalPercentage + '</td>';
    var col6 = '<td>' + inventories[invenId].totalValue.toFixed(4) + '</td>';

    $('#inventory > tbody')
        .append($('<tr></tr>').attr('onclick', 'inspectCoin(this)')
            .attr('id', coinId).append(col1, col2, col3, col4, col5, col6));
}
