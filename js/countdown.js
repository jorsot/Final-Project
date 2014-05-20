

// DEFINE VARIABLES
var cityname = document.getElementById("city-name")
var fixture = document.getElementById("fixture");
var gametime = document.getElementById("game-time");
var sched_container = document.getElementById("sched-container");

var svg_cities = document.getElementById("svg-cities");
setTimeout(function (){svg_cities.style.left = "5%";}, 100);

// SET DEMO VALUES
cityname.innerHTML = "Pick a City"
fixture.innerHTML = "Click on a city on the map"
gametime.innerHTML = "to see the time left until there's a World Cup game there."

// Define divs for animation 
var fixturediv = document.getElementById("fixture-div");
var gametimediv = document.getElementById("game-time-div");
var citynamediv = document.getElementById("city-name-div");
var whitebox = document.getElementById("whitebox");

// DEFINE BUTTONS
var brasilia_btn = document.getElementById("brasilia");
brasilia_btn.addEventListener("click", function () { change("Brasilia"); }, false);

var saopaulo_btn = document.getElementById("saopaulo");
saopaulo_btn.addEventListener("click", function () { change("São Paulo"); }, false);

var salvador_btn = document.getElementById("salvador");
salvador_btn.addEventListener("click", function () { change("Salvador"); }, false);

var belo_btn = document.getElementById("belo");
belo_btn.addEventListener("click", function () { change("Belo Horizonte"); }, false);

var cuiaba_btn = document.getElementById("cuiaba");
cuiaba_btn.addEventListener("click", function () { change("Cuiaba"); }, false);

var curitiba_btn = document.getElementById("curitiba");
curitiba_btn.addEventListener("click", function () { change("Curitiba"); }, false);

var manaus_btn = document.getElementById("manaus");
manaus_btn.addEventListener("click", function () { change("Manaus"); }, false);

var natal_btn = document.getElementById("natal");
natal_btn.addEventListener("click", function () { change("Natal"); }, false);

var porto_btn = document.getElementById("porto");
porto_btn.addEventListener("click", function () { change("Porto Alegre"); }, false);

var recife_btn = document.getElementById("recife");
recife_btn.addEventListener("click", function () { change("Recife"); }, false);

var rio_btn = document.getElementById("rio");
rio_btn.addEventListener("click", function () { change("Rio de Janeiro"); }, false);

var fortaleza_btn = document.getElementById("fortaleza");
fortaleza_btn.addEventListener("click", function () { change("Fortaleza"); }, false);

// RUNNING CLOCK
function clock() {
    gametime.style.webkitAnimationPlayState = "paused"
    var days, hours, minutes, seconds;
    var today = new Date().getTime();
    var seconds_left = (next_game - today) / 1000;

    days = parseInt(seconds_left / 86400);
    seconds_left = seconds_left % 86400;
     
    hours = parseInt(seconds_left / 3600);
    seconds_left = seconds_left % 3600;
     
    minutes = parseInt(seconds_left / 60);
    seconds = parseInt(seconds_left % 60);

    // gametime.style.left = "running";
    gametime.innerHTML = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds until kick-off.";
}

// CHANGE GAME INFORMATION
function SetGame(city) {
    

    if(city == "São Paulo") {
        next_game = new Date(2014,5,12,16).getTime();
        teams = "BRA v CRO";
    }

    if(city == "Salvador") {
        next_game = new Date(2014,5,13,1).getTime();
        teams = "ESP v NED";
    }

    if(city == "Brasilia") {
        next_game = new Date(2014,5,15,12).getTime();
        teams = "SUI v ECU";
    }

    if(city == "Belo Horizonte") {
        next_game = new Date(2014,5,14,12).getTime();
        teams = "COL v GRE";
    }

    if(city == "Cuiaba") {
        next_game = new Date(2014,5,13,18).getTime();
        teams = "CHI v AUS";
    }

    if(city == "Curitiba") {
        next_game = new Date(2014,5,14,15).getTime();
        teams = "IRN v NGA";
    }

    if(city == "Manaus") {
        next_game = new Date(2014,5,14,18).getTime();
        teams = "ENG v ITA";
    }

    if(city == "Natal") {
        next_game = new Date(2014,5,13,12).getTime();
        teams = "MEX v CMR";
    }

    if(city == "Porto Alegre") {
        next_game = new Date(2014,5,15,15).getTime();
        teams = "FRA v HON";
    }

    if(city == "Recife") {
        next_game = new Date(2014,5,14,21).getTime();
        teams = "CIV v JPN";
    }

    if(city == "Rio de Janeiro") {
        next_game = new Date(2014,5,15,18).getTime();
        teams = "ARG v BIH";
    }

    if(city == "Fortaleza") {
        next_game = new Date(2014,5,14,15).getTime();
        teams = "URU v CRC";
    }
    
    
    fixture.innerHTML = teams;
    cityname.innerHTML = city;
    setTimeout(function () {slidein();}, 1);
}   

// RUN BOTH ACTIONS
function change(city) {
    setTimeout(function () {slideout();}, 1);
    setTimeout(function () {
        SetGame(city);
        clock();
    setInterval(clock, 1000);}, 450);
}

function slideout(value) {

    fixturediv.style.left = "310%";
    gametimediv.style.left = "510%";
    citynamediv.style.left = "110%";
    whitebox.style.left = "110%";

}

function slidein(value) {
    fixturediv.style.left = "0%";
    gametimediv.style.left = "0%";
    citynamediv.style.left = "0%";
    whitebox.style.left = "0%";

}



