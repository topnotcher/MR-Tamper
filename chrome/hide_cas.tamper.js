// ==UserScript==
// @name       MR Hide CAs
// @namespace  http://derp/
// @version    0.1
// @description  enter something useful
// @match      http://mafiareturns.com/*
// @copyright  2012+, You
// ==/UserScript==

// These classes will be WIPED from the ss list. 
var hide_classes = ['ca','hd'];
 
var tmp = [];
 
for (var i = 0; i < userinfo.length; ++i ) {
    var user = userinfo[i];
    
    if ( hide_classes.indexOf( user.s ) == -1 )
        tmp.push(user);
}

$('#ssDiv').empty();
userinfo = tmp;
buildOnlineList();
