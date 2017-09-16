/*
** file: js/options.js
** description: javascript code for "html/options.html" page
*/

function init_options () {
    console.log("function: init_options");

    chrome.storage.sync.get('task', function (task) {
      console.log(task);

    //load currently stored options configuration
    task = (task || {}).task || '';

    //set the current state of the options form elements to match the stored options values
    //favorite_movie
    if (task) {
        var task_select = document.getElementById('task-dropdown');
        for (var i=0; i < task_select.options.length; i++) {
            var option = task_select.options[i];
            if (option.value == task) {
                task_select.selectedIndex = i;
                break;
            }
        }
    }
  });
}

function save_options () {
    console.log("function: save_options");

    //task_select
    var task = document.getElementById('task-dropdown').options[document.getElementById('task-dropdown').selectedIndex].value;
    chrome.storage.sync.set({ "task" : task });
    console.log("task= " + task);
}

//bind events to dom elements
document.addEventListener('DOMContentLoaded', init_options);
document.querySelector('#save-options-button').addEventListener('click', save_options);
