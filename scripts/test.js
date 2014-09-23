/// <reference path="jquery.js" />
/// <reference path="myhttp.js" />
//total price #gesamtpreis_brutto
//de quy goi get html next
Start();
function Start() {
    var nodelist = $("#browse_result_area div[data-bt*=title] a");//.//button[@data-profileid and @type='button']");////div[contains(@data-bt,'id')]
    if (nodelist.length > 0) {
        var uid, name, sex, email, profile_url, current_location_name, Status, Work, Education;
        var lstResult = [];
        $(nodelist).each(function () {
            var item = $(this).parent().parent();
            profile_url = $(this).attr('href');
            name = $(this).text();
            uid = $(item).find("button[data-profileid][type='button']").attr('data-profileid');
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
            lstResult[lstResult.length] = "uid-->" + uid + "\n-name->" + name + "\nsex-->" + sex + "\nemail-->" + email + "\nprofile_url-->" + profile_url + "\nlocation-->" + current_location_name + "\nstatus-->" + Status + "\nwork-->" + Work + "\nedu-->" + Education;
        });
        alert(lstResult.join('\n'));
    }
}

function getHtml(onSuccess, onError) {
    myhttp.Getajax({
        url: window.location.href,
        type: 'html',
        success: function (d) {
            onSuccess(d);
        },
        error: function (d) {
            onError(d);
        }
    })
}

function getHtml_Error(d) {
    alert('error-loi' + d);
}

function getHtml_Init_Success(_html) {
    var doc = $(_html);
    var lsttype = doc.find('#sorten option');
    var lstquantity = doc.find('#wmd_shirt_auflage option');
    var c_value = doc.find('input[name="c"]').val();
    var versand = doc.find('select[name=versand] option[selected]').val();
    var stichwort = doc.find('#stichwort').val();
    var lstResult;
    //{
    //'c':13525&sorten=240108&auflage=8772410&versand=985&stichwort=WmD--c6fb766ec5b15e1114ef696e7589032a&bemerkungen=&referenz=&gutscheincode=
    //}
    for (var i = 0; i < lsttype.length; i++) {
        var sorten = lsttype[i].value;
        for (var j = 0; j < lstquantity.length; j++) {
            var auflage = lstquantity[j].value;
            //auflage = auflage.val();
            if (i != 0 || j != 0) {
                var data = {
                    'c': c_value,
                    'sorten': sorten,
                    'auflage': auflage,
                    'versand': versand,
                    'stichwort': stichwort,
                }
                postFLFeedCount(data, i, j, getHtml_Next_Sucess, getHtml_Error);
            } else {

                var totalprice = doc.find('#gesamtpreis_brutto').text()
                lstResult = [[lsttype[0].innerText, lstquantity[0].innerText, totalprice]];
            }

        }
    }

}

function getHtml_Next_Sucess(_html, _i, _j) {
    var totalprice = $(_html).find('#gesamtpreis_brutto').text();
    lstResult[lstResult.length] = [lsttype[_i].innerText, lstquantity[_j].innerText, totalprice];
    if (_j >= 20) {
        var stringshow = '';
        for (var i in lstResult) {
            stringshow = i.join('-->') + '\n';
        }
        alert(stringshow);
        return;
    }
}

//getHtml(getHtml_Init_Success, getHtml_Error);