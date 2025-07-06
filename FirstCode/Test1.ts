let i: number = 0;
while (i<15) {
  console.log(i);
  i ++;
}



// let person = prompt("Wessen Patronus willst du wissen? (Harry, Hermine, Ron)");
// if (person) { 
// person= person.trim().toLowerCase();
// }
// let patronus;

// switch (person) {
//   case "harry":
//     patronus = "Deer";
//     break;
//   case "hermine":
//     patronus = "Otter";
//     break;
//   case "ron":
//     patronus = "Rat";
//     break;
//   default:
//     patronus = "not found, ungültige Eingabe";
//     break;
// }

// alert(patronus); 


// let x: number= -1;
// if (x > 10) {
//   console.log("false");
// }
// else {
//   console.log("true");
// console.log("cheeseburger");
// }

// let x: number = 0;
//     if (!(x > 1)) {
//         console.log("Hello world");    
//     }
// namespace Test {
// console.log("aaaaaa");
// let x:number =1;
// {
//    // let x:number =0;
//     console.log(x)
// }
// console.log(x)
// // console.log(x) geht nicht weil nicht in Block
// // In einer Zeile ALT + Pfeiltasten um Zeilen/Auswahl zu verschieben
// }
// let v:number =1;
// if (v ==1){
//     console.log("Hello")}

// else{
//  console.log("goodbye")}
// // 1x "=" ist Deklarierung (Define or Zuweisungoperator/ !assignment operator!), 2x "=" ist Abfrage

// console.log("Switch")
// {
// let b:number=3;
// switch (b) {
//     case 1:
// console.log("hello")
// break;
//     case 2:
// console.log("goodbye")
// break;
//     default:
// console.log("hug")
// break;
// }
// }
// // zwei Namespaces in einer Datei sind nicht erlaubt
// namespace story {
//     type Parent = Window & {gameState: boolean};
//     declare let parent: Parent;

//     console.log(parent);
//     console.log(parent.gameState);
//     if (parent.gameState == true){
//         console.log("you cant get in again");
//         location.href = "FirstCode/owo.html";
    
//     }
//     parent.gameState = true;
//     console.log(parent.gameState);
// }
// console.log("Test alles hier drunter ist ein Test"); 

// console.log(2+3);

// let myName = "Dummbeutel";                              //variable myName vom Typ string
// console.log(myName); 

// let person = { name: "Anne", alter: 23 , hobby: "schlafen"};
// console.log(person);

// let x = 10;
// let y = [1, 2, 3, 4, 5];
// let z = (x + y[1])
// console.log("x ist:", x, "und y ist:", y, "und z ist", z);

// let personen = [
//   { name: "Anna", alter: 30 },
//   { name: "Ben", alter: 25 },
//   { name: "Clara", alter: 35 }
// ];
// console.table(personen);

// console.log("%cAchtung!", "color: red; font-weight: bold; font-size: 16px");

// console.group("Benutzerdaten");
// console.log("Name: Lisa");
// console.log("Alter: 28");
// console.groupEnd();

// console.time("Rechenzeit");

// let summe = 0;
// for (let i = 0; i < 1_000_000; i++) {
//   summe += i;
// }

// console.timeEnd("Rechenzeit");




//(Testing from the Booklet "pre test")
// let i: number = 1;
// while (i<20) {
//     console.log(i);
//     i++;
// }

//(Testing from the Booklet "post test")
// let i: number= 0;
// do {
//     console.log(i);
//     i++;
// } while (i<20);

//(Testing from the Booklet "complex control")
// let a: number= 10;
// let b: number= 5;
// for (let i : number = b; i > 1; i/=2) {
//  if (i == 3)
//     continue;
//  if (i == a)
//     break;
// console.log(i) ;

// }

//Testing from the Booklet "All key or indices"
// let o = {x: 1, y: 2};
// for (let key in o){
//     console.log(o[key]);
// }

//Testing from the Booklet "All values"
// let o = [1, 2, 3, 4];
// for (let value of o) {
//     console.log(o) ;
// }