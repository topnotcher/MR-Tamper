// ==UserScript==
// @name       Hide vday message
// @namespace  https://raw.github.com/topnotcher/MR-Tamper/master/chrome/hide_stupid_vday_message.tamper.js
// @version    1.9
// @description  GFYS
// @match      http://mafiareturns.com/*
// @copyright  2013+, mario
// ==/UserScript==
//

ui.sdi._handle_load_state_done = UI_SDI.prototype.handle_load_state_done;

ui.sdi.handle_load_state_done = function(state,data,textStatus, jqXHR) {
	this._handle_load_state_done(state,data,textStatus,jqXHR);
	
	$('.vday').hide();
}
