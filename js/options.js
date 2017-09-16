/*
** file: js/options.js
** description: javascript code for "html/options.html" page
*/

function init_options () {
    console.log("function: init_options");

    //load currently stored options configuration
    var task = localStorage['task'];

    //set the current state of the options form elements to match the stored options values
    //favorite_movie
    if (task) {
        var task_select = document.getElementById('task_select');
        for (var i=0; i < task_select.children.length; i++) {
            var option = task_select.children[i];
            if (option.value == task) {
                option.selected = 'true';
                break;
            }
        }
    }
}

function save_options () {
    console.log("function: save_options");

    //favorite-movie-dropdown
    var favorite_movie = document.getElementById('task_select').children[document.getElementById('task_select').selectedIndex].value;
    localStorage['task'] = task;
    console.log("task= " + task);
}

//bind events to dom elements
document.addEventListener('DOMContentLoaded', init_options);
document.querySelector('#save-options-button').addEventListener('click', save_options);
