$(document).ready(function() {
    var metalFrom = parseURLParams()['q'];
    var defaultUrl = window.location.href.indexOf('?q=')

    $.getJSON('http://teamstacks.herokuapp.com/jm').done(function(data) {
        var gold = data[0];
        var silver = data[1];
        var plat = data[2];

        if (metalFrom == "Gold" || defaultUrl == -1) {
            $('#bid').html(gold.bid);
            $('#ask').html(gold.ask);
            $('#change').html(gold.oneDayChange);
        } else if (metalFrom == "Silver") {
            $('#bid').html(silver.bid);
            $('#ask').html(silver.ask);
            $('#change').html(silver.oneDayChange);
        } else if (metalFrom == "Platinum") {
            $('#bid').html(plat.bid);
            $('#ask').html(plat.ask);
            $('#change').html(plat.oneDayChange);
        }

        $('#gold_bid').html(gold.bid);
        $('#gold_ask').html(gold.ask);
        $('#gold_change').html(gold.oneDayChange);
        $('#gold_change').attr('class', gold.oneDayChange > 0 ? 'pos-change' : 'neg-change');

        $('#silver_bid').html(silver.bid);
        $('#silver_ask').html(silver.ask);
        $('#silver_change').html(silver.oneDayChange);
        $('#silver_change').attr('class', silver.oneDayChange > 0 ? 'pos-change' : 'neg-change');

        $('#plat_bid').html(plat.bid);
        $('#plat_ask').html(plat.ask);
        $('#plat_change').html(plat.oneDayChange);
        $('#plat_change').attr('class', plat.oneDayChange > 0 ? 'pos-change' : 'neg-change');
    });
});