
var rowcount = 1;
function AndFunction(id) {
    var id2 = id + 1;
    var nextInput = "<div id='inputrow" + id + "'><select id='Selector" + id + "'>" +
        "<option value='users-named'>Name is</option>" +
        "<option value='pages-named/employees/present'>Current Job (Employer or Job Title)</option>" +
        "<option value='pages-named/employees/past'>Past Jobs (Employer or Job Title)</option>" +
        "<option value='pages-named/employees/ever'>All Jobs (Employer or Job Title)</option>" +
        "<option value='pages-named/residents/present'>Lives (Currently)</option>" +
        "<option value='pages-named/residents/past'>Lived (Previously)</option>" +
        "<option value='pages-named/speakers'>Speaks (Language)</option>" +
        "<option value='pages-named/students'>Education</option>" +
        "<option value='pages-named/visitors'>Visited</option>" +
        "<option value='pages-named/likers'>Liked</option>" +
      "</select>" +
      "<input type='text' id='item" + id + "'>" +
      "<span >AND</span></div>";
    rowcount = id;
    $("#inputrows").append(nextInput);
}
function OpenFacebook() {
    var myurl = "https://www.facebook.com/search";
    for (i = 1; i < rowcount + 1; i++) {
        var MySelector = document.getElementById("Selector" + i).value;
        var MyItem = document.getElementById("item" + i).value;
        if (MyItem.length > 0) {
            myurl = myurl + "/str/" + encodeURIComponent(MyItem) + "/" + MySelector + "/intersect";
        }
    }
    if (myurl.length > 31) {
        chrome.tabs.create({ "url": myurl, "selected": true });
    }
}
$('#OpenFacebook').click(function () {
    OpenFacebook();
});
$('#AndButton').click(function () {
    var idbtn = parseInt(rowcount + 1);
    AndFunction(idbtn);
});
$('#copyRight').click(function () {
    chrome.tabs.create({ "url": $(this).attr('href'), "selected": true });
});