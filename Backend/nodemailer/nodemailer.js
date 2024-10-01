const nodemailer = require("nodemailer");

function SendEmail({ email, name, phone, message }) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
      }
    });

    const mailOptions = {
    //    to: email,
    //   from: process.env.EMAIL,
      from:email,
      to:process.env.EMAIL, 
      subject: `Contact Form Submission from ${name}`,
      html: `
      <h3>Contact Form Submission</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return reject({ error: error.message });
      }
      resolve({ message: "Email sent successfully" });
    });
  });
}

module.exports = SendEmail;
