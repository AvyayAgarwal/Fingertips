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
                  message: 'Stop wasting money you broke uni student!'
                });
              }
          });
        }
      }
  },

  "lurking": function(state, update, notify){
    console.log(state);
    var maxThreads = 5,
      curThreads= state.curThreads || 0;
      if (/buzzfeed\.com/gi.test(location.href)) {
        console.log('Matches URL, current website visits: ' + curThreads);
        var button = document.getElementsByTagName('h2');
        console.log(button);
        if (button) {
          for(var i=0; i<button.length; i++)
          {
          button[i].addEventListener('click', function (e) {
            curThreads++;
            console.log('Current website visits: ' + curThreads);
            update({
              curThreads : curThreads
            });
            if (curThreads  > maxThreads) {
                e.preventDefault();
                notify({
                  message: 'Way too many unnecessary buzzfeed articles!'
                });
              }
          });
        }
      }
      }
  },
/**
  "reddit":function(state, update, notify){
      console.log(state);
      var maxReacts = 5,
        curReacts state.curReacts || 0;
        if (/reddit\.com/gi.test(location.href)) {
          console.log('Matches URL, current videos watched: ' + curReacts);
          var button = document.getElementsByClass('_39n');
          for(var i=0; i<button.length; i++)
          {
          if (button) {
            button[i].addEventListener('click', function (e) {
              curReacts++;
              console.log('Current reacts: ' + curReacts);
              update({
                curReacts: curReacts
              });
              if (curReacts  > maxReacts) {
                  e.preventDefault();
                  notify({
                    message: "Get off Facebook!"
                  });
                }
            });
          }
        }
        }
  }
  **/
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
