let aktuelleZahl = 50
let neueZufallszahl
let punktzahl = 0

function hoeher(){
    neueZufallszahl = Math.round(Math.random()*100)
    document.getElementById("ausgabe").innerHTML= neueZufallszahl
    if(neueZufallszahl > aktuelleZahl){
        punktzahl = punktzahl + 1
        aktuelleZahl = neueZufallszahl
        document.getElementById("ergebnis").innerHTML = "Du lagst richtig und dein Score wurde um 1 erhöht! Dein Score:" + punktzahl
    }else{
        punktzahl = 0
        document.getElementById("ergebnis").innerHTML = "Du lagst falsch und dein Score wurde zurückgesetzt! Dein Score:" + punktzahl
    }
}
function tiefer(){
    neueZufallszahl = Math.round(Math.random()*100)
    document.getElementById("ausgabe").innerHTML = neueZufallszahl
    if(neueZufallszahl < aktuelleZahl){
        punktzahl = punktzahl + 1
        aktuelleZahl = neueZufallszahl
        document.getElementById("ergebnis").innerHTML = "Du lagst richtig und dein Score wurde um 1 erhöht! Dein Score:" + punktzahl
    }else{
        punktzahl = 0
        document.getElementById("ergebnis").innerHTML = "Du lagst falsch und dein Score wurde zurückgesetzt! Dein Score:" + punktzahl
    }
}