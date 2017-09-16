var rules =  {
  "buy-limit": function(state, update, notify) {
    console.log(state);
    var maxPurchase = 5,
      curPurchase = state.curPurchase || 0;
      if (/amazon\.ca/gi.test(location.href)) {
        console.log('Matches URL, current purchase: ' + curPurchase);

        var button = document.getElementById('add-to-cart-button');
        if (button) {
          button.addEventListener('click', function (e) {
            curPurchase++;
            console.log('Current purchase: ' + curPurchase);
            update({
              curPurchase: curPurchase
            });

            if (curPurchase > maxPurchase) {
                e.preventDefault();
                notify({
                  message: 'Stop buying stuff!'
                });
            }
          });
        }
      }
  },
  "lurking": function(){},
  "aimless-scroll": function(){},
  "streaming-addiction":function(){}
};

console.log('load');

chrome.storage.sync.get('task', function (task) {
  console.log(task.task);
  if (task && task.task) {
    (function (rn) {
      console.log('executing rule: ' + rn);
      rules[rn](
        JSON.parse(localStorage.getItem(rn)) || {},
        function (newState) {
          localStorage.setItem(rn, JSON.stringify(newState));
        },
        function (params) {
          chrome.runtime.sendMessage({
            message: params.message,
            ruleName: rn,
            task: 'stop-doing-that-notify'
          });
        }
      );
    })(task.task);
  }
});
