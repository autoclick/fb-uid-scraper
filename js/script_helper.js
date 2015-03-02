var headernextencoded;
var _lists = 'lists';
var listId;
var listName;
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
    return SubString({ invl: htmlreload, startvl: '{"view":"list"', addstartindex: 0, endvl: 'story_id":', addendindex: 0 }) + 'story_id":null';
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
            onError(link);
        }
    })
}
//Helper end

function showNext_callback(htmlnext) {
    var htmldoc = SubString({ invl: htmlnext, startvl: 'payload":"', addstartindex: 'payload":"'.length, endvl: 'jsmods', addendindex: -3 });

    if (htmldoc.length > 0) {

        var htmldecoded = DecodeEncodedNonAsciiCharacters(htmldoc).replace(/\\\"/g, "'").replace(/\\/g, '');
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
    getData(urlNextPage, showNext_callback, function (_link) {
        getData(_link, showNext_callback, function () {
            console.log('error link: '+_link);
            Log("load next data error");
        });
    });


}
function selectData(_html) {
    var nodelist = $(_html).find("div[data-bt^='{\"id\":']>div>a");//.//button[@data-profileid and @type='button']");////div[contains(@data-bt,'id')]
    if (nodelist.length > 0) {
        var uid, name, sex, profile_url, current_location_name, job = '', company, Work, Education;
        var currList;
        var _lists = 'lists';
        //----
        chrome.storage.local.get(_lists, function (data) {
            var lists_data = data[_lists];
            if (lists_data) {
                currList = lists_data[listId];
            }
            $(nodelist).each(function () {
                var item = $(this).next();
                profile_url = $(this).attr('href');
                name = item.find("div[data-bt='{\"ct\":\"title\"}'] a").text();
                if (!name) {
                    name = item.find("a div.clearfix>div").text();
                }
                uid = item.find("button[data-profileid]").attr('data-profileid');
                if (!uid) {
                    var suid = $(this).parent().parent().attr('data-bt');
                    uid = SubString({ invl: suid, startvl: '{"id":', addstartindex: '{"id":'.length, endvl: ',', addendindex: 0 });
                }
                company = item.find("div[data-bt*=sub_headers]>a:nth-child(2)").text();
                if (company) {
                    job = item.find("div[data-bt*=sub_headers]>a:nth-child(1)").text();
                } else {
                    company = item.find("div[data-bt*=sub_headers]>a:nth-child(1)").text();
                }

                var snippets = item.find("div._glo>div");
                if (snippets.length > 0) {
                    Work = company;
                    Education = company;
                    current_location_name = company;
                    //sp_chyc96 sx_7e4b5d
                    var Live = snippets.find("div._52eh:contains('Lives in')");//[contains(@class,'sp_1cnqys sx_aa8b9d')]
                    //Lives in
                    if (Live.length > 0) {
                        current_location_name = Live.children().text();
                    }
                    var work = snippets.find("div._52eh:contains('at')");//[contains(@class,'sp_1cnqys sx_4d6514')]
                    //Works at
                    if (work.length > 0) {
                        if (work.text().indexOf('Stud') < 0) {
                            Work = work.children().text();
                        }
                    }
                    var edu = snippets.find("div._52eh:contains('Stud')");//[contains(@class,'sp_1cnqys sx_6dc55d')]
                    //Studied at 
                    if (edu.length > 0) {
                        Education = edu.children().text();
                    }

                    sex = "Male";

                    var st = snippets.find("div:contains('Female')");//[contains(@class,'sp_1cnqys sx_5cba21')]
                    if (st.length > 0) {
                        sex = "Female";
                    }
                }

                currList.items[currList.count] = [uid, name, sex, profile_url, current_location_name, job, company, Work, Education];
                currList.count = currList.count + 1;
            });
            //------
            var objsave = {};
            var objId = {};
            objId[listId] = currList;
            objsave[_lists] = objId;
            chrome.storage.local.set(objsave, function () {
                Log('items (' + currList.count + ')');
            });
        });


    }
}
function Log(txt) {
    $('#labelScrape').text(txt);
    $('#btnScrape').hide();
    $('#labelScrape').show();
}
function RunScarapingDetail(currHtml, currLink) {
    selectData(currHtml);//select current page
    //showNext_callback(fullHtml);
    //-----------Begin Facebook---------------------
    getData(currLink, function (htmlreload) {
        headernextencoded = SubstringHeaderNext(htmlreload).replace(/\\\//g, '/');;
        var urlNextPage = cutNextUrl(htmlreload);
        getData(urlNextPage, showNext_callback, function () {
            Log("load next data error");
        });

    }, function () {
        Log("load data error");
    });
}
function RunScraping(currHtml, currLink, lid, lname) {

    listId = lid;
    listName = lname;
    if (listName) {//list moi

        var currList = {};
        currList[listId] = {
            'count': 0,
            'name': listName,
            'items': []
        };

        var objsave = {};
        objsave[_lists] = currList;
        chrome.storage.local.set(objsave, function () {
            RunScarapingDetail(currHtml, currLink);
        });
    } else//list cu
    {
        RunScarapingDetail(currHtml, currLink);
    }


}