async function tableset(){
    const data = await fetch("http://localhost:3000/selecttable")
    const json = await data.json()

    for(var i=0; i<=json.length-1; i++){

        const div = document.createElement("div")
        
        const h1 = document.createElement("h1")
        h1.innerHTML = json[i].glos
        div.appendChild(h1)

        //pesel
        const pesel = document.createElement("p")
        pesel.innerHTML = "Pesel: " + json[i].pesel
        div.appendChild(pesel)

        //imie
        const imie = document.createElement("p")
        imie.innerHTML = "Imie: " + json[i].imie
        div.appendChild(imie)

        //nazwisko
        const nazw = document.createElement("p")
        nazw.innerHTML = "Nazwisko: " + json[i].nazwisko
        div.appendChild(nazw)

        document.getElementById("divson").appendChild(div)
    }
}

tableset()