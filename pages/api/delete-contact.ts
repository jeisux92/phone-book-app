import type { NextApiRequest, NextApiResponse } from "next";
import { contacts, removeContactById } from "../../db/contacts";

type Data = {
  name: string;
  lastName: string;
  phone: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  if (!id) {
    return res.status(400);
  }
  const element = +id;
  removeContactById(element);
  res.status(200).end();
}
