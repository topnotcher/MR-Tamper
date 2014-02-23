// ==UserScript==
// @name       Hide vday message
// @namespace  https://raw.github.com/topnotcher/MR-Tamper/master/chrome/hide_stupid_vday_message.tamper.js
// @version    1.0
// @description  GFYS
// @match      http://mafiareturns.com/*
// @copyright  2013+, mario
// ==/UserScript==
//

ui.sdi.after_page_load.push(function() {
	$('.vday').hide();
});
