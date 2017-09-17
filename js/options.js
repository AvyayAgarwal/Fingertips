function init_options () {
    console.log("function: init_options");

    chrome.storage.sync.get('task', function (task) {
      console.log(task);

    task = (task || {}).task || '';

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

    var task = document.getElementById('task-dropdown').options[document.getElementById('task-dropdown').selectedIndex].value;
    chrome.storage.sync.set({ "task" : task });
    console.log("task= " + task);
}

document.addEventListener('DOMContentLoaded', init_options);
document.querySelector('#save-options-button').addEventListener('click', save_options);
