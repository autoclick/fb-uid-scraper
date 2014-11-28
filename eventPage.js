/// <reference path="jquery.js" />
var lstResult = ['UID","Name","Sex","Profile","Location","Status","Work","Education'], headernextencoded;
var twitter_followers_url = "https://mobile.twitter.com";
var followerwonk_url = "https://followerwonk.com";
var lastCount = 0, stop = false;

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
function ShowCount(_count) {
    chrome.browserAction.setBadgeText({ text: _count + '' });
    chrome.browserAction.setTitle({ title: _count + '' });
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
            lstResult[lstResult.length] = [uid, name, sex, profile_url, current_location_name, Status, Work, Education].join('","');
        });
        ShowCount(lstResult.length);
    }
}
function CheckHtml(_inHtml) {
    //-----
    if (!stop) {
        var _url = cutNextUrl(_inHtml);;
        if (_url) {

            console.log('checkhtml+start again url:' + _url);
            StartScraping(_url, false);
        } else {
            alert('Complete');
            SaveToLocal(lstResult);
        }
    } else {
        alert('stop sucess');
        SaveToLocal(lstResult);
    }
    //-----
}
function StartScraping(url_mobile, _first) {
    console.log('StartScraping:' + _first);
    if (_first) {

        chrome.tabs.query({ active: true }, function (tabs) {
            chrome.tabs.sendMessage(tabs[0].id, { _method: "getHTML" }, function (response) {
                if (response) {
                    selectData(response._data);
                    var htmlfull = response._fullHtml;
                    headernextencoded = SubstringHeaderNext(htmlfull).replace(/\\\//g, '/');
                    //console.log(headernextencoded);
                    CheckHtml(htmlfull);
                } else {
                    alert('Please refresh facebook tab and start again');
                }
            });
        });
    } else {
        console.log('$.get(url_mobile):' + _first);
        $.ajax({
            url: url_mobile,
            dataType: 'html'
        }).done(function (htmlnext) {
            console.log('$.get(url_mobile) Donennnnnnnnnn:' + _first);
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
            CheckHtml(htmlnext);
        }).fail(function () {
            alert("Sorry. Server unavailable. ");
        });
    }

}

function SaveToLocal(_lstResult) {


    $('body').find('[download]').remove();
    const MIME_TYPE = 'text/plain;charset=UTF-8';
    var bb = new Blob(['"' + lstResult.join('"\n"') + '"'], { type: MIME_TYPE });
    StopScraping();
    var link = document.createElement("a");
    link.textContent = "Save as csv";
    link.download = "List_Facebook_Data_" + new Date().getTime() + '.csv';
    link.href = window.URL.createObjectURL(bb);

    //window.open(link); //debug only

    document.body.appendChild(link);

    if ($('body').find('[download]').length != 0) {
        link.click();
    }


}

function StopScraping() {

    chrome.storage.local.set({ 'scraping': false }, function (a, b, c) {
        console.log('stop sucess');
        ShowCount('');
        lstResult = ['UID","Name","Sex","Profile","Location","Status","Work","Education'];
        lastCount = 0;
        stop = true;
    });
}
chrome.browserAction.onClicked.addListener(function () {
    //chrome.browserAction.setBadgeText({ text: new Date().getSeconds() + 's' });

    //return;
    //check status
    chrome.storage.local.get('scraping', function (data) {
        if (data && data['scraping']) {
            if (confirm('scraping running. Do you want stop it ?.')) {
                //stop scraping
                StopScraping();
            }

        } else {


            chrome.tabs.query({ active: true }, function (_tabs) {
                console.log(_tabs.length);
                if (_tabs && _tabs.length > 0) {
                    console.log(_tabs[0].url);
                    if (_tabs[0].url.indexOf('facebook.com/search/') >= 0) {
                        chrome.storage.local.set({ 'scraping': true }, function (a, b, c) {
                            lastCount = 0;
                            stop = false;
                            StartScraping(_tabs[0].url, true);
                            console.log('Start complete');
                        });
                    } else {
                        alert('App only working on \n https://www.facebook.com/search/ \nPlease open link and try again');
                    }
                }


            });
        }

    });

    //alert('ok');
});