//1. Crée une fonction générique identity<T>(value: T): T.
function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("Hello")); 
console.log(identity<number>(42)); 

//2. Crée une fonction générique getFirst<T>(arr: T[]): T qui retourne le premier élément d’un tableau.
function getFirst<T>(arr: T[]): T | undefined{
  return arr[0];
}

console.log(getFirst<number>([1, 2, 3]));      
console.log(getFirst<string>(["a", "b", "c"])); 
console.log(getFirst<string>([]));  // undefined

//3. Crée une classe générique Repository<T> avec les méthodes add, remove et getAll.
class Repository<T>{
    private items :T[]=[];

    add(item: T): void {
        this.items.push(item);
    }
     remove(item: T): void {
    this.items = this.items.filter(i => i !== item);
    }
    getAll(): T[] {
        return this.items;
    }
}

const numberRepo = new Repository<number>();
numberRepo.add(10);
numberRepo.add(20);
console.log(numberRepo.getAll()); // [10, 20]
numberRepo.remove(10);
console.log(numberRepo.getAll()); // [20]

//4. Crée une interface générique ApiResponse<T> avec les propriétés data: T et error?: string.
interface ApiResponse <T>{
    data:T;
    error?:string;
}

type User = { id: number; name: string };

const successResponse: ApiResponse<User> = {
  data: { id: 1, name: "Emna" }
};

const errorResponse: ApiResponse<User> = {
  data: { id: 0, name: "" },
  error: "User not found"
};

console.log(successResponse);
console.log(errorResponse);