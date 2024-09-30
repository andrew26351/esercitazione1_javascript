// Qui scriviamo il codice JS

//let firstName = prompt("Qual è il tuo nome?")


//if(firstName === null){
  //  fristName = "Utente"
//}


// promp è una funzione che chiede un input all utente
///allert mostra un popup nella finstra del browser, è bloccante
//alert("Benveuto"+ firstName)


//console.log logga in console il messaggio
//console.log("Benvenuto" + firstName)


/* chiediamo un nome all utente + se l'utente non inserisce il nome continuamo a chiderlo finche non lo inserisce 
+ facciamo 7 domande al utente: a ciascuna domanda può rispondere con una sola parola  
- prendere in input la riposta del utente 
- fare un santize di base della risposta dell' utente 
- controllare se la risposta è giusta 
- in caso affermativo incrementare il numero di risposte corrette 
- in caso negativo mostrare la risposta correta 
+ al temine delle domande calcolare la percentuale delle riposte sbagliate
*/

let firstName
let risposteErrate = 0
let totDomande = 7


function sanitize(input){

    input = input.toLowerCase().trim()
    return input
}

function calcPerc(n1, n2){

    percentuale = (n1 / n2)*100
    return percentuale
}



do{
    firstName = prompt("Inserisci il tuo nome")
}while(firstName === null)


let d1 = prompt("Qual è la capitale dell'italia")
if(sanitize(d1) === "roma"){
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era roma")
}


let d2 = prompt("Il ladro del fumetto italiano")
if(sanitize(d2) === "diabolik"){
    console.log("Risposta corretta")


}else{
    risposteErrate += 1
    console.log("La risposta correta era diabolik")
}


let d3 = prompt("Il fiore che si gira verso il sole")
if(sanitize(d3) === "girasole"){
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era girasole ")
}


let d4 = prompt("Di che colore è la fragola?")
if(sanitize(d4) === "rossa"){
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era rossa ")
}


let d5 = prompt("Il fiume di Firenze")
if(sanitize(d5) === "arno"){
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era arno ")
}


let d6 = prompt("Qual è l'isola più grande del mondo?")
if(sanitize(d6) === "groenlandia"){
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era groenlandia")
}


let d7 = prompt("Con 12 colori diversi, la bandiera di quale paese è la più colorata al mondo?")
if(sanitize(d7) === "belize"){
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era belize")
}



calcPerc(risposteErrate, totDomande)
console.log("Percentuale riposte sbagliate:", percentuale.toFixed(2) + "%")

