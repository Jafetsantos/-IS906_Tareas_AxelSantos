import { ContactList } from '../models/ContactList.js';
import { ContactView } from '../views/ContactView.js';

export class ContactController {
    private model: ContactList;
    private view: ContactView;

    constructor(model: ContactList, view: ContactView) {
        this.model = model;
        this.view = view;
    }

    add(nombre: string, email: string, telefono: string): void {
        const newContact = this.model.addContact(nombre, email, telefono);
        this.view.displayMessage(`Contacto agregado exitosamente. ID: ${newContact.id}`);
    }

    remove(id: string): void {
        const success = this.model.deleteContact(id);
        if (success) {
            this.view.displayMessage(`Contacto con ID ${id} eliminado exitosamente.`);
        } else {
            this.view.displayMessage(`No se encontró un contacto con ID ${id}.`);
        }
    }

    showContacts(): void {
        const contacts = this.model.getContacts();
        this.view.displayContacts(contacts);
    }
}
