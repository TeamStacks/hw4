$(document).ready(function() {
    var Gold = Parse.Object.extend("gold_usd");
    var query = new Parse.Query(Gold);

    query.descending("Date");
    query.limit(2);
    query.find({
        success: function(results) {
            var thisWeek = results[0];
            var lastWeek = results[1];
            var change = (thisWeek.get('ask_avg') - lastWeek.get('ask_avg')).toFixed(2);

            $('#gold_bid').html(thisWeek.get('bid_avg'));
            $('#gold_ask').html(thisWeek.get('ask_avg'));
            $('#gold_change').html(change > 0 ? "+" + change : change);
        }
    });

    var Silver = Parse.Object.extend("silver_usd");
    var query = new Parse.Query(Silver);

    query.descending("Date");
    query.limit(2);
    query.find({
        success: function(results) {
            var thisWeek = results[0];
            var lastWeek = results[1];
            var change = (thisWeek.get('ask_avg') - lastWeek.get('ask_avg')).toFixed(2);

            $('#silver_bid').html(thisWeek.get('bid_avg'));
            $('#silver_ask').html(thisWeek.get('ask_avg'));
            $('#silver_change').html(change > 0 ? "+" + change : change);
        }
    });

    var Plat = Parse.Object.extend("plat_usd");
    var query = new Parse.Query(Plat);

    query.descending("Date");
    query.limit(2);
    query.find({
        success: function(results) {
            var thisWeek = results[0];
            var lastWeek = results[1];
            var change = (thisWeek.get('ask_avg') - lastWeek.get('ask_avg')).toFixed(2);

            $('#plat_bid').html(thisWeek.get('bid_avg'));
            $('#plat_ask').html(thisWeek.get('ask_avg'));
            $('#plat_change').html(change > 0 ? "+" + change : change);
        }
    });
});