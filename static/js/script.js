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

do{
    firstName = prompt("Inserisci il tuo nome")
}while(firstName === null)


let d1 = prompt("Qual è la capitale dell'italia")
if(d1.toLowerCase().trim() === "roma"){
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era roma")
}


let d2 = prompt("Il ladro del fumetto italiano")
if(d2.toLowerCase().trim() === "diabolik"){
    console.log("Risposta corretta")


}else{
    risposteErrate += 1
    console.log("La risposta correta era diabolik")
}


let d3 = prompt("Il fiore che si gira verso il sole")
if(d3.toLowerCase().trim() === "girasole"){
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era girasole ")
}


let d4 = prompt("Di che colore è la fragola?")
if(d4.toLowerCase().trim() === "rossa"){
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era rossa ")
}


let d5 = prompt("Il fiume di Firenze")
if(d5.toLowerCase().trim() === "arno"){
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era arno ")
}


let d6 = prompt("Qual è l'isola più grande del mondo?")
if(d6.toLowerCase().trim() === "groenlandia"){
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era groenlandia")
}


let d7 = prompt("Con 12 colori diversi, la bandiera di quale paese è la più colorata al mondo?")
if(d7.toLowerCase().trim() === "belize"){
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era belize")
}


let percentuale = (risposteErrate / totDomande)*100
console.log("Percentuale riposte sbagliate:", percentuale.toFixed(2) + "%")

