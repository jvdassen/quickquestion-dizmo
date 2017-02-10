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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ3aW5kb3cuc2hvd0JhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgZGl6bW8uc2hvd0JhY2soKTtcbn07XG53aW5kb3cuc2hvd0Zyb250ID0gZnVuY3Rpb24gKCkge1xuICAgIGRpem1vLnNob3dGcm9udCgpO1xufTtcblxud2luZG93LmkxOG4oZnVuY3Rpb24gKGVyciwgdCkge1xuICAgIC8vIHZhciBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFibGUtY2VsbCcpWzBdO1xuICAgIC8vIGNlbGwudGV4dENvbnRlbnQgPSB0KCdncmVldGluZycpO1xuICAgIC8vIHZhciBkb25lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RvbmUnKTtcbiAgICAvLyBkb25lLnRleHRDb250ZW50ID0gdCgnZG9uZScpO1xufSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2Rpem1vcmVhZHknLCBmdW5jdGlvbiAoKSB7XG4gIHZhciBhcHAgPSBuZXcgVnVlKHtcbiAgICBlbDogJyNhcHAnLFxuICAgIGRhdGE6IHtcbiAgICAgIG1lc3NhZ2U6IGRpem1vLnByaXZhdGVTdG9yYWdlLmdldFByb3BlcnR5KCdtZXNzYWdlJylcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGxvZ21lc3NhZ2U6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZSk7XG4gICAgICB9LFxuICAgICAgd3JpdGVUb1RyZWU6IGZ1bmN0aW9uKCl7XG4gICAgICAgIGRpem1vLnByaXZhdGVTdG9yYWdlLnNldFByb3BlcnR5KCdtZXNzYWdlJywgdGhpcy5tZXNzYWdlKTtcbiAgICAgIH1cblxuICAgIH1cbiAgfSk7XG4gIGRpem1vLnByaXZhdGVTdG9yYWdlLnN1YnNjcmliZVRvUHJvcGVydHkoJ21lc3NhZ2UnLGZ1bmN0aW9uKHBhdGgsIG5ld3ZhbCwgb2xkdmFsKSB7XG4gICAgY29uc29sZS5sb2cobmV3dmFsKTtcbiAgICBjb25zb2xlLmxvZygnYXBwLm1lc3NhZ2UnICsgYXBwLm1lc3NhZ2UpO1xuICAgIGFwcC5tZXNzYWdlID0gbmV3dmFsO1xuICB9KTtcblxuXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkb25lJykub25jbGljayA9IGZ1bmN0aW9uICgpIHtcbiAgICBkaXptby5zaG93RnJvbnQoKTtcbiAgfTtcblxufSk7XG4iXX0=
