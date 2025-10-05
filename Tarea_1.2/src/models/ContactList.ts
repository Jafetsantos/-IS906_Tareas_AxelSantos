import { Contact } from './Contact.js';

export class ContactList {
    private contacts: Contact[] = [];

    getContacts(): Contact[] {
        return this.contacts;
    }

    addContact(nombre: string, email: string, telefono: string): Contact {
        const id = this.generateUniqueId();
        const newContact: Contact = {
            id,
            nombre,
            email,
            telefono
        };
        this.contacts.push(newContact);
        return newContact;
    }

    deleteContact(id: string): boolean {
        const initialLength = this.contacts.length;
        this.contacts = this.contacts.filter(contact => contact.id !== id);
        return this.contacts.length < initialLength;
    }

    private generateUniqueId(): string {
        return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    }
}
