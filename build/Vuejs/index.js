(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIndpbmRvdy5zaG93QmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICBkaXptby5zaG93QmFjaygpO1xufTtcbndpbmRvdy5zaG93RnJvbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGl6bW8uc2hvd0Zyb250KCk7XG59O1xuXG53aW5kb3cuaTE4bihmdW5jdGlvbiAoZXJyLCB0KSB7XG4gICAgLy8gdmFyIGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YWJsZS1jZWxsJylbMF07XG4gICAgLy8gY2VsbC50ZXh0Q29udGVudCA9IHQoJ2dyZWV0aW5nJyk7XG4gICAgLy8gdmFyIGRvbmUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG9uZScpO1xuICAgIC8vIGRvbmUudGV4dENvbnRlbnQgPSB0KCdkb25lJyk7XG59KTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZGl6bW9yZWFkeScsIGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFwcCA9IG5ldyBWdWUoe1xuICAgIGVsOiAnI2FwcCcsXG4gICAgZGF0YToge1xuICAgICAgbmV3cXVlc3Rpb246ICcnLFxuICAgICAgcXVlc3Rpb25zOiBkaXptby5wcml2YXRlU3RvcmFnZS5nZXRQcm9wZXJ0eSgncXVlc3Rpb25zJykgfHwgW10sXG5cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIHdyaXRlVG9UcmVlOiBmdW5jdGlvbigpe1xuICAgICAgICB0aGlzLnF1ZXN0aW9ucy5wdXNoKHRoaXMubmV3cXVlc3Rpb24pO1xuICAgICAgICBkaXptby5wcml2YXRlU3RvcmFnZS5zZXRQcm9wZXJ0eSgncXVlc3Rpb25zJywgdGhpcy5xdWVzdGlvbnMpO1xuICAgICAgICB0aGlzLm5ld3F1ZXN0aW9uID0gJyc7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgZGl6bW8ucHJpdmF0ZVN0b3JhZ2Uuc3Vic2NyaWJlVG9Qcm9wZXJ0eSgncXVlc3Rpb25zJyxmdW5jdGlvbihwYXRoLCBuZXd2YWwsIG9sZHZhbCkge1xuICAgIGFwcC5xdWVzdGlvbnMgPSBuZXd2YWw7XG4gIH0pO1xuXG5cbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbmUnKS5vbmNsaWNrID0gZnVuY3Rpb24gKCkge1xuICAgIGRpem1vLnNob3dGcm9udCgpO1xuICB9O1xuXG59KTtcbiJdfQ==
