
/// <reference path="jquery.js" />
/// <reference path="myhttp.js" />
var lstResult = [['UID', 'Name', 'Sex', 'Profile', 'Location', 'Status', 'Work', 'Education']], headernextencoded;


//Helper start
function DecodeEncodedNonAsciiCharacters(x) {
    var r = /\\u([\d\w]{4})/gi;
    x = x.replace(r, function (match, grp) {
        return String.fromCharCode(parseInt(grp, 16));
    });
    x = unescape(x);
    return x;
}
function SubString(_para) {
    var _return = '';
    var startindex = _para.invl.indexOf(_para.startvl);
    if (startindex > -1) {
        startindex += _para.addstartindex;
        var endindex = -1;
        if (_para.endvl.length > 0 && (endindex = _para.invl.indexOf(_para.endvl, startindex)) > startindex) {
            endindex += _para.addendindex;
            _return = _para.invl.substring(startindex, endindex);
        }
        else {
            _return = _para.invl.substring(startindex);
        }
    } return _return;
}
function SubstringFooterNext(htmlreload) {
    return SubString({ invl: htmlreload, startvl: '"cursor":', addstartindex: 0, endvl: '}', addendindex: 1 });
}
function SubstringHeaderNext(htmlreload) {
    return SubString({ invl: htmlreload, startvl: '{"view":"list"', addstartindex: 0, endvl: ']', addendindex: -1 });
}
function cutNextUrl(htmlreload) {
    var footernext = SubstringFooterNext(htmlreload);
    return 'https://www.facebook.com/ajax/pagelet/generic.php/BrowseScrollingSetPagelet?data=' + headernextencoded + ',' + footernext + '&__a';

}
function getData(link, onSuccess, onError) {
    myhttp.Getajax({
        url: link,
        type: 'html',
        success: function (d) {
            onSuccess(d);
        }, error: function (d) {
            onError(d);
        }
    })
}
//Helper end
//Main Function start
function RunScraping() {
    
    selectData($('#browse_result_area')[0].outerHTML);//select current page
    //-----------Begin Facebook---------------------
    //Mo ta cac buoc select user and next pages
    var urlSearch = window.location.href;//https://www.facebook.com/search/445208722274206/likers
    //Select list user page 1 from browser
    getData(urlSearch, function (htmlreload) {
        headernextencoded = SubstringHeaderNext(htmlreload);
        var urlNextPage = cutNextUrl(htmlreload);
        getData(urlNextPage, showNext_callback, function () {
            Log("load next data error");
        });

    }, function () {
        Log("load data error");
    });



    //-----------End Facebook---------------------
}
function selectData(_html) {
    var nodelist = $(_html).find("div[data-bt*=title]>a");//.//button[@data-profileid and @type='button']");////div[contains(@data-bt,'id')]
    if (nodelist.length > 0) {
        var uid, name, sex, email, profile_url, current_location_name, Status, Work, Education;
        $(nodelist).each(function () {
            var item = $(this).parent().parent();
            profile_url = $(this).attr('href');
            name = $(this).text();
            uid = $(item).find("button[data-profileid]").attr('data-profileid');
            var header = $(item).find("div[data-bt*=sub_headers]>a").text();
            var snippets = $(item).find("div[data-bt*=snippets]>div");
            if (snippets.length > 0) {
                Work = header;
                Education = header;
                current_location_name = header;
                var work = $(snippets).find("div>div:contains('Work')");//[contains(@class,'sp_1cnqys sx_4d6514')]
                //Works at
                if (work.length > 0) {
                    Work = $(work).parent().text();
                }
                var edu = $(snippets).find("div>div:contains('Stud')");//[contains(@class,'sp_1cnqys sx_6dc55d')]
                //Studied at 
                if (edu.length > 0) {
                    Education = $(edu).parent().text();
                }
                //sp_chyc96 sx_7e4b5d
                var Live = $(snippets).find("div>div:contains('Live')");//[contains(@class,'sp_1cnqys sx_aa8b9d')]
                //Lives in
                if (Live.length > 0) {
                    current_location_name = $(Live).parent().text();
                }
                sex = "Male";

                var st = $(snippets).find("div:eq(1)");//[contains(@class,'sp_1cnqys sx_5cba21')]
                if (st.length > 0) {
                    Status = $(st).text().toLowerCase();
                    if (Status.indexOf("live") == 0 || Status.indexOf("stud") == 0 || Status.indexOf("work") == 0) {
                        st = $(snippets).find("div:eq(4)");//[contains(@class,'sp_1cnqys sx_5cba21')]
                        if (st.length > 0) {
                            Status = $(st).text().toLowerCase();
                        }
                    }
                    if (Status.indexOf("female") > -1) {
                        sex = "Female";
                    }
                }
            }
            //lstResult[lstResult.length] = "uid-->" + uid + "\n-name->" + name + "\nsex-->" + sex + "\nemail-->" + email + "\nprofile_url-->" + profile_url + "\nlocation-->" + current_location_name + "\nstatus-->" + Status + "\nwork-->" + Work + "\nedu-->" + Education;
            lstResult[lstResult.length] = ["\n" + uid, name, sex,profile_url,current_location_name,Status,Work,Education];
        });
        Log('Scraping  elements (' + lstResult.length + ')');
    }
}
function showNext_callback(htmlnext) {
    var htmldoc = SubString({ invl: htmlnext, startvl: 'payload":"', addstartindex: 'payload":"'.length, endvl: 'jsmods', addendindex: -3 });
    
    if (htmldoc.length > 0) {

        var htmldecoded=DecodeEncodedNonAsciiCharacters(htmldoc).replace(/\\\"/g, "'").replace(/\\/g, '');
        //console.log("f1=" + htmldecoded.indexOf('\\\"'));
        //console.log("f2=" + htmldecoded.indexOf('\"'));
        //console.log("f3=" + htmldecoded.indexOf('\\'));
        //console.log(htmldecoded);
        selectData(htmldecoded);
        footernext = SubstringFooterNext(htmlnext);
        if (footernext.length <= 0) {
            return;
        }
    }
    else {
        return;
    }
    var urlNextPage = cutNextUrl(htmlnext);
    getData(urlNextPage, showNext_callback, function () {
        Log("load next data error");
    });


}
//Main Function end


//end Newcode


//End code Core
function Start() {
    if (window.location.href.indexOf('facebook.com/search/') >= 0) {
        Log('Started analyzing page...');
        stop = false;
        $('#chromeExtStop').show();
        //$('#chromeExtStopExcel').show();
        $('#chromeExtStart').hide();
        RunScraping();
    }
    else
        alert('This extension only works on https://www.facebook.com/search/.');
};

function Log(txt) {
    if ($('#chromeExtUI').length == 0) {
        $('body').append('<div class="chromeExtUI" id="chromeExtUI"><img style="width: 350px;" src="http://i.imgur.com/4cWA0jq.png"/></div>');
        $('#chromeExtUI').append('<div class="chromeExtAlert" id="chromeExtAlert">' + txt + '</div>');
        $('#chromeExtUI').append('<button class="uiExtButton" id="chromeExtStop">Export CSV</button>(close tab to stop)');
        //$('#chromeExtUI').append('<button class="uiExtButton" id="chromeExtStop">Export CSV</button>(close tab to stop)</br></br></br><button class="uiExtButton" id="chromeExtStopExcel">Export Excel</button></br>Copy&paste *.txt file content to Excel');
        $('#chromeExtUI').append('<button class="uiExtButton" id="chromeExtStart">Go Scraping</button>');
    } else {
        $('#chromeExtAlert').text(txt);
        
        
    }
    //$('#chromeExtUI').remove();
    
}


function Stop(_filetype) {
    var joincol = '","';
    var joinrow = '"\n"';
    var joinheader = '"';
    if (_filetype == '.txt') {
        joincol = '\t';
        joinrow = '';
        joinheader = '';
        $('#chromeExtStopExcel').hide();
    } else {
        $('#chromeExtStop').hide();
    }

    stop = true;
    //[1,2,3],
    //[3,4,5]
    //[1","2","3]","[3","4","5]
    //Download
    $('body').find('[download]').remove();
    const MIME_TYPE = 'text/plain;charset=UTF-8';
    var data = [lstResult[0].join(joincol)];
    for (var i = 1, l = lstResult.length; i < l; i++) {
        data[data.length] = lstResult[i].join(joincol);
    }
    var bb = new Blob([joinheader + data.join(joinrow) + joinheader], { type: MIME_TYPE });

    var link = document.createElement("a");
    link.textContent = "Save as " + _filetype;
    link.download = "List_Facebook_User_" + new Date().getTime() + _filetype;
    link.href = window.URL.createObjectURL(bb);

    //window.open(link); //debug only

    document.body.appendChild(link);

    if ($('body').find('[download]').length != 0) {
        link.click();
    }


    $('#chromeExtStart').show();
}


Start();

$(document).on('click', '#chromeExtStart', function () {
    Start();
});

$(document).on('click', '#chromeExtStop', function () {
    Stop('.csv');
});

//$(document).on('click', '#chromeExtStopExcel', function () {
//    Stop('.txt');
//});