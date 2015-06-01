$(document).ready(function() {
    var metalFrom = parseURLParams()['q'];
    var defaultUrl = window.location.href.indexOf('?q=')

    var Gold = Parse.Object.extend("gold_usd");
    var query = new Parse.Query(Gold);

    query.descending("Date");
    query.limit(2);
    query.find({
        success: function(results) {
            var thisWeek = results[0];
            var lastWeek = results[1];
            var change = (thisWeek.get('ask_avg') - lastWeek.get('ask_avg')).toFixed(2);

            if (metalFrom == "Gold" || defaultUrl == -1) {
                $('#bid').html(thisWeek.get('bid_avg'));
                $('#ask').html(thisWeek.get('ask_avg'));
                $('#change').html(change > 0 ? "+" + change : change);
            }

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

            if (metalFrom == "Silver") {
                $('#bid').html(thisWeek.get('bid_avg'));
                $('#ask').html(thisWeek.get('ask_avg'));
                $('#change').html(change > 0 ? "+" + change : change);
            }

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

            if (metalFrom == "Platinum") {
                $('#bid').html(thisWeek.get('bid_avg'));
                $('#ask').html(thisWeek.get('ask_avg'));
                $('#change').html(change > 0 ? "+" + change : change);
            }

            $('#plat_bid').html(thisWeek.get('bid_avg'));
            $('#plat_ask').html(thisWeek.get('ask_avg'));
            $('#plat_change').html(change > 0 ? "+" + change : change);
        }
    });
});