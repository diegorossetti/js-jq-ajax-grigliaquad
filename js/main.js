/* EX di oggi: Griglia quadrati che diventano di un colore a seconda di cosa risponde una API che
interrogo

DESCRIZIONE:

Griglia 6x6, ad ogni click parte una richiesta AJAX che prende un numero random da 1 a 9.
Se è <= 5 il quadrato diventa giallo, se è> di 5 il quadrato diventa verde.
Il numero ottenuto appare al centro del quadrato */

$(".grid .square").click(function() {
    var squareClicked = $(this);
    $.ajax({
        url: "https://flynn.boolean.careers/exercises/api/random/int",
        success: function(data) {
            console.log(data.response);
            if (data.response <= "5") {
                squareClicked.addClass("yellow-back");
            }
            else {
                squareClicked.addClass("green-back");
            }
            squareClicked.find(".num").text(data.response);
            squareClicked.off();
        }
    });
});