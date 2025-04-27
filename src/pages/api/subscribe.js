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
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Define the email options
    const mailOptions = {
      from: "admin@sjokonandsonsnigltd.com",
      // from: `${email}`, // Replace with your Gmail email address
      to: "admin@sjokonandsonsnigltd.com", // Replace with the recipient's email address
      subject: `From Nsikan: A user wants to join S.J Okon newsletter.`,
      text: `Kindly add me to your newsletter, \n My email is: ${email}`,
    };

    // Send the email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ message: "Unable to subscribe at the moment." });
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
