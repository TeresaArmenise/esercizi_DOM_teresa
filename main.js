// Creare 3 paragrafi in HTML e 3 bottoni.

// Il primo bottone dovrà nascondere i 3 paragrafi e farli ricomparire (quale classe di bootstrap potrebbe farlo?)
// il secondo bottone dovrà cambiare i colori dei paragrafi in maniera casuale
// il terzo bottone dovrà rendere i paragrafi in grassetto e farli tornare come prima.



let btnDisappear = document.querySelector("#btnDisappear")

let paragrafi = document.querySelectorAll(".paragrafo")
console.log (paragrafi)

paragrafi.forEach( p=> {
    btnDisappear.addEventListener ("click", ()=> {
        p.classList.toggle("d-none")
    })
}) 


let btnColor = document.querySelector("#btnColor")
paragrafi.forEach( p=> {
    btnColor.addEventListener( "click", ()=>{
  
    p.style.color = `rgb(${Math.round(Math.random()*(255-0)+0)}, ${Math.round(Math.random()*(255-0)+0)}, ${Math.round(Math.random()*(255-0)+0)})`
})
    
}) 


let btnBold = document.querySelector("#btnBold")

paragrafi.forEach( p=> {
    btnBold.addEventListener ("click", ()=> {
        p.classList.toggle("fw-bold")
}) 
})



// Esercizio 2: (extra)
// Provare a creare delle card di Bootstrap dinamicamente con Javascript come abbiamo fatto a lezione aggiungendo poi un form per implementare nuove cards(ricordate createElement() e appendChild()