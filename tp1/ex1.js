var a=1;
let b=2;
const c=3;

console.log("avant bloc",a,b,c);
{
    var a=10;
    let b=20;
    //const c=30;

    console.log("dans bloc",a,b,c);
}

console.log("apres bloc",a,b,c);

//var : a une portée fonctionnelle ou globale → donc même à l’intérieur d’un bloc {}, il écrase la valeur de a déclarée avant.

//let : a une portée de bloc → la valeur b=20 existe seulement à l’intérieur du bloc.

//const : a une portée de bloc mais surtout ne peut pas être réaffectée.