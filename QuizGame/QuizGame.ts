namespace cool {
    console.log(fragen)
   let antwort0 =prompt(fragen[0].frage) 
   //hier kommt der Code für die logik des Spiels rein
    console.log(antwort0)
    if(antwort0=== fragen[0].antwort){
        console.log("ja")
    }
    else{
        alert("Nein")
    }
    let antwort1 =prompt(fragen[1].frage) 
    console.log(antwort1 )
    const istantwort1richtig=fragen[1].antworten?.map((x)=>{
return x===antwort1
    }).includes(true)
    if (istantwort1richtig){
        alert("true")
    }
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
        console.log('richtig');

    }
}*/
 
