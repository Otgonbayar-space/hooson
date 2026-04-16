import { nodemailer } from 'nodemailer';

export class EmailService {
  static sendEmail = async (to: String, subject: String, type: String) => {
    const testAccount = await nodemailer.createTestAccount();

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
  };
}
