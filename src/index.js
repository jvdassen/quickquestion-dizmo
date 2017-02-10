window.showBack = function () {
    dizmo.showBack();
};
window.showFront = function () {
    dizmo.showFront();
};

window.i18n(function (err, t) {
    // var cell = document.getElementsByClassName('table-cell')[0];
    // cell.textContent = t('greeting');
    // var done = document.getElementById('done');
    // done.textContent = t('done');
});

document.addEventListener('dizmoready', function () {
  var app = new Vue({
    el: '#app',
    data: {
      message: dizmo.privateStorage.getProperty('message')
    },
    methods: {
      logmessage: function(){
        console.log(this.message);
      },
      writeToTree: function(){
        dizmo.privateStorage.setProperty('message', this.message);
      }

    }
  });
  dizmo.privateStorage.subscribeToProperty('message',function(path, newval, oldval) {
    console.log(newval);
    console.log('app.message' + app.message);
    app.message = newval;
  });


  document.getElementById('done').onclick = function () {
    dizmo.showFront();
  };

});
