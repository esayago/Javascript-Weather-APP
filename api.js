$(document).ready(function() {
  var lat;
  var long;
  var key = "3fca08dfedcc0552780e39e989304115";
  var temp;
  var city;
  
    //GetLocation with ip API 
    $.getJSON('http://ipinfo.io', function(data){
      var cords = data.loc.split(",");
      lat = cords[0];
      long = cords[1];
     
          //weather API
      
      $.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&appid=" + key, function(data){
        var icon = data.weather[0].icon;
        temp = data.main.temp / 10;
        temp = temp.toFixed(0);
        city = data.name;
        $("#city").text(city);
        $("#temp").text(temp);
        $("#image").attr("src","http://openweathermap.org/img/w/" + icon + ".png");
      });
    });
    
    //Change from Celsius to Fahrenheit
    
  $("#format").on("click",function(){
    var text = $("#format").text();
    if(text == "°C"){
    temp = temp * 9/5 + 32;
    $("#temp").text(temp);
    $("#format").text("°F");
    }
    else{
    temp = (temp - 32) * 5/9 ;
    $("#temp").text(temp);
    $("#format").text("°C");
    }
  })
});