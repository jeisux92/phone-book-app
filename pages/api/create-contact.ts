// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { contacts, setContact } from "../../db/contacts";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  setContact(req.body);
  res.status(201).end();
}
