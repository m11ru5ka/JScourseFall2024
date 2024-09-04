// harjoittelemiani koodin pätkiä
// muuttuja
var firstname = "Mira";
var lastname = "Valkama";
alert(firstname);

document.write(lastname);
alert(firstname+" "+lastname);
console.log(lastname+", "+firstname);

// Ehtoja
var x = 50;
var order ='Beer';

if (x < 50) {
    document.write("He's over 50!");
} else if (x <= 50 && x > 30){
    document.write("Middle aged man, who ordered some "+order);
} else
    document.write("It seems you're underaged.");


    var x = 39;
    var order = 'Beer. ';
    var drink = 'Tequila. ';
    if (x > 50) {
    document.write.style=h1("He's over 50!" );
    } else if (x <= 50 && x> 40){
    document.write("Middle aged man, who ordered some "+order);
    } else if (x <= 40 && x> 30){
    document.write("Runaway Family guy, who ordered some "+drink);
    } else {
    document.write("It seems you're bit underaged. ");
    }

    var x = 39;
    var order = 'Beer. ';
    var drink = 'Tequila. ';
    if (x > 50) {
    document.write.style=h1("He's over 50!" );
    } else if (x <= 50 && x> 40){
    document.write("Middle aged man, who ordered some "+order);
    } else if (x <= 40 && x> 30){
    document.write("Runaway Family guy, who ordered some "+drink);
    } else {
    document.write("It seems you're bit underaged. ");
    }


    var x = 5;
    var y = 6;
    var z = x + y;
    console.log(z);
    alert(z);
    document.write(z);

    //Looppeja
    var arr = [];
for (var i=0; i<15; i++) {
arr.push(Math.random());

}
console.log(arr);


//funktioita

function addNumbers(a, b) {
    return a + b;
        }
    console.log(addNumbers(5, 10));

var a = 5;
var b =10;
function addNumbers(a,b){
    return a*b;
}
console.log(addNumbers(a,b));
//tulostaa consoleen 50

//funktio ja sen kutsuminen
console.log("True or false? ")
function areYouOldEnough (age) {
    if (age <18) {
        return false;
    } else
        return true;
}
console.log( areYouOldEnough (16));
document.write( areYouOldEnough(19));
alert(areYouOldEnough(5));
alert(areYouOldEnough(25));

// true/false ja lisätekstit consoliin / alerttiin
console.log("True or false? ")
function areYouOldEnough (age) {
    if (age <18) {
        return false +
            console.log("You aren't an adult! ");
    } else
        return true +
            alert("You aren't a youngster anymore, be careful!");
}
console.log( areYouOldEnough (16));
document.write( areYouOldEnough(19));
alert(areYouOldEnough(5));
alert(areYouOldEnough(25));

//objektin luominen
var person = {
    firstName:"John",
    lastName:"Doe",
    age:50,
    eyeColor:"blue"
};
console.log(person.age);
