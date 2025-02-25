const clicksDisplay = document.getElementById("Clicks")
const totalDisplay = document.getElementById("Total")

var totalMultiplier = 1
var multiplier = 1
var clicks = -1
var autoclicker = 0
var price11 = 50000
var restartPrice = 1000000

var price1 = 10
var multiplier1 = 1
var price2 = 500
var multiplier2 = 10

var price3 = 10000
var multiplier3 = 50
var price4 = 50000
var multiplier4 = 100

var price5 = 250000
var multiplier5 = 500
var price6 = 1000000
var multiplier6 = 1000

var price7 = 5000000
var multiplier7 = 5000
var price8 = 20000000
var multiplier8 = 10000

var price9 = 100000000
var multiplier9 = 50000
var price10 = 500000000
var multiplier10 = 100000

document.getElementById("Button").onclick = click
document.getElementById("Autoclicker").onclick = purchase11
document.getElementById("RestartButton").onclick = restart

document.getElementById("Shop1").onclick = purchase1
document.getElementById("Shop2").onclick = purchase2
document.getElementById("Shop3").onclick = purchase3
document.getElementById("Shop4").onclick = purchase4
document.getElementById("Shop5").onclick = purchase5
document.getElementById("Shop6").onclick = purchase6
document.getElementById("Shop7").onclick = purchase7
document.getElementById("Shop8").onclick = purchase8
document.getElementById("Shop9").onclick = purchase9
document.getElementById("Shop10").onclick = purchase10

document.getElementById("Shop1").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier1)
document.getElementById("Shop2").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier2)
document.getElementById("Shop3").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier3)
document.getElementById("Shop4").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier4)
document.getElementById("Shop5").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier5)
document.getElementById("Shop6").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier6)
document.getElementById("Shop7").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier7)
document.getElementById("Shop8").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier8)
document.getElementById("Shop9").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier9)
document.getElementById("Shop10").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier10)

const autoclicker1 = (autoclicker) => {
    setTimeout(() => {
    clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks+multiplier)
    clicks = clicks + (multiplier * totalMultiplier)
    if(autoclicker >= 1){
        autoclicker1(autoclicker)
    }
    }, autoclicker * 1000);
}

autoclicker1(autoclicker)

function restart(){
    if(clicks >= restartPrice){
        multiplier = 1
        clicks = -1, autoclicker = 0
        price11 = 50000, totalMultiplier = totalMultiplier + 0.5

        price1 = 10, multiplier1 = 1
        price2 = 500, multiplier2 = 10

        price3 = 10000, multiplier3 = 50
        price4 = 50000, multiplier4 = 100

        price5 = 250000, multiplier5 = 500
        price6 = 1000000, multiplier6 = 1000

        price7 = 5000000, multiplier7 = 5000
        price8 = 20000000, multiplier8 = 10000

        price9 = 100000000, multiplier9 = 50000
        price10 = 500000000, multiplier10 = 100000
        
        document.getElementById("Shop1").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier1), document.getElementById("Shop2").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier2)
        document.getElementById("Shop3").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier3), document.getElementById("Shop4").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier4)
        document.getElementById("Shop5").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier5), document.getElementById("Shop6").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier6)
        document.getElementById("Shop7").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier7), document.getElementById("Shop8").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier8)
        document.getElementById("Shop9").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier9), document.getElementById("Shop10").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier10)


        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks+multiplier)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Point / Click"
        document.getElementById("Text4").textContent = new Intl.NumberFormat("en-US").format(totalMultiplier) + "x Total Multiplier"
        restartPrice = restartPrice * 10
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(restartPrice) + " points to restart your progress."
    }
}

function click(){
    clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks+multiplier)
    clicks = clicks + (multiplier * totalMultiplier)
}

function purchase1(){
    if(clicks>=(price1)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price1)
        clicks = clicks-price1
        multiplier = multiplier + multiplier1
        multiplier1 = multiplier1 + 1
        document.getElementById("Shop1").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier1)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price1 = price1 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price1) + " points to purchase this upgrade."
    }
}

function purchase2(){
    if(clicks>=(price2)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price2)
        clicks = clicks-price2
        multiplier = multiplier + multiplier2
        multiplier2 = multiplier2 + 2
        document.getElementById("Shop2").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier2)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price2 = price2 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price2) + " points to purchase this upgrade."
    }
}

function purchase3(){
    if(clicks>=(price3)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price3)
        clicks = clicks-price3
        multiplier = multiplier + multiplier3
        multiplier3 = multiplier3 + 10
        document.getElementById("Shop3").textContent = "+" + multiplier3
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price3 = price3 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price3) + " points to purchase this upgrade."
    }
}

function purchase4(){
    if(clicks>=(price4)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price4)
        clicks = clicks-price4
        multiplier = multiplier + multiplier4
        multiplier4 = multiplier4 + 20
        document.getElementById("Shop4").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier4)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price4 = price4 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price4) + " points to purchase this upgrade."
    }
}

function purchase5(){
    if(clicks>=(price5)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price5)
        clicks = clicks-price5
        multiplier = multiplier + multiplier5
        multiplier5 = multiplier5 + 100
        document.getElementById("Shop5").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier5)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price5 = price5 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price5) + " points to purchase this upgrade."
    }
}

function purchase6(){
    if(clicks>=(price6)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price6)
        clicks = clicks-price6
        multiplier = multiplier + multiplier6
        multiplier6 = multiplier6 + 200
        document.getElementById("Shop6").textContent = "+" + multiplier6
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price6 = price6 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price6) + " points to purchase this upgrade."
    }
}

function purchase7(){
    if(clicks>=(price7)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price7)
        clicks = clicks-price7
        multiplier = multiplier + multiplier7
        multiplier7 = multiplier7 + 1000
        document.getElementById("Shop7").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier7)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price7 = price7 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price7) + " points to purchase this upgrade."
    }
}

function purchase8(){
    if(clicks>=(price8)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price8)
        clicks = clicks-price8
        multiplier = multiplier + multiplier8
        multiplier8 = multiplier8 + 2000
        document.getElementById("Shop8").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier8)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price8 = price8 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price8) + " points to purchase this upgrade."
    }
}

function purchase9(){
    if(clicks>=(price9)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price9)
        clicks = clicks-price9
        multiplier = multiplier + multiplier9
        multiplier9 = multiplier9 + 1000
        document.getElementById("Shop9").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier9)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price9 = price9 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price9) + " points to purchase this upgrade."
    }
}

function purchase10(){
    if(clicks>=(price10)){
        clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price10)
        clicks = clicks-price10
        multiplier = multiplier + multiplier10
        multiplier10 = multiplier10 + 2000
        document.getElementById("Shop10").textContent = "+" + new Intl.NumberFormat("en-US").format(multiplier10)
        document.getElementById("Text2").textContent = new Intl.NumberFormat("en-US").format(multiplier) + " Points / Click"
        price10 = price10 * 2
    }else{
        document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price10) + " points to purchase this upgrade."
    }
}

function purchase11(){
    if(clicks>=(price11)){
        if(autoclicker == 0){
            clicksDisplay.textContent = new Intl.NumberFormat("en-US").format(clicks-price11)
            clicks = clicks-price11
            autoclicker = autoclicker + 1
            document.getElementById("Autoclicker").className = "auto"
            autoclicker1(autoclicker)
        }
    }else{
        if(autoclicker == 0){
            document.getElementById("Text").textContent = "You must have " + new Intl.NumberFormat("en-US").format(price11) + " points to purchase this upgrade."
        }else{
            document.getElementById("Text").textContent = "This upgrade has reached it's highest level."
        }
    }
}
