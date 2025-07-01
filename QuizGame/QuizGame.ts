namespace cool {

    fragen.map((x) => {
        let input = prompt(x.frage)

        if (x.type === "single") {
            if (input === x.antwort) {
                alert(x.antwort_ja)
            }
            else {
                alert(x.antwort_nein)
            }
        }
        
        if (x.type === "multiple") {
            const istRichtig = x.antworten?.map((y) => {
                return y === input
            }).includes(true)

            if (istRichtig) {
                alert(x.antwort_ja)
            } else {
                alert(x.antwort_nein)
            }
        }
    })

 /*
    //Frage 1: single choice Antwort
    let antwort0 = prompt(fragen[0].frage)
    if (antwort0 === fragen[0].antwort) {
        alert("ja")
    }
    else {
        alert("Nein")
    }
    ///
    let antwort1 = prompt(fragen[1].frage)
    const istantwort1richtig = fragen[1].antworten?.map((x) => {
        return x === antwort1
    }).includes(true)
    if (istantwort1richtig) {
        alert("true")
    }
    else {
        alert(">:(")
    }
    ///
    let antwort2 = prompt(fragen[2].frage)
    const istantwort2richtig = fragen[2].antworten?.map((x) => {
        return x === antwort2
    }).includes(true)
    if (istantwort2richtig) {
        alert("Das ist korrekt")
    }
    else {
        alert("Dummbeutel")
    }

    let antwort3 = prompt(fragen[3].frage)
    if (antwort3 === fragen[3].antwort) {
        alert("Yay Grill")
    }
    else {
        alert("Ich brate dich")
    }
*/
    // Logik des Spiels:
    // 1.Spiel starten mit einem Button
    // 2.Logik der Fragetypen
}

/*let owo: string[] = ["1", "2", "3"];
let uwu: string[] = ["3", "1", "2"];
for (let i:number = 0; i = owo.length; i++) {
    let a: number= 2; 
    a= a -1;
    if (owo[i]== uwu[a]) {

    }
}*/

