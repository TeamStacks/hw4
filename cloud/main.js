// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:

Parse.Cloud.job("goldData", function(request, status) {
    var Gold = Parse.Object.extend("gold_usd");
    var query = new Parse.Query(Gold);

    query.descending("Date");
    query.first({
        success: function(object) {
            var date = new Date(object.get("Date"));
            var modifiedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

            Parse.Cloud.httpRequest({
                url: 'https://www.quandl.com/api/v1/datasets/PERTH/GOLD_USD_D.json?auth_token=T8jzdKYTBSszwxQwxkcK&trim_start=' + modifiedDate
            }).then(function(httpResponse) {
                //success
                var rows = httpResponse.data.data;

                if (rows.length <= 1) status.success('Up-to-date');

                var allEntries = [];
                for (var i = 0; i < rows.length; i++) {
                    var row = rows[i];
                    var gold = new Gold();
                    gold.set("Date", row[0]);
                    gold.set("bid_high", row[1]);
                    gold.set("ask_high", row[2]);
                    gold.set("bid_low", row[3]);
                    gold.set("ask_low", row[4]);
                    gold.set("bid_avg", row[5]);
                    gold.set("ask_avg", row[6]);

                    allEntries.push(gold);
                }

                Parse.Object.saveAll(allEntries, {
                    success: function(list) {
                        status.success('New gold entries created');
                    },
                    error: function(error) {
                        status.error('Failed to create gold entries, with error code: ' + error.message);
                    }
                });
            }, function(httpResponse) {
                status.error('Request failed with response code ' + httpResponse.status);
            });
        },
        error: function(error) {
            status.error('Failed to retrieve latest gold entry');
        }
    });
});

Parse.Cloud.job("silverData", function(request, status) {
    var Silver = Parse.Object.extend("silver_usd");
    var query = new Parse.Query(Silver);

    query.descending("Date");
    query.first({
        success: function(object) {
            var date = new Date(object.get("Date"));
            var modifiedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

            Parse.Cloud.httpRequest({
                url: 'https://www.quandl.com/api/v1/datasets/PERTH/SLVR_USD_D.json?auth_token=T8jzdKYTBSszwxQwxkcK&trim_start=' + modifiedDate
            }).then(function(httpResponse) {
                //success
                var rows = httpResponse.data.data;

                if (rows.length <= 1) {
                    status.success('Up-to-date');
                } else {
                    var allEntries = [];
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var silver = new Silver();
                        silver.set("Date", row[0]);
                        silver.set("bid_high", row[1]);
                        silver.set("ask_high", row[2]);
                        silver.set("bid_low", row[3]);
                        silver.set("ask_low", row[4]);
                        silver.set("bid_avg", row[5]);
                        silver.set("ask_avg", row[6]);

                        allEntries.push(silver);
                    }

                    Parse.Object.saveAll(allEntries, {
                        success: function(list) {
                            status.success('New silver entries created');
                        },
                        error: function(error) {
                            status.error('Failed to create silver entries, with error code: ' + error.message);
                        }
                    });
                }
            }, function(httpResponse) {
                status.error('Request failed with response code ' + httpResponse.status);
            });
        },
        error: function(error) {
            status.error('Failed to retrieve latest silver entry');
        }
    });
});

Parse.Cloud.job("platinumData", function(request, status) {
    var Platinum = Parse.Object.extend("plat_usd");
    var query = new Parse.Query(Platinum);

    query.descending("Date");
    query.first({
        success: function(object) {
            var date = new Date(object.get("Date"));
            var modifiedDate = date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate();

            Parse.Cloud.httpRequest({
                url: 'https://www.quandl.com/api/v1/datasets/PERTH/PLAT_USD_D.json?auth_token=T8jzdKYTBSszwxQwxkcK&trim_start=' + modifiedDate
            }).then(function(httpResponse) {
                //success
                var rows = httpResponse.data.data;

                if (rows.length <= 1) {
                    status.success('Up-to-date');
                } else {
                    var allEntries = [];
                    for (var i = 0; i < rows.length; i++) {
                        var row = rows[i];
                        var platinum = new Platinum();
                        platinum.set("Date", row[0]);
                        platinum.set("bid_high", row[1]);
                        platinum.set("ask_high", row[2]);
                        platinum.set("bid_low", row[3]);
                        platinum.set("ask_low", row[4]);
                        platinum.set("bid_avg", row[5]);
                        platinum.set("ask_avg", row[6]);

                        allEntries.push(platinum);
                    }

                    Parse.Object.saveAll(allEntries, {
                        success: function(list) {
                            status.success('New platinum entries created');
                        },
                        error: function(error) {
                            status.error('Failed to create platinum entries, with error code: ' + error.message);
                        }
                    });
                }
            }, function(httpResponse) {
                status.error('Request failed with response code ' + httpResponse.status);
            });
        },
        error: function(error) {
            status.error('Failed to retrieve latest platinum entry');
        }
    });
});