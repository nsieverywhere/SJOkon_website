import nodemailer from 'nodemailer';

export default function handler(req, res) {
  if (req.method === 'POST') {
    // Extract the email from the request body
    const { name, email, message } = req.body;
    
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'nsikansimon@gmail.com', 
        pass: process.env.EMAIL_PASSWORD,
      },
        tls: {
          rejectUnauthorized: false,
        },
      
    });

    // Define the email options
    const mailOptions = {
      from: `${email}`, // Replace with your Gmail email address
      to: 'sjokon@gmail.com', // Replace with the recipient's email address
      subject: `${name} has a New Message from S.J Okon Website`,
      text: ` ${message} \n \n From: ${name}`,
    };

    // Send the email using Nodemailer
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email' });
      } else {
        console.log('Email sent:', info.response);
        res.status(200).json({ message: 'Email has been sent successfully.' });
      }
    });
  } else {
    // Return an error response for unsupported request methods
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

    
