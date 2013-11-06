// ==UserScript==
// @name       MR SS Tweaks
// @namespace  https://raw.github.com/topnotcher/MR-Tamper/master/chrome/ss_tweaks.tamper.js
// @version    0.9
// @description  enter something useful
// @match      http://mafiareturns.com/*
// @copyright  2013+, You
// ==/UserScript==

// These classes will be hidden on SS list
var hide_classes = ['ca','hd','staff'];

ui.ss._handleFriendData = ui.ss.handleFriendData;
ui.ss.handleFriendData = function(data) {
    if ( !data || !data.groups || !data.contacts ) return;
    
    var highlight_crews = {
    /*
     * "group" : {
     * 		"crew": crew_id,
     * 		"user": user_id,
     * };*/
    };
    
    for ( g in data.groups ) {
        if (data.groups[g].n.indexOf('_highlight_crew') == 0)
            highlight_crews[g] = {'crew': data.groups[g].n.split('_')[3] };
    }   
    
    for ( var i = 0; i < ui.ss.userinfo.length; ++i ) {
        var user = ui.ss.userinfo[i];
        
        for ( g in highlight_crews ) {
            if ( highlight_crews[g].crew == user.c ) {
         		if ( user.i in data.contacts )
                    data.contacts[user.i].g.push(g)
                else
                    data.contacts[user.i] = { 'n': user.n, 't': '', 'g' : [g] };
            }
        }       
    }
    
    ui.ss._handleFriendData(data);
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
        }

	this._buildOnlineList(tmp,friends,poker_active);
}

// this should handle the initial load.
ui.ss.buildOnlineList(ui.ss.userinfo, ui.ss.friends, ui.ss.poker_active);