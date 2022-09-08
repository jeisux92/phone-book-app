import axios from "axios";
import { ContactProps } from "../pages/components/phone-book/user-tile";

const createNewContact = (contact: Omit<ContactProps, "id">) =>
  axios.post(`/api/create-contact`, contact);

const getAllContacts = (query: string) =>
  axios.get(`/api/get-contacts?name=${query}`);

const deleteContact = (id: number) =>
  axios.delete(`/api/delete-contact?id=${id}`);

const updateContact = (id: number, contact: Omit<ContactProps, "id">) =>
  axios.put(`/api/update-contact?id=${id}`, contact);

export { createNewContact, getAllContacts, deleteContact, updateContact };
