const nodemailer = require('nodemailer');
      let transporter = nodemailer.createTransport({
             host: 'smtp.mailtrap.io',
             port: 2525,
             auth: {
              user: "0419ec73989415",
              pass: "b753e84e040d6c"
             }
     })

     message = {
      from: "from-example@email.com",
      to: "rceuca@yahoo.com",
      subject: "Subject",
      text: "Hello SMTP Email"
 }
 transporter.sendMail(message, function(err, info) {
      if (err) {
        console.log(err)
      } else {
        console.log(info);
      }
    })
