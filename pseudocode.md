1. 3 calls: Current Weather, 5 Day Forecast and UV Index (its own API)
2. When user goes on to site
    create:
    header, 
    search bar, 
    main panel that will dynamically display:
     city name with todays date, 
     humidity, 
     windspeed, 
     UV index
        will write a condition that the color will indicate the level of uv
    5 day forecast widget display
        date
        weather icon/pic
        temp
        humidity
3. If user has already searched a city,
    it will be saved for them to click on again in the future

Notes:
    *Get API key from Open Weather
    *Create on click event for the search button
    *Create a function to search for the weather
        make an ajax call to the current weather api
        append data to page
    *Create a function to get the forecast
        make an ajax call to the forecast api
        append data to page
    *Create a function for the UV index
        make an ajax call to the UV API
        append data to search weather function

    *create other functions for local storage and appending to the side?



    // GET WEATHER URL AND KEY SET //
    //DO THE FIRST 3 FUNCTIONS AT LEASTTTTT// 
    //LOCAL STORAGEEEE!!!!!!//

    //FRIDAY-- 5 DAY FORECAST