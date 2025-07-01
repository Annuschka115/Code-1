namespace cool {
  //Hier kommen die Fragen rein
  console.log("Fragen geladen")

  // Fragentypen:
  //  1.Single Choice: Ja oder Nein Antwort
  // 2.Multiple Choice: Mehrere Antworten möglich
  // 3.Open Ended: Freitextantwort
  // 4.Range: Schätzfrage mit puffer oder korrektem Bereich
  export const fragen = [
    {
      frage: "Seesterne sind Steine \n true/false", antwort: "false", type: "single", antwort_ja: "cool B)", antwort_nein: "Selber Stein"
    },
    {
      frage: "Reifen? \n ", antworten: ["ja","Ja", "nein","Nein", "was","Was", "reifen","Reifen", "Reifen.", "reifen.", "reifen?"], type: "multiple", antwort_ja: "genius Gonzalez", antwort_nein: ":("
    },
    {
      frage: "warum ist die Banane krum?", antworten: ["weil die jemand krum biegt", "Reifen"], type: "multiple", antwort_ja: "oha, stark", antwort_nein: "falsch, Besserwisser"
    },
    {
      frage: "Wann Grill? \n (A)Jetzt \n (B)nie \n (C)gestern", antwort: "A", type: "single", antwort_ja: "yay Grill!", antwort_nein: "manno :("
    },
  ]
}