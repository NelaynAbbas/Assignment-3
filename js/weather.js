// Weather API URL
var apiUrl = "https://api.openweathermap.org/data/2.5/weather?q={city}&appid={apiKey}";

// Function to make AJAX request
function getWeather(city) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", apiUrl.replace("{city}", city).replace("{apiKey}", "642fe1588d077dc2010badf3b4b30ebd"), true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            displayWeather(response);
        }
    };
    xhr.send();
}

document.getElementById("btn").addEventListener("click", function () {
    var cityName = document.getElementById("city-name").value;
    getWeather(cityName);
});

// Function to display weather details
function displayWeather(data) {
    const temp = data.main.temp.toPrecision(3) - 273;
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("temperature").innerHTML = "Temperature: " + temp + "°C";
    document.getElementById("description").innerHTML = "Description: " + data.weather[0].description;
    document.getElementById("humidity").innerHTML = "Humidity: " + data.main.humidity + "%";
    document.getElementById("wind-speed").innerHTML = "Wind Speed: " + data.wind.speed + " m/s";
    let imgSrc = null;
    if (data.weather[0].description === "overcast clouds" || data.weather[0].description === "scattered clouds" || data.weather[0].description === "broken clouds" || data.weather[0].description === "few clouds") {
        document.getElementById("img").src = "cloudy.jpg";
    }
    else if (data.weather[0].description === "light rain" || data.weather[0].description === "rain" || data.weather[0].description === "moderate rain" || data.weather[0].description === "heavy intensity rain" || data.weather[0].description === "very heavy rain" || data.weather[0].description === "extreme rain" || data.weather[0].description === "freezing rain" || data.weather[0].description === "light intensity shower rain") {
        document.getElementById("img").src = "rain.jpg";
    }
    else if (data.weather[0].description === "snow" || data.weather[0].description === "light snow" || data.weather[0].description === "heavy snow" || data.weather[0].description === "sleet" || data.weather[0].description === "light shower sleet" || data.weather[0].description === "shower sleet" || data.weather[0].description === "light rain and snow" || data.weather[0].description === "rain and snow" || data.weather[0].description === "light shower snow" || data.weather[0].description === "shower snow" || data.weather[0].description === "heavy shower snow") {
        document.getElementById("img").src = "snow.jpg";
    }
    else {
        document.getElementById("img").src = "sunny.jpg";
    }
}

// Get weather for a specific city
getWeather("Faisalabad");