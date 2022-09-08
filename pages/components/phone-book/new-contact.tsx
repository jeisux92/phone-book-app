import { type } from "os";
import { FunctionComponent, useState } from "react"
import { ContactProps } from "./user-tile";

type NewContactProps = {
    contact?: Partial<ContactProps>;
    onSubmit: (name: string, lastName: string, phone: number) => void;

}

const NewContact: FunctionComponent<NewContactProps> = ({ contact, onSubmit: onSubmitForm }) => {
    const [firstName, setFirstname] = useState<string>(contact?.name ?? '');
    const [lastName, setLastName] = useState<string>(contact?.lastName ?? '');
    const [phone, setPhone] = useState<string>(contact?.phone ? `${contact?.phone}` : '');


    return <form className="row g-3 needs-validation" onSubmit={(e) => {
        e.preventDefault();
        onSubmitForm(firstName, lastName, +phone)
    }}>
        <div className="col-md-4">
            <label className="form-label">First name</label>
            <input type="text" className="form-control" onChange={(e) => setFirstname(e.target.value)} value={firstName} required />
            <div className="valid-feedback">
                Looks good!
            </div>
        </div>
        <div className="col-md-4">
            <label className="form-label">Last name</label>
            <input type="text" className="form-control" onChange={(e) => setLastName(e.target.value)} value={lastName} required />
            <div className="valid-feedback">
                Looks good!
            </div>
        </div>
        <div className="col-md-4">
            <label className="form-label">Phone</label>
            <div className="input-group has-validation">
                <input type="number" className="form-control" min={0} onChange={(e) => setPhone(e.target.value)} value={phone} required />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
        </div>

        <div className="col-12">
            <button className="btn btn-primary" type="submit">Submit</button>
        </div>
    </form >
}


export default NewContact;