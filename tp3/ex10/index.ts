import { Library } from './services/Library';
import { ApiService } from './services/ApiService';
import { Repository } from './services/Repository';
import { User } from './models/User';
import { Admin } from './models/Admin';

async function main() { //async permet d’utiliser await pour attendre une promesse
    const library = new Library();
    const userRepo = new Repository<User>();
    const adminRepo = new Repository<Admin>();

    // Création d'utilisateurs
    const user1 = new User(1, 'Emna');
    const admin1 = new Admin(1, 'Mohamed');
    userRepo.add(user1);
    adminRepo.add(admin1);

    // Récupération des livres depuis API fictive
    const books = await ApiService.fetchBooks(); //await  attend que fetchBooks() renvoie le tableau de livres.
    books.forEach(book => library.addBook(book));

    console.log('Tous les livres :', library.getBooks());

    // Emprunter un livre
    const success = library.borrowBook(1);
    console.log(success ? 'Livre emprunté avec succès !' : 'Livre non disponible');

    console.log('Livres après emprunt :', library.getBooks());
}

main(); //pour exécuter tout le processus