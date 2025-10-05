import { Contact } from '../models/Contact.js';

export class ContactView {
    displayContacts(contacts: Contact[]): void {
        if (contacts.length === 0) {
            console.log("La lista de contactos está vacía.");
            return;
        }

        console.log("\n=== LISTA DE CONTACTOS ===");
        contacts.forEach((contact, index) => {
            console.log(`${index + 1}. ID: ${contact.id}`);
            console.log(`   Nombre: ${contact.nombre}`);
            console.log(`   Email: ${contact.email}`);
            console.log(`   Teléfono: ${contact.telefono}`);
            console.log("   " + "-".repeat(30));
        });
        console.log(`Total de contactos: ${contacts.length}\n`);
    }

    displayMessage(message: string): void {
        console.log(message);
    }
}
