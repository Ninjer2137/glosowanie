async function dodaj(){
    const pesel = document.getElementById("peselinfo").value
    const imie = document.getElementById("imie").value
    const nazwisko = document.getElementById("nazwisko").value

    var radia = document.getElementsByTagName('input');
    var glos;
    for (var i = 0; i < radia.length; i++) {
        if (radia[i].type === 'radio' && radia[i].checked) {
            glos = radia[i].value;       
        }
    }

    const url = `${baseurl}/add/${pesel}/${imie}/${nazwisko}/${glos}`

    await fetch(url)
}