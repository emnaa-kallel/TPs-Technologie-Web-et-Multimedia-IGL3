//1. Crée une fonction add(a: number, b: number): number.
function add(a: number, b: number): number {
    return a+b
} 
console.log(add(2, 3));

//2. Crée une fonction greet(name: string, age?: number) qui affiche un message différent selon si l’âge est fourni ou non.
function greet(name: string, age?: number):void{
    if (age !== undefined) {
    console.log(`Bonjour ${name}, vous avez ${age} ans`);
  } else {
    console.log(`Bonjour ${name}, age non precise`);
  }
}

greet("Emna");      // Bonjour Emna, age non precise
greet("Emna", 25);    // Bonjour Emna, vous avez 25 ans

//3. Crée une fonction power(base: number, exp: number = 2) qui calcule une puissance avec un exposant par défaut.
function power(base: number, exp: number = 2){
    return base ** exp;
}

console.log(power(3));    // 9 (3^2)
console.log(power(2, 3)); // 8 (2^3)

//4. Crée une fonction combine qui soit peut additionner deux nombres, soit concaténer deux chaînes (surcharge).
function combine(a: number, b: number): number;
function combine(a: string, b: string): string;
function combine(a: any, b: any): any {
  return a + b;
}

console.log(combine(2, 3));       // 5
console.log(combine("Hello, ", "Emna")); // "Hello, Emna"