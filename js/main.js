/*
** file: js/main.js
** description: javascript code for "html/main.html" page
*/

function init_main () {
    $('html').hide().fadeIn('slow');
}

var siteToSearch = 'reddit.com';

chrome.history.search({text: siteToSearch, callback: function(results) {

	

}}

chrome.history.getVisits(object details, function callback){


}

//bind events to dom elements
document.addEventListener('DOMContentLoaded', init_main);
