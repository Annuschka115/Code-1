"use strict";
var Test;
(function (Test) {
    console.log("aaaaaa");
    let x = 1;
    {
        // let x:number =0;
        console.log(x);
    }
    console.log(x);
    // console.log(x) geht nicht weil nicht in Block
    // In einer Zeile ALT + Pfeiltasten um Zeilen/Auswahl zu verschieben
})(Test || (Test = {}));
let v = 1;
if (v == 1) {
    console.log("Hello");
}
else {
    console.log("goodbye");
}
// 1x "=" ist Deklarierung (Define or Zuweisungoperator/ !assignment operator!), 2x "=" ist Abfrage
console.log("Switch");
{
    let b = 3;
    switch (b) {
        case 1:
            console.log("hello");
            break;
        case 2:
            console.log("goodbye");
            break;
        default:
            console.log("hug");
            break;
    }
}
// zwei Namespaces in einer Datei sind nicht erlaubt
var story;
(function (story) {
    console.log(parent);
    console.log(parent.gameState);
    if (parent.gameState == true) {
        console.log("you cant get in again");
        location.href = "FirstCode/owo.html";
    }
    parent.gameState = true;
    console.log(parent.gameState);
})(story || (story = {}));
