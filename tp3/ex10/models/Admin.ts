import { Person } from './Person';
import { Role } from './Person';

export class Admin extends Person {
constructor(id: number, name: string) {
super(id, name, 'Admin');
}
}