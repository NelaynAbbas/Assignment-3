$(document).ready(function() {
    function updateTime() {
      var date = new Date();
      var hours = date.getHours().toString().padStart(2, '0');
      var minutes = date.getMinutes().toString().padStart(2, '0');
      var seconds = date.getSeconds().toString().padStart(2, '0');
  
      $("#hours").text(hours);
      $("#minutes").text(minutes);
      $("#seconds").text(seconds);
    }
  
    updateTime();
    setInterval(updateTime, 1000);
  });
  