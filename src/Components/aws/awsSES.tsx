import AWS from "aws-sdk";
import { FormData } from "../types/FormData";

const ses = new AWS.SES({ region: "us-east-1" });

ses.config.update({
  credentials: new AWS.Credentials({
    accessKeyId: process.env.AWS_ACCESS_ID_NEXT || "",
    secretAccessKey: process.env.AWS_ACCESS_KEY_NEXT || "",
  }),
});

function formatData(data: FormData) {
  const formattedData = `
  name: ${data.first + " " + data.last} \n
  email: ${data.email} \n
  phone: ${data.phone} \n
  company: ${data.company} \n
  comment: ${data.comment} 
  `;
  const params = {
    Destination: {
      ToAddresses: ["y.jordan210@gmail.com"],
    },
    Message: {
      Body: {
        Text: {
          Data: formattedData,
        },
      },
      Subject: {
        Data: "Thanks for submitting info to Jordan Y",
      },
    },
    Source: "y.jordan210@gmail.com",
  };
  return params;
}

export const AWSSES = (data: FormData) => {
  const params = formatData(data);
  console.log("SES sent");
  // ses.sendEmail(params, function (data, err: AWS.SES.SendEmailResponse) {
  //   if (err) {
  //     console.log(err, err.MessageId);
  //   } else {
  //     console.log(data);
  //   }
  // });
  return;
};
