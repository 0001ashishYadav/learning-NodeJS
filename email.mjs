import nodemailer from "nodemailer";

// Looking to send emails in production? Check out our Email API/SMTP product!
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "d1f3cbe955e732",
    pass: "a5ddea9b0a5266",
  },
});

const sendEmail = async (to, subject, body) => {
  const info = await transport.sendMail({
    from: "Apple Server <a@apple.com>",
    to,
    subject,
    html: body,
  });
};

export { sendEmail };
