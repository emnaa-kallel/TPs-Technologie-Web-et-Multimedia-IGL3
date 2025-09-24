const tab1 = [1, 2, 3];
const tab2 = [4, 5, 6];
const tab12 = [...tab1, ...tab2];
console.log(tab12); 


const user = { name: "Noor", age: 10, city: "Tunis" };
console.log(user);  
const newUser = { ...user, age: 20 }; 
console.log(newUser); 
  
