import { FunctionComponent } from "react";

export type ContactProps = {
    id: number;
    name: string;
    lastName: string;
    phone: number;
}
export type ContactActionsProps = {
    onDeleteContact: () => void;
    onEditContact: () => void;
}

const UserTile: FunctionComponent<ContactProps & ContactActionsProps> = ({ name, lastName, phone, onEditContact, onDeleteContact }) => {
    return <li className="d-flex align-items-center list-group-item row justify-content-between" onClick={() => onEditContact()}>
        <div className="col-6">
            <p className="fw-bold">{name} {lastName}</p>
            <p className="fs-6 text-muted"><i className="bi bi-telephone-fill"></i> {phone}</p>

        </div>
        <div className="col-1 col-sm-2">

            <button className="btn btn-danger btn-sm" onClick={(e) => {
                e.stopPropagation();
                onDeleteContact()
            }}>
                <i className="bi bi-trash-fill"></i>
            </button>
        </div>
    </li>
}

export default UserTile