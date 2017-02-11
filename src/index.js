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
      newquestion: '',
      questions: dizmo.privateStorage.getProperty('questions') || [],

    },
    methods: {
      writeToTree: function(){
        this.questions.push(this.newquestion);
        dizmo.privateStorage.setProperty('questions', this.questions);
        this.newquestion = '';
      }
    }
  });
  dizmo.privateStorage.subscribeToProperty('questions',function(path, newval, oldval) {
    app.questions = newval;
  });


  document.getElementById('done').onclick = function () {
    dizmo.showFront();
  };

});
