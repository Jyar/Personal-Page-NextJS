// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import { ref, set } from "firebase/database";
// import { db } from "../../../utils/firebase";
import { FormData } from "../../Components/types/FormData";
import { AWSSES } from "@/Components/aws/awsSES";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<string>
) {
  function writeUserData(data: FormData) {
    if (req.method !== "POST") {
      res.status(405).send("incorrect request");
    }
  }

  writeUserData(JSON.parse(req.body));
  AWSSES(JSON.parse(req.body));

  res.status(200).json("success");
}
