// ==UserScript==
// @name       MR SS Tweaks
// @namespace  https://raw.github.com/topnotcher/MR-Tamper/master/chrome/ss_tweaks.tamper.js
// @version    0.5
// @description  enter something useful
// @match      http://mafiareturns.com/*
// @copyright  2013+, You
// ==/UserScript==

// These classes will be hidden on SS list
var hide_classes = ['ca','hd','staff'];

//this defines crews to mark on the list 
var crew_contacts = {
    'groups': {
        "1": {"n":"Zalitz","s":"[Z]","c":220, 'crew': 2045},
        "2": {"n":"Lynch","s":"[L]","c":100, 'crew': 1909},
        "3": {"n":"SammyGravano","s":"[K]","c":300, 'crew': 1948}
    },'contacts' : {
        
    }
};

function add_to_groups(user,friends) {
	var contact =  { 'n': user.n, 't': '', 'g' : [] };
    
    for (key in friends.groups) {
        var group = friends.groups[key];
        
     	if ( user.c === group.crew )
            contact.g.push(key)
    }
    
    if ( contact.g.length > 0 )
		friends.contacts[String(user.i)]  = contact;
}


ui.ss._handleFriendData = ui.ss.handleFriendData;
ui.ss.handleFriendData = function(data) {
    ui.ss._handleFriendData(ui.ss.crew_contacts);
}

ui.ss._buildOnlineList = UI_SS.prototype.buildOnlineList;
ui.ss.buildOnlineList = function(userinfo, friends, poker_active){
    console.log('derp');
 
	var tmp = [];
 
	for (var i = 0; i < userinfo.length; ++i ) {
	    var user = userinfo[i];
	    var contact = null; 
    
	    if ( hide_classes.indexOf( user.s ) == -1 )
	        tmp.push(user);
    
	    add_to_groups(user,crew_contacts);
    }
   
    this.crew_contacts = crew_contacts;
    //ui.ss._handleFriendData(crew_contacts);
	this._buildOnlineList(tmp,friends,poker_active);
}

// this should handle the initial load.
ui.ss.buildOnlineList(ui.ss.userinfo, ui.ss.friends, ui.ss.poker_active);