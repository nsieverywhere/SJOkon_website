import nodemailer from "nodemailer";

export default function handler(req, res) {
  if (req.method === "POST") {
    // Extract the email from the request body
    const { email } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "nsikansimon@gmail.com",
        pass: process.env.EMAIL_PASSWORD,
      },
      // tls: {
      //   rejectUnauthorized: false,
      // },
    });

    // Define the email options
    const mailOptions = {
      from: `${email}`, // Replace with your Gmail email address
      to: "nsikansimon@gmail.com", // Replace with the recipient's email address
      subject: `Add this user to newsletter from S.J Okon Website`,
      text: `Kindly add me to your newsletter, \n My email is: ${email}`,
    };

    // Send the email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Failed to subscribe." });
      } else {
        res
          .status(200)
          .json({ message: "You have been subscribed successfully." });
        console.log("Email sent:", info.response);
      }
    });
  } else {
    // Return an error response for unsupported request methods
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
