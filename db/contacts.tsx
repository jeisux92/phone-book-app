import { ContactEntity } from "./models/contact.entity"

let contacts: ContactEntity[] = []



const removeContactById = (contactId: number) =>
    (contacts = contacts.filter((x) => x.id !== contactId));

const setContact = (contact: ContactEntity) => contacts.push({ ...contact, id: contacts.length + 1 });

const updateContact = (contactId: number, { name, lastName, phone }: ContactEntity) => {
    const contactToUpdate = contacts.find((x) => x.id === contactId);
    if (contactToUpdate) {
        contactToUpdate.name = name;
        contactToUpdate.lastName = lastName;
        contactToUpdate.phone = phone;
    }

}
export { contacts, setContact, removeContactById, updateContact };