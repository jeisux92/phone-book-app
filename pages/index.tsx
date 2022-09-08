import Contacts from "./components/phone-book/contacts";
import SearchBar from "./components/phone-book/search-bar";
import NewContact from "./components/phone-book/new-contact";
import { createNewContact, deleteContact, getAllContacts, updateContact } from "../services/user-service";
import { useEffect, useRef, useState } from "react";
import { ContactProps } from "./components/phone-book/user-tile";

const HomeBook = () => {
    const [show, setShow] = useState(false)
    const [contacts, setContacts] = useState<ContactProps[]>([])

    const [query, setQuery] = useState('')

    const [contact, setContact] = useState<Partial<ContactProps>>({})

    const buttonModalRef = useRef<HTMLButtonElement>(null)

    const openModal = () => {
        setShow(true)

        const { Modal } = require("bootstrap");
        const myModal = new Modal("#exampleModal");
        myModal.show({});
    }

    useEffect(() => {
        debugger
        getContacts(query)
    }, [query])

    const getContacts = async (query: string) => {
        const response = await getAllContacts(query)
        setContacts(response.data)
    }


    const onNewContact = async (name: string, lastName: string, phone: number) => {
        try {
            if (contact.id) {

                await updateContact(contact.id, { lastName, name, phone })
            } else {
                await createNewContact({ lastName, name, phone })
            }
            getContacts(query)
            buttonModalRef.current?.click();
        } catch (error) {
        }
    }

    const onEditContact = (id: number) => {
        setContact(contacts.find(co => co.id == id) ?? {})
        setShow(true)
        openModal()
    }

    const onDeleteContact = async (id: number) => {
        try {
            await deleteContact(id)
            getContacts(query)
            buttonModalRef.current?.click();
        } catch (error) {
        }
    }


    return <div className="container" >
        <div className="row justify-content-center" >
            <div className="col-8 bg-light ">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="d-inline fs-3"><i className="fs-3 bi bi-journal-bookmark-fill"></i> Phone Book App</h1>
                    </div>
                </div>
                <div className="d-flex pt-3 row justify-content-between">
                    <div className="col-3">
                        <h3 className="d-inline fs-4">Contacts</h3>

                    </div>
                    <div className="col-3 col-sm-4">
                        <div className="d-grid gap-2">
                            <button className="btn btn-primary" onClick={() => {
                                setContact({});
                                openModal()
                            }}>+Add Contact</button>
                        </div>

                    </div>
                </div>
                <div className="row py-3">
                    <div className="col-12">
                        <SearchBar search={query} onSearch={(value) => setQuery(value)} />
                    </div>
                </div>
                <div className="row  px-2">
                    <div className="col-12">
                        <Contacts onDeleteContact={onDeleteContact} onEditContact={onEditContact} contacts={contacts} />
                    </div>
                </div>
            </div>
        </div>
        {<div
            className="modal fade "
            id="exampleModal"
            role="dialog"
            data-bs-backdrop="static"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                            Add New Contact
                        </h5>
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            onClick={() => setShow(false)}
                            ref={buttonModalRef}
                        ></button>
                    </div>
                    <div className="modal-body">
                        {show && <NewContact onSubmit={onNewContact} contact={contact} />}
                    </div>
                </div>
            </div>
        </div>}
    </div>
}


export default HomeBook;