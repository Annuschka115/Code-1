"use strict";
var cool;
(function (cool) {
    var _a;
    console.log(cool.fragen);
    let antwort0 = prompt(cool.fragen[0].frage);
    //hier kommt der Code für die logik des Spiels rein
    console.log(antwort0);
    if (antwort0 === cool.fragen[0].antwort) {
        console.log("ja");
    }
    else {
        alert("Nein");
    }
    let antwort1 = prompt(cool.fragen[1].frage);
    console.log(antwort1);
    const istantwort1richtig = (_a = cool.fragen[1].antworten) === null || _a === void 0 ? void 0 : _a.map((x) => {
        return x === antwort1;
    }).includes(true);
    if (istantwort1richtig) {
        alert("true");
    }
    // Logik des Spiels:
    // 1.Spiel starten mit einem Button
    // 2.Logik der Fragetypen
})(cool || (cool = {}));
/*let owo: string[] = ["1", "2", "3"];
let uwu: string[] = ["3", "1", "2"];
for (let i:number = 0; i = owo.length; i++) {
    let a: number= 2;
    a= a -1;
    if (owo[i]== uwu[a]) {
        console.log('richtig');

    }
}*/
//# sourceMappingURL=QuizGame.js.map