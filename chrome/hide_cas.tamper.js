// ==UserScript==
// @name       MR Hide CAs
// @namespace  http://divinelunacy.com/mr-hide-ca
// @version    0.2
// @description  enter something useful
// @match      http://mafiareturns.com/*
// @copyright  2013+, Greg Bowser
// ==/UserScript==

// These classes will be hidden from the ss list. 
var hide_classes = ['ca','hd','staff'];
 
var tmp = [];
 
for (var i = 0; i < userinfo.length; ++i ) {
    var user = userinfo[i];
    
    if ( hide_classes.indexOf( user.s ) == -1 )
        tmp.push(user);
}

$('#ssDiv').empty();
userinfo = tmp;
buildOnlineList();
