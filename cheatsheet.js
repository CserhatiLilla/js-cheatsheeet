/* 
const, let, var kulcsszavakkal hozunk létre változókat

az egyenlőségjel bal oldalán szerepel a változó neve és a jobb oldalán az  ehhez tartozó érték

a primitívek a következők: string, number, boolean azaz tru false, undefined és null


*/

let aString = "this is a string" ; // MINDIG idéző jelbe rakjuk a stringet backtickel ( Alt Gr 7) több soros stringet tudunk létrehozni `` a másik két fajta idézőjellel csak 1 sorosat"", '.

let aNumber = 1 ; //ezt nem szabad idézőjelbe rakni (szám!)

let aBoolean = false ; // nem szabad idézőjelbe tenni 

let anUndefined = undefined ; // ezt se szabad idézőjelbe tenni

let aNull = null ; //ezt sem rakjuk idézőjelbe

let notANumber = NaN ; // nem rakjuk idézőjelbe (not a number)

console.log(typeof aString) // string a típusa

console.log(typeof anUndefined) //udifined a típusa

console.log(typeof aNull) // object a típusa 

console.log(typeof notANumber) // szám a típusa

console.log(aFunction1());

function aFunction1(){ 
    // ez A függvény belseje

    // a függvény minden képpen returnnal  ha lefuttatjuk ha nem adunk meg mit/return akk undefined

    return "this is a function"
}


const aFunction2 = function(){
    //ez is egy fügvény majdnem ugyan úgy viselkedik mitha a függvénynek neve lenne
    
    return "thi is another function" 
}

console.log(aFunction2()); // minden változóban mentett dologhoz csak akkor férünk hozzá amik utána jönnek tehát csak utána tudjuk "lehívni"

function functionName(parameter1, parameter2){
    //végrehajtandó kód
}

{
    let y = 2
}
// itt nem lehet használni a fenti függvényt ha let vagy const-ot használunk

{
    var y = 2
}
// a var segítségével ide kint is használható a függvény ez a block scope

//itt nem tudom használni
function myfunction(){
    let carName = "Audi" //itt tudom használni a carName-t; ez egyben egy function scope 
}
//itt nem tudom használni ez egy local scop ami fction scope-ot tartalmaz

function myfunction(){
    let carName = "Audi"; //ez egy function scope. akkor is az lenne ha var-t vagy const-ot használnánk 
}

if(true){
    //ide jön ha teljesül a feltétel
  
  }else{
    //ide jön ha nem teljesül a feltétel
  }


console.log("0" == 0);

console.log("0" === 0);
//3dbot használd összehasonlításnak !!

// tömb felsorolás-forciklussal lehet rajtuk végigmenni
const arr = [34, 15,88,2] //ez egy tömb, négyzetes zárójel

for (let index = 0; index < arr.length; index++) {
    console.log(arr[index])    
}

for (const item of arr) {
    console.log(item)
}