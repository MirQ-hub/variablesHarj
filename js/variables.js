/* 
    Created on : May, 2019 
    Author     : Liisa Auer, Oulu University of Applied Sciences
    Licence    : CC-BY-4.0
*/
 
/*
 * Student name : Mirva Väänänen
 * Started date :
 * Ended   date :
 * 
 */

function t01() {
    let name= document.getElementById("name").value;
    document.getElementById("welcome").innerHTML=name;  

}

function t02() {        
    let secInMinutes = 60;
    let minInHours = 60;
    let hoursInDays = 24;
    let dayInYear = 365;

    let secInYear = secInMinutes * minInHours * hoursInDays *dayInYear 
    document.getElementById("seconds").innerHTML=secInYear;
    
}

function t03() {
    let first= document.getElementById("first").value;
    let second = document.getElementById("second").value;
    let third = document.getElementById("third").value;
    let average = (first * second * third)/3
    document.getElementById("average").innerHTML= average.toFixed(2);


}

function t04() {
    let num1 =Number(document.      getElementById("number1").value);
    let num2 = Number(document.
        getElementById("number2").value);

    let sum = num1 + num2;
    let dec = num1 - num2;
    let mult = num1 * num2;
    let div = num1 / num2;
    let rem = num1 % num2;

    document.getElementById("d3").innerHTML=sum;
    document.getElementById("d6").
    innerHTML=dec;
    document.getElementById("d9").
    innerHTML=mult;
    document.getElementById("d12").
    innerHTML=div;
    document.getElementById("15").
    innerHTML=rem;
    

}


function t05() {  
    let price = document.getElementById("price").value
    let disc = document.getElementById("percent").value;
    let newPrice = price * ( disc/100)
    document.getElementById("newprice").innerHTML=newPrice.toFixed(2);


}

function t06() {
    let byear = document.getElementById("year").value;
    let date =new Date();
    let year = date.getFullYear();
    let age = year - byear;
    document.getElementById("age").innerHTML=age


}

function t07() {
    let seats = document.getElementById("seats").value;
    let guests = document.getElementById("guests").value;
    let remaining = seats - guests;
    document.getElementById("remaining").innerHTML=remaining;


}

function t08() {
    let plants = document.getElementById("plants").value;
    let distance = document.getElementById("distance").value;
    let cm = 1 * distance * plants;
    let m = 0.01 * distance * plants;

    document.getElementById("length_cm").innerHTML=cm;
    document.getElementById("length_m").innerHTML=m;



}

function t09() {
    let guests = document.getElementById("participant").value;
    let sausage = 3* guests;
    let drink = 5* guests;
    let tomato = 2 * guests;
    let egg = 1* guests;

    document.getElementById("sausages").innerHTML=sausage;
    document.getElementById("drinks").innerHTML=drink
    document.getElementById("tomatoes").innerHTML=tomato;
    document.getElementById("eggs").innerHTML=egg;


}




