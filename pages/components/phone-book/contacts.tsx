import { FunctionComponent } from "react";
import UserTile, { ContactProps } from "./user-tile";

type ContactsProps = {
    contacts: ContactProps[];
    onDeleteContact: (id: number) => void;
    onEditContact: (id: number) => void;
}

const Contacts: FunctionComponent<ContactsProps> = ({ contacts, onDeleteContact, onEditContact }) => {
    return <ul className=" list-group">
        {contacts?.map((x, index) =>
            <UserTile onDeleteContact={() => onDeleteContact(x.id)} id={x.id}
                key={index} name={x.name}
                lastName={x.lastName} phone={x.phone}
                onEditContact={() => onEditContact(x.id)} />)
        }


    </ul >

}

export default Contacts