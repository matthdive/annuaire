import { Contact } from "@/domains/contact.interface";


export default {
    getContacts(): Array<Contact> {
        const contacts = localStorage.getItem('contact') as string;
        const parsedContacts = JSON.parse(contacts);
        if (this.isContactEmpty(parsedContacts)) {
            return [];
        }
        return parsedContacts;
    },

    isContactEmpty(contactList: number): boolean {
        if (contactList) {
            return false;
        }
        return true;
    }
}