var url = window.location.href;
if (url && url.indexOf('facebook.com/search/') < 0) {
    chrome.storage.local.get('boxhidden', function (data) {
        var extUrl = chrome.extension.getURL('/icons/icon.png');
        var item_box = jQuery(
          "<div id='prospector-box'>" +
        "<div><div style='float:left'><a href='http://www.autoclick.us' class='salesloft-logo' style='background-image:url(\"" + extUrl + "\")'>Leadfindr</a></div>" +
        "<div style='float:right;width:200px'><ul><li><a href='https://www.facebook.com/search/country/pages' target='_blank' title='list all Countries'>list all Countries</a></li><li><a href='https://www.facebook.com/search/places/all' target='_blank' title='list all Places'>list all Places</a></li><li><a href='https://www.facebook.com/search/103134573060865/employees/112463092102121/residents/present/intersect' target='_blank' title='Work in A live in B'>Work in A live in B</a></li><li><a href='https://www.facebook.com/search/str/paul/users-named/35/18/users-age-2/112463092102121/residents/present/intersect/' target='_blank' title='named \"A\" old 18-35 live in B'>named \"A\" old 18-35 live in B</a></li><li><a href='https://www.facebook.com/search/str/harley/users-named/112463092102121/residents/present/females/intersect' target='_blank' title='Woman named \"A\" live in B'>Woman named \"A\" live in B</a></li><li><a href='https://www.facebook.com/search/1989/jan/date-2/users-born/females/intersect' target='_blank' title='Woman born in date'>Woman born in date</a></li><li><a href='https://www.facebook.com/search/112463092102121/users-birth-place/112463092102121/residents/present/intersect' target='_blank' title='born in A live in B'>born in A live in B</a></li><li><a href='https://www.facebook.com/search/100000654782698/friends/112463092102121/residents/present/intersect' target='_blank' title='Friends of A live in B'>Friends of A live in B</a></li></ul></div><br></div>" +
        "<a href='#' id='hide-prospector-box'>Hide</a>" + '<div class="_7ke _9p_"><select class="_55pe" style="max-width:150px;height:24px;" id="selectBookmark"><option>Select Type</option><option value="pages">Page</option><option value="groups">Group</option><option value="users">User</option></select><div class="_42ft _4jy0 _4jy3 _517h _51sy" id="btnSaveBookmark">Bookmark</div><br><div class="_42ft _4jy0 _4jy3 _517h _51sy">More Than 1,000 People</div>' + '<div id="browse_filter_panel" data-referrer="browse_filter_panel"><div><div class="_3slf"><div class="_6zo"><table class="_6a5"><tbody><tr><th class="_4311"><a href="" target="_blank" title="list all Pages">Liked</a></th><td><div class="_6a uiPopover _6y-"><select class="_55pe" id="selectLiked" style="max-width:150px;height:24px;"><option value="">Select Bookmark</option></select><div class="_42ft _4jy0 _4jy3 _517h _51sy" data-btn="remove">UnBookmark</div></div></td></tr><tr><th class="_4311"><a href="https://www.facebook.com/browsegroups/?category=membership" target="_blank" title="list all Groups">Member of</a></th><td><div class="_6a uiPopover _6y-"><select class="_55pe" style="max-width:150px;height:24px;" id="selectMemberOf"><option value="">Select Bookmark</option></select><div class="_42ft _4jy0 _4jy3 _517h _51sy" data-btn="remove">UnBookmark</div></div></td></tr><tr><th class="_4311"><a href="https://www.facebook.com/friends" target="_blank" title="list all Friends">Following</a></th><td><div class="_6a uiPopover _6y-"><select class="_55pe" style="max-width:150px;height:24px;" id="selectFollowing"><option value="">Select Bookmark</option></select><div class="_42ft _4jy0 _4jy3 _517h _51sy" data-btn="remove">UnBookmark</div></div></td></tr><tr><th class="_4311">Gender</th><td><div class="_6a uiPopover _6y-"><select class="_55pe" style="max-width:150px;height:24px;" id="selectGender"><option value="">Select Bookmark</option><option value="females">Female</option><option value="males">Male</option></select></div></td></tr><tr><th class="_4311">Relationship</th><td><div class="_6a uiPopover _6y-"><select class="_55pe" style="max-width:150px;height:24px;" id="selectRelationship"><option value="">Select Bookmark</option><option value="married">Married</option><option value="single">Single</option><option value="in-any-relationship">Relationship</option><option value="engaged">Engaged</option></select></div></td></tr><tr><th class="_4311"><a href="https://www.facebook.com/search/pages/all" target="_blank" title="list all Pages">Employer</a></th><td><div class="_6a uiPopover _6y-"><select class="_55pe" style="max-width:150px;height:24px;" id="selectEmployer"><option value="">Select Bookmark</option></select><div class="_42ft _4jy0 _4jy3 _517h _51sy" data-btn="remove">UnBookmark</div></div></td></tr><tr><th class="_4311"><a href="https://www.facebook.com/search/city/pages" target="_blank" title="list all Cities">Current City</a></th><td><div class="_6a uiPopover _6y-"><select class="_55pe" style="max-width:150px;height:24px;" id="selectCurrentCity"><option value="">Select Bookmark</option></select><div class="_42ft _4jy0 _4jy3 _517h _51sy" data-btn="remove">UnBookmark</div></div></td></tr><tr><th class="_4311"><a href="https://www.facebook.com/search/city/pages" target="_blank" title="list all Cities">Hometown</a></th><td><div class="_6a uiPopover _6y-"><select class="_55pe" style="max-width:150px;height:24px;" id="selectHometown"><option value="">Select Bookmark</option></select><div class="_42ft _4jy0 _4jy3 _517h _51sy" data-btn="remove">UnBookmark</div></div></td></tr><tr><th class="_4311"><a href="https://www.facebook.com/search/school/pages" target="_blank" title="list all Schools">School</a></th><td><div class="_6a uiPopover _6y-"><select class="_55pe" style="max-width:150px;height:24px;" id="selectSchool"><option value="">Select Bookmark</option></select><div class="_42ft _4jy0 _4jy3 _517h _51sy" data-btn="remove">UnBookmark</div></div></td></tr><tr><th class="_4311">Friendship</th><td><div class="_6a uiPopover _6y-"><select class="_55pe" style="max-width:150px;height:24px;" id="selectFriendship"><option value="">Select Bookmark</option></select><div class="_42ft _4jy0 _4jy3 _517h _51sy" data-btn="remove">UnBookmark</div></div></td></tr><tr><th class="_4311">Name</th><td><div class="_6a uiPopover _6y-"><select class="_55pe" style="max-width:150px;height:24px;" id="selectName"><option value="">Select Bookmark</option></select></div></td></tr></tbody></table></div></div></div></div>' + '<div class="_42ft _4jy0 _4jy3 _517h _51sy" id="btnSearch" style="height:30px;font-size: 25px;">Create Hidden Link</div></div></div>'
        );

        //jQuery(document).ready(function () {
        var _pages = 'pages';
        var _groups = 'groups';
        var _users = 'users';
        function reloadFormCreateLink() {
            chrome.storage.local.get([_pages, _groups, _users], function (data) {
                var pages_data = data[_pages];
                //--id/members
                //--id/likers
                //--id/followers
                //--id/friends
                //--married
                //--id/employees
                //--id/residents/present(live in)
                //--id/users-birth-place
                //--id/students
                if (pages_data) {

                    var newhtml = '';
                    var oldhtml = '<option value="">Select Bookmark</option>';
                    for (var _key in pages_data) {
                        newhtml += '<option value="' + _key + '">' + pages_data[_key] + '</option>';
                    }
                    $('#selectLiked').html(oldhtml + newhtml);
                    $('#selectEmployer').html(oldhtml + newhtml);
                    $('#selectCurrentCity').html(oldhtml + newhtml);
                    $('#selectHometown').html(oldhtml + newhtml);
                    $('#selectSchool').html(oldhtml + newhtml);
                }
                var groups_data = data[_groups];
                if (groups_data) {

                    var newhtml = '';
                    var oldhtml = '<option value="">Select Bookmark</option>';
                    for (var _key in groups_data) {
                        newhtml += '<option value="' + _key + '">' + groups_data[_key] + '</option>';
                    }
                    $('#selectMemberOf').html(oldhtml + newhtml);
                }
                var users_data = data[_users];
                if (users_data) {

                    var newhtml = '';
                    var oldhtml = '<option value="">Select Bookmark</option>';
                    var newhtmlFriendship = '';
                    for (var _key in users_data) {
                        newhtml += '<option value="' + _key + '">' + users_data[_key] + '</option>';
                        newhtmlFriendship += '<option value="' + _key + '">friend of: ' + users_data[_key] + '</option>';
                    }
                    $('#selectFollowing').html(oldhtml + newhtml);
                    $('#selectFriendship').html(oldhtml + newhtmlFriendship);
                }
            });
        }
        jQuery("body").append(item_box);
        reloadFormCreateLink();
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



        jQuery('div[data-btn="remove"]').on("click", function () {
            var selectbox = jQuery(this).prev();
            var sid = selectbox.attr('id');
            var svalue = selectbox.val();
            if (svalue) {
                var stext = selectbox.text();
                if (sid == 'selectMemberOf') {
                    chrome.storage.local.get(_groups, function (data) {
                        var groups_data = data[_groups];
                        if (groups_data) {
                            //var index = groups_data.indexOf({ svalue: stext });
                            //if (index > -1) {
                            //    groups_data.splice(index, 1);
                            //    chrome.storage.local.set({ _groups: groups_data });
                            //}
                            delete groups_data[svalue];
                            var objsave = {};
                            objsave[_groups] = groups_data;
                            chrome.storage.local.set(objsave, function () { reloadFormCreateLink(); });
                        }
                    });
                } else if (sid == 'selectFollowing' || sid == 'selectFriendship') {
                    chrome.storage.local.get(_users, function (data) {
                        var users_data = data[_users];
                        if (users_data) {
                            //var index = users_data.indexOf({ svalue: stext });
                            //if (index > -1) {
                            //    users_data.splice(index, 1);
                            //    chrome.storage.local.set({ _users: users_data });
                            //}
                            delete users_data[svalue];
                            var objsave = {};
                            objsave[_users] = users_data;
                            chrome.storage.local.set(objsave, function () { reloadFormCreateLink(); });
                        }
                    });
                } else {
                    chrome.storage.local.get(_pages, function (data) {
                        var pages_data = data[_pages];
                        if (pages_data) {
                            //var index = pages_data.indexOf({ svalue: stext });
                            //if (index > -1) {
                            //    pages_data.splice(index, 1);
                            //    chrome.storage.local.set({ _pages: pages_data });
                            //}
                            delete pages_data[svalue];
                            var objsave = {};
                            objsave[_pages] = pages_data;
                            chrome.storage.local.set(objsave, function () { reloadFormCreateLink(); });
                        }
                    });
                }
            }


            //alert(jQuery(this).prev().find('option[value="' + jQuery(this).prev().val() + '"]').val());
            //jQuery(this).prev().find('option[value="' + jQuery(this).prev().val() + '"]').remove();

        });
        var urlHead = 'https://www.facebook.com/search';
        var urlFooter = '/intersect';
        function OpenInNewTab(url) {
            var win = window.open(url, '_blank');
            win.focus();
        }
        jQuery('#btnSearch').on('click', function () {
            var urlbody1 = '';
            var urlbody2 = '';

            //--id/members
            //--id/likers
            //--id/followers
            //--id/friends
            //--married
            //--id/employees
            //--id/residents/present(live in)
            //--id/users-birth-place
            //--id/students
            //có /intersect là và 2 điều kiên
            //không có /intersect là hoặc 1 trong 2 điều kiện
            // /liker đứng trước /students
            //có /intersect tỉ lệ thành công cao hơn 
            var liked = jQuery('#selectLiked').val();
            var memberof = jQuery('#selectMemberOf').val();
            var following = jQuery('#selectFollowing').val();
            var gender = jQuery('#selectGender').val();
            var relationship = jQuery('#selectRelationship').val();
            var employer = jQuery('#selectEmployer').val();
            var currentcity = jQuery('#selectCurrentCity').val();
            var hometown = jQuery('#selectHometown').val();
            var school = jQuery('#selectSchool').val();
            var friendship = jQuery('#selectFriendship').val();
            var urlScrape = 'https://www.facebook.com/search';
            if (liked) {
                urlScrape += '/' + liked + '/likers';
            }
            if (memberof) {
                urlScrape += '/' + memberof + '/members';
            }
            if (following) {
                urlScrape += '/' + following + '/followers';
            }
            if (gender) {
                urlScrape += '/' + gender;
            }
            if (relationship) {
                urlScrape += '/' + relationship + '/users';
            }
            if (employer) {
                urlScrape += '/' + employer + '/employees';
            }
            if (currentcity) {
                urlScrape += '/' + currentcity + '/residents/present';
            }
            if (hometown) {
                urlScrape += '/' + hometown + '/users-birth-place';
            }
            if (school) {
                urlScrape += '/' + school + '/students';
            }
            if (friendship) {
                urlScrape += '/' + friendship + '/friends';
            }
            if (urlScrape == 'https://www.facebook.com/search/') {
                urlScrape = 'https://www.facebook.com/search/users/all';
            } else {
                urlScrape += urlFooter;
            }
            OpenInNewTab(urlScrape);
            //https://www.facebook.com/search/100000654782698/friends/112463092102121/residents/present/intersect
        });
        jQuery('#btnSaveBookmark').on('click', function () {
            var bookmarkType = jQuery('#selectBookmark').val();
            if (bookmarkType != '0') {
                //[data-profileid] or [data-uid]
                var title = $('head>title').text();
                var uid = $('[data-profileid]').attr('data-profileid');
                if (!uid) {
                    uid = $('[data-uid]').attr('data-uid');
                    if (!uid) {
                        uid = $('div[id^="group_mall_"]').attr('id');
                        if (!uid) {
                            return alert('Can not bookmark this link');
                        } else {
                            uid = uid.split('_')[2];
                        }

                    }
                }
                chrome.storage.local.get(bookmarkType, function (data) {
                    var bt = data[bookmarkType];
                    if (!bt) {
                        bt = {};
                    }
                    //var obj0 = {};
                    //obj0[uid] = title;
                    //bt[bt.length] = obj0;
                    bt[uid] = title;
                    var obj = {};
                    obj[bookmarkType] = bt;
                    chrome.storage.local.set(obj, function (a, b) {
                        reloadFormCreateLink();
                        //alert('save ok');
                    });
                });
            } else {
                alert('Please select bookmark type');
            }
        });
    });

    //});
}
