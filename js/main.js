/*
** file: js/main.js
** description: javascript code for "html/main.html" page
*/

function init_main () {
    $('html').hide().fadeIn('slow');
  });

}

var siteToSearch = 'reddit.com';

chrome.history.search({text: siteToSearch, callback: function(results) {

	

}}

chrome.history.getVisits(object details, function callback){


}

//bind events to dom elements
document.addEventListener('DOMContentLoaded', init_main);
<<<<<<< HEAD

var siteToSearch = "reddit.com";

chrome.history.search({text: siteToSearch, maxResults: 10}, function(results) {

  chrome.history.getVisits(siteToSearch, function callback)

});

// extension has a UI, stop doing x and stop doing y, configure what you want to stop doing
// pop up to tell you to stop doing x, and settings to stop doing y

// history
// inject scripts into pages with extension, content, inject javascript into all pages, inspect, look at urlm, insert urself into that page to make deciisions
// insert urself onto amazon, rule that says i don't wanna buy more than 5 items a week

// starting point, little script to running in the background 
=======
>>>>>>> 7ee5f56780922e44761b7f5ba564be8339c4e43a
