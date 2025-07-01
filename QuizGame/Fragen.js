"use strict";
var cool;
(function (cool) {
    //Hier kommen die Fragen rein
    console.log("Fragen geladen");
    // Fragentypen:
    //  1.Single Choice: Ja oder Nein Antwort
    // 2.Multiple Choice: Mehrere Antworten möglich
    // 3.Open Ended: Freitextantwort
    // 4.Range: Schätzfrage mit puffer oder korrektem Bereich
    cool.fragen = [
        { frage: "wer?", antwort: "ich"
        },
        { frage: "huh?", antworten: ["ja", "nein"]
        },
    ];
})(cool || (cool = {}));
//# sourceMappingURL=Fragen.js.map