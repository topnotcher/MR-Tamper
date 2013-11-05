// ==UserScript==
// @name        Hide CA
// @namespace   http://mafiareturns.com/fuckthefuckoff
// @include     http://mafiareturns.com/*
// @version     1
// @grant       none
// ==/UserScript==
 
/**
 * configuration
 */
 
var hide_classes = ['ca','hw']
 
//tmp array to store the userinfo
tmp = [];
 
for ( i in window.userinfo ) {
	var user = window.userinfo[i];

	if ( hide_classes.indexOf( user.s ) == -1 )
		tmp.push(user)
}
 
$('#ssDiv').empty();
window.userinfo = tmp;
buildOnlineList();
