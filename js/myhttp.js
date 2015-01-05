var myhttp = {};
myhttp.fnull = function () { };
myhttp.Getajax = function (indata) {

    $.ajax({
        url: indata.url,
        xhrFields: {
            withCredentials: true
        },
        //headers: {
        //    'Cookie': indata.cookie
        //},
        type: 'GET',
        dataType: indata.type || "json",
        success: function (g, f, h) {
            indata.success(g);
        },
        error: function (g, f, h) {
            indata.error('Error get feed data' + g); debugger;
        }
    });
};
myhttp.Postajax = function (indata) {
    $.ajax({
        url: indata.url,
        xhrFields: {
            withCredentials: true
        },
        data: indata.data,
        type: 'POST',
        dataType: indata.type || "json",
        contentType: (indata.media) ? false : "application/x-www-form-urlencoded",
        success: function (g, f, h) {
            indata.success(g);
        },
        error: function (g, f, h) {
            indata.error('Error post data' + g); debugger;
        }
    });
};
//-----------------
