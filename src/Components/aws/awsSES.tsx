import AWS from "aws-sdk";

const ses = new AWS.SES({ region: "us-east-1" });

ses.config.update({
  credentials: new AWS.Credentials({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID || "",
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || "",
  }),
});

const params = {
  Destination: {
    ToAddresses: ["y.jordan210@gmail.com"],
  },
  Message: {
    Body: {
      Text: {
        Data: "This is the message body",
      },
    },
    Subject: {
      Data: "This is the message subject",
    },
  },
  Source: "y.jordan210@gmail.com",
};

export const AWSSES = () => {
  ses.sendEmail(params, function (data, err: AWS.SES.SendEmailResponse) {
    if (err) {
      console.log(err, err.MessageId);
    } else {
      console.log(data);
    }
  });
  return <div>success</div>;
};
