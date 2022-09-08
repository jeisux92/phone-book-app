import type { NextApiRequest, NextApiResponse } from "next";
import { contacts } from "../../db/contacts";
import { ContactEntity } from "../../db/models/contact.entity";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ContactEntity[]>
) {
  let queryContacts = contacts;
  if (req.query.name) {
    queryContacts = queryContacts.filter((x) =>
      x.lastName
        .toLowerCase()
        .includes((req.query?.name as string).toLowerCase())
    );
  }
  res.status(200).json(queryContacts);
}
