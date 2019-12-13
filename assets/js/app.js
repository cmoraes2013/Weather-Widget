$(document).ready(function () {

    function currentWeather(searchValue) {
        // var weatherURL = //weather api link//
        //var weatherApiKey =  //"weather api key"//
        $.ajax({
            url: weatherUrl + searchValue + weatherApiKey + "c&units=imperial",
            type: "GET",
        }).then(function (response) {
            console.log(response);
            
        })


    }


    $('#search-button').on('click', function () {
        var searchValue = $('#search-value').val

        //search weather function here// 
        currentWeather(searchValue);

    })

})