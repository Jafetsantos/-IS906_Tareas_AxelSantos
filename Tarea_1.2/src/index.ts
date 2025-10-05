import { ContactList } from './models/ContactList.js';
import { ContactView } from './views/ContactView.js';
import { ContactController } from './controllers/ContactController.js';

// Instanciar los componentes principales
const contactList = new ContactList();
const contactView = new ContactView();
const contactController = new ContactController(contactList, contactView);

console.log("=== GESTOR DE CONTACTOS (Patrón MVC) ===\n");

// 1. Mostrar la lista inicial (que deberá aparecer vacía)
console.log("1. Mostrando lista inicial:");
contactController.showContacts();

// 2. Agregar dos (2) nuevos contactos
console.log("2. Agregando contactos:");
contactController.add("Juan Pérez", "juan.perez@email.com", "555-1234");
contactController.add("María García", "maria.garcia@email.com", "555-5678");

// 3. Mostrar la lista actualizada
console.log("3. Mostrando lista actualizada:");
contactController.showContacts();

// 4. Eliminar uno de los contactos previamente agregados utilizando su ID
console.log("4. Eliminando contacto:");
const contacts = contactList.getContacts();
if (contacts.length > 0) {
    const contactToDelete = contacts[0];
    contactController.remove(contactToDelete.id);
}

// 5. Intentar eliminar un contacto con un ID que no exista
console.log("5. Intentando eliminar contacto inexistente:");
contactController.remove("id-inexistente");

// 6. Mostrar la lista final de contactos
console.log("6. Mostrando lista final:");
contactController.showContacts();

console.log("=== FIN ===");
