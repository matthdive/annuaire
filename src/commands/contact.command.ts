import contactQuery from "@/query/contact.query"
import { Contact } from "@/domains/contact.interface"

export default {

    createContact(contact: Contact): void {
        try {
            const contacts: Array<Contact> = contactQuery.getContacts()
            contacts.push(contact)
            localStorage.setItem('contact', JSON.stringify(contacts))
        }
        catch(e){
            throw new TypeError("An error occured during the save of the contacts")
        }
    },
    deleteContact(index:number): void {
        try {
            const contacts: Array<Contact> = contactQuery.getContacts();
            const deleteC = contacts.splice(index, 1);
            localStorage.setItem('contact', JSON.stringify(contacts));
        }
        catch(e) {
            throw new TypeError("An error occured during the deletion of the contact")
        }
    },
    // updateContact(index:number): void {
    //     const contacts: Array<Contact> = contactQuery.getContacts();
    //     const updateC = contacts.map()
    // }
}