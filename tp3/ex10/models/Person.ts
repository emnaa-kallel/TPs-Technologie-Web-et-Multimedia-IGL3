export type Role = 'User' | 'Admin';


export abstract class Person {
constructor(
public readonly id: number,
public name: string,
public role: Role
) {}


isAdmin(): boolean {
return this.role === 'Admin';
}
}