// ==UserScript==
// @name       MR SS Tweaks
// @namespace  http://divinelunacy.com/mr-ss-tweaks
// @version    0.2
// @description  enter something useful
// @match      http://mafiareturns.com/*
// @copyright  2013+, You
// ==/UserScript==

// These classes will be hidden on SS list
var hide_classes = ['ca','hd','staff'];

//this defines crews to mark on the list 
var frienddata = {
    "groups": {
        "1": {"n":"Zalitz","s":"[Z]","c":220, 'crew': 2045},
        "2": {"n":"Lynch","s":"[L]","c":100, 'crew': 1909},
        "3": {"n":"SammyGravano","s":"[K]","c":300, 'crew': 1948}
    },"contacts": {
    }
};

function add_to_groups(user,friendata) {
	var contact =  { 'n': user.n, 't': '', 'g' : [] };
    
    for (key in frienddata.groups) {
        var group = frienddata.groups[key];
        
     	if ( user.c === group.crew )
            contact.g.push(key)
    }
    
    if ( contact.g.length > 0 )
		frienddata.contacts[String(user.i)]  = contact;
}

 
var tmp = [];
 
for (var i = 0; i < userinfo.length; ++i ) {
    var user = userinfo[i];
    var contact = null; 
    
    if ( hide_classes.indexOf( user.s ) == -1 )
        tmp.push(user);
    
    add_to_groups(user,frienddata);

}

$('#ssDiv').empty();
userinfo = tmp;
buildOnlineList();
handleFriendData(frienddata);
