function parseURLParams() {
    var params = {};
    window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(ms, key,value) {
    	console.log("key: " + key + " value: " + value);
        params[key] = value;
    });
    return params;
}

function queryOwnedCoins(metal, success) {
    var query = new Parse.Query(Parse.Object.extend("Coin"));
    query.equalTo("ownedBy", Parse.User.current());
    query.addAscending("purchaseDate");

    query.find({
        success: function (queryResults) {
            if (metal === undefined) {
                success(queryResults)
            } else {
                var results = [];

                for (var i = 0; i < queryResults.length; i++) {
                    if (queryResults[i].get("metal") == metal) {
                        results.push(queryResults[i]);
                    }
                }

                success(results);
            }
        },
        error: function (error) {
            alert("You do not have any coins added. " + error);
        }
    });
}

function populateTable(metalFrom) {
    queryOwnedCoins(metalFrom, function (results) {
        for (var i = 0; i < results.length; i++) {
            var curr = results[i]; // all coins in user's inventory

            if (curr.get("imageURL") == null) {
                var col1 = '<td class="stack_img_col"><div class="coin_mini"></div></td>';
            } else {
                var col1 = '<td class="stack_img_col"><img class="img_mini" src="' + curr.get("imageURL") + '"></td>';
            }

            var col2 = '<td>' + curr.get("type") + '</td>';
            var col3 = '<td>' + curr.get("quantity") + '</td>';
            var col4 = '<td>' + curr.get("weightPerUnit") + '</td>';
            var col5 = '<td>' + curr.get("metalPercentage") + '</td>';
            var col6 = '<td>' + curr.get("value").toFixed(4) + '</td>';

            $('#inventory > tbody')
                .append($('<tr></tr>').attr('onclick', 'inspectCoin(this)')
                    .attr('id', curr.id).append(col1, col2, col3, col4, col5, col6));
        }
    });
}