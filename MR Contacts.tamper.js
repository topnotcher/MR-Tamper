// ==UserScript==
// @name       MR Contacts
// @namespace  http://derp/
// @version    0.1
// @description  enter something useful
// @match      http://mafiareturns.com/*
// @copyright  2012+, You
// ==/UserScript==

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


// These classes will be WIPED from the ss list. 
var hide_classes = ['ca','hd'];

var frienddata = {
    "groups": {
        "1": {"n":"Zalitz","s":"[Z]","c":220, 'crew': 2045},
        "2": {"n":"Lynch","s":"[L]","c":100, 'crew': 1909},
        "3": {"n":"SammyGravano","s":"[K]","c":300, 'crew': 1948}
    },"contacts": {
 //       "472939": {"n":"Zalitz","t":"","g":[1]}
    }
};
 
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