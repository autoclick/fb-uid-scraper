
chrome.storage.local.get('boxhidden', function (data) {

    var extUrl = chrome.extension.getURL('/icons/icon.png');
    var item_box = jQuery(
      "<div id='prospector-box'>" +

    "<div><div style='float:left'><a href='http://www.autoclick.us' class='salesloft-logo' style='background-image:url(\"" + extUrl + "\")'>Leadfindr</a></div>" +

    "<div style='float:right;width:200px'><ul><li><a href='https://www.facebook.com/search/country/pages' target='_blank' title='list all Countries'>list all Countries</a></li><li><a href='https://www.facebook.com/search/places/all' target='_blank' title='list all Places'>list all Places</a></li><li><a href='https://www.facebook.com/search/103134573060865/employees/112463092102121/residents/present/intersect' target='_blank' title='Work in A live in B'>Work in A live in B</a></li><li><a href='https://www.facebook.com/search/str/paul/users-named/35/18/users-age-2/112463092102121/residents/present/intersect/' target='_blank' title='named 'A' old 18-35 live in B'>named 'A' old 18-35 live in B</a></li><li><a href='https://www.facebook.com/search/str/harley/users-named/112463092102121/residents/present/females/intersect' target='_blank' title='Woman named 'A' live in B'>Woman named 'A' live in B</a></li><li><a href='https://www.facebook.com/search/1989/jan/date-2/users-born/females/intersect' target='_blank' title='Woman born in date'>Woman born in date</a></li><li><a href='https://www.facebook.com/search/112463092102121/users-birth-place/112463092102121/residents/present/intersect' target='_blank' title='born in A live in B'>born in A live in B</a></li><li><a href='https://www.facebook.com/search/100000654782698/friends/112463092102121/residents/present/intersect' target='_blank' title='Friends of A live in B'>Friends of A live in B</a></li><li>Close tab to stop</li></ul></div><br></div>" +

    "<a href='#' id='hide-prospector-box'>Hide</a>" +

    "<div><select class='_55pe' style='max-width:150px;height:24px;float:left;' id='selectList'><option value=''>Select Old List</option></select><div class='_42ft _4jy0 _4jy3 _517h _51sy' id='btnDownloadList' \>Download</div><div class='_42ft _4jy0 _4jy3 _517h _51sy' id='btnDelList' >Delete List</div><br><h3>Or new Lists</h3><input type='text' id='inputNewList' class='textInput' style='height:20px'><div class='_42ft _4jy0 _4jy3 _517h _51sy' id='btnScrape' style='height:30px;font-size: 25px;'>Get UID</div><div class='_42ft _4jy0 _4jy3 _517h _51sy' id='labelScrape' style='height:30px;font-size: 25px;display:none;'></div></div>" +
    "</div>"
    );


    var _lists = 'lists';
    function SaveToLocal(_lstResult, _listId) {


        $('body').find('[download]').remove();
        const MIME_TYPE = 'text/plain;charset=UTF-8';
        var savedata = '"UID","Name","Sex","Profile","Location","Job","Company","Work","Education"\n';
        for (var i = 0; i < _lstResult.length; i++) {
            savedata += '"' + _lstResult[i].join('","') + '"\n';
        }
        var bb = new Blob([savedata], { type: MIME_TYPE });
        var link = document.createElement("a");
        link.textContent = "Save as csv";
        link.download = "List_Facebook_Data_" + _listId + '.csv';
        link.href = window.URL.createObjectURL(bb);

        //window.open(link); //debug only

        document.body.appendChild(link);

        if ($('body').find('[download]').length != 0) {
            link.click();
        }


    }
    function SaveToLocal(_lstResult, _listId) {


        $('body').find('[download]').remove();
        const MIME_TYPE = 'text/plain;charset=UTF-8';
        var savedata = '"UID","Name","Sex","Profile","Location","Job","Company","Work","Education"\n';
        for (var i = 0; i < _lstResult.length; i++) {
            savedata += '"' + _lstResult[i].join('","') + '"\n';
        }
        var bb = new Blob([savedata], { type: MIME_TYPE });
        var link = document.createElement("a");
        link.textContent = "Save as csv";
        link.download = "List_Facebook_Data_" + _listId + '.csv';
        link.href = window.URL.createObjectURL(bb);

        //window.open(link); //debug only

        document.body.appendChild(link);

        if ($('body').find('[download]').length != 0) {
            link.click();
        }


    }
    function reloadForm() {
        chrome.storage.local.get(_lists, function (data) {
            var lists_data = data[_lists];
            if (lists_data) {

                var newhtml = '';
                var oldhtml = "<option value=''>Select Old List</option>";
                for (var _key in lists_data) {
                    newhtml += '<option value="' + _key + '">' + lists_data[_key].name + '(' + lists_data[_key].count + ')' + '</option>';
                }
                $('#selectList').html(oldhtml + newhtml);
            }

        });
    }
    jQuery("body").append(item_box);
    reloadForm();
    jQuery("#pagelet_bluebar").before("<div id='prospector-box-toggle'><a href='#'>Show Form</a></div>");

    var boxhidden = data['boxhidden'];

    if (boxhidden) {
        item_box.fadeOut();
        jQuery("#prospector-box-toggle").addClass("show");
    }
    jQuery("#hide-prospector-box").on("click", function (event) {
        event.preventDefault();
        chrome.storage.local.set({ 'boxhidden': true }, function () {
            item_box.fadeOut();
            jQuery("#prospector-box-toggle").addClass("show");
        });
    });
    jQuery("#prospector-box-toggle a").on("click", function (event) {
        event.preventDefault();
        chrome.storage.local.set({ 'boxhidden': false }, function () {
            jQuery("#prospector-box-toggle").removeClass("show");
            item_box.fadeIn();
        });
    });

    jQuery("#btnDownloadList").on("click", function (event) {
        event.preventDefault();
        var svalue = jQuery('#selectList').val();
        if (svalue) {
            chrome.storage.local.get(_lists, function (data) {
                var lists_data = data[_lists];
                if (lists_data) {
                    currList = lists_data[svalue];
                    SaveToLocal(currList.items, svalue);
                }
            });
        }
    });
    jQuery("#btnDelList").on("click", function (event) {
        event.preventDefault();
        var svalue = jQuery('#selectList').val();
        if (svalue) {
            chrome.storage.local.get(_lists, function (data) {
                var lists_data = data[_lists];
                if (lists_data) {
                    delete lists_data[svalue];
                    var objsave = {};
                    objsave[_lists] = lists_data;
                    chrome.storage.local.set(objsave, function () {
                        reloadForm();
                    });
                }
            });
        }
    });
    jQuery("#btnScrape").on("click", function (event) {
        event.preventDefault();
        var svalue = jQuery('#selectList').val();
        var sname = jQuery('#inputNewList').val();
        if (svalue) {//old list
            RunScraping($('#initial_browse_result')[0].outerHTML, window.location.href, svalue);
            //RunScraping($('#initial_browse_result')[0].outerHTML, $('body').html(), svalue);
        } else if (sname) {//New list
            var newid = '' + +new Date;
            var oldhtml = $('#selectList').html();
            $('#selectList').html(oldhtml + "<option  value='" + newid + "'>" + sname + "</option>");
            $('#selectList').val(newid);
            RunScraping($('#initial_browse_result')[0].outerHTML, window.location.href, newid, sname);
            //RunScraping($('#initial_browse_result')[0].outerHTML, $('body').html(), newid, sname);
        } else {
            alert("Please select a old list or type name of new list");
        }
        //alert("Scrape");
    });
});
