
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    if (request.task == 'stop-doing-that-notify')
    chrome.notifications.create(request.ruleName, {
      type: 'basic',
      iconUrl: 'images/stop.png',
      title: 'Stop Doing That',
      message: request.message
    });
});
