namespace Test {
console.log("aaaaaa");
let x:number =1;
{
   // let x:number =0;
    console.log(x)
}
console.log(x)
// console.log(x) geht nicht weil nicht in Block
// In einer Zeile ALT + Pfeiltasten um Zeilen/Auswahl zu verschieben
}
let v:number =1;
if (v ==1){
    console.log("Hello")}

else{
 console.log("goodbye")}
// 1x "=" ist Deklarierung (Define or Zuweisungoperator/ !assignment operator!), 2x "=" ist Abfrage

console.log("Switch")
{
let b:number=3;
switch (b) {
    case 1:
console.log("hello")
break;
    case 2:
console.log("goodbye")
break;
    default:
console.log("hug")
break;
}
}
// zwei Namespaces in einer Datei sind nicht erlaubt
namespace story {
    type Parent = Window & {gameState: boolean};
    declare let parent: Parent;

    console.log(parent);
    console.log(parent.gameState);
    if (parent.gameState == true){
        console.log("you cant get in again");
        location.href = "FirstCode/owo.html";
    
    }
    parent.gameState = true;
    console.log(parent.gameState);
}
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