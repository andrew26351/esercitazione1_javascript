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
let risposteCorrette = 0
let risposteErrate = 0

do{
    firstName = prompt("Inserisci il tuo nome")
}while(firstName === null)


let d1 = prompt("Qual è la capitale dell'italia")
if(d1.toLowerCase().trim() === "roma"){
    risposteCorrette += 1
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era roma")
}


let d2 = prompt("Il ladro del fumetto italiano")
if(d2.toLowerCase().trim() === "diabolik"){
    risposteCorrette += 1
    console.log("Risposta corretta")


}else{
    risposteErrate += 1
    console.log("La risposta correta era diabolik")
}


let d3 = prompt("Il fiore che si gira verso il sole")
if(d3.toLowerCase().trim() === "girasole"){
    risposteCorrette += 1
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era girasole ")
}


let d4 = prompt("Di ce colore è la fragola?")
if(d4.toLowerCase().trim() === "rosso"){
    risposteCorrette += 1
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era rosso ")
}


let d5 = prompt("Il fiume di Firenze")
if(d5.toLowerCase().trim() === "arno"){
    risposteCorrette += 1
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era arno ")
}


let d6 = prompt("")
if(d6.toLowerCase().trim() === "roma"){
    risposteCorrette += 1
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era ")
}


let d7 = prompt("Qual è la capitale ditalia")
if(d7.toLowerCase().trim() === "roma"){
    risposteCorrette += 1
    console.log("Risposta corretta")

}else{
    risposteErrate += 1
    console.log("La risposta correta era ")
}


console.log("Il tuo punteggio è", risposteCorrette)



