// ==UserScript==
// @name       MR SS Tweaks
// @namespace  https://raw.github.com/topnotcher/MR-Tamper/master/chrome/ss_tweaks.tamper.js
// @version    1.3.1
// @description  GFYS
// @match      http://mafiareturns.com/*
// @copyright  2013+, mario
// ==/UserScript==

// These classes will be hidden on SS list
var hide_classes = ['ca','hd','staff'];

ui.ss._update_friends_time_done = ui.ss.update_friends_time_done;
ui.ss.update_friends_time_done = function(data) {
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
    
    ui.ss._update_friends_time_done(data);
}

ui.ss._doBuild = UI_SS.prototype.doBuild;
ui.ss.doBuild = function() {
    
	//if there are contacts, then update the conacts first
    //this makes _highlight_crew_... work
	if (ui.ss.contacts_by_id)
    	ui.ss.update_friends_time_done({groups: ui.ss.contact_groups, contacts:ui.ss.contacts_by_id});
    
	var tmp = [];
 
	for (var i = 0; i < this.userinfo.length; ++i ) {
	    var user = this.userinfo[i];
	    var contact = null; 

		if ( user.i == 578878 )
			user.n = 'DanTheManWithoutAPlan';


	    if ( hide_classes.indexOf( user.s ) == -1 )
	        tmp.push(user);
	}

	this.userinfo = tmp;
	this._doBuild();
}

// this should handle the initial load.
ui.ss.doBuild();

//nasty hack for highlighting
if (ui.ss.contacts_by_id)
    ui.ss.update_friends_time_done({groups: ui.ss.contact_groups, contacts:ui.ss.contacts_by_id});
else
	ui.ss.update_friends_time();
