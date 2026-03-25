const transporter = require('../config/nodemailer');

/**
 * Sends an OTP to the specified email address.
 * @param {string} email - The recipient's email address.
 * @param {string} otp - The 6-digit OTP to send.
 */
const sendOTP = async (email, otp) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Email Verification OTP',
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8">
          <title>OTP Verification</title>
        </head>
        <body style="margin:0; padding:0; font-family: Arial, sans-serif; background-color:#f4f6f8;">
          <table width="100%" cellpadding="0" cellspacing="0" style="padding:20px;">
            <tr>
              <td align="center">
                <!-- Card -->
                <table width="400" cellpadding="0" cellspacing="0" style="background:#ffffff; border-radius:10px; box-shadow:0 8px 20px rgba(0,0,0,0.1); overflow:hidden;">
                  
                  <!-- Header -->
                  <tr>
                    <td style="background:linear-gradient(135deg,#667eea,#764ba2); padding:20px; text-align:center; color:#fff;">
                      <h2 style="margin:0;">OTP Verification</h2>
                    </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                    <td style="padding:30px; text-align:center;">
                      <p style="color:#555; font-size:15px;">
                        Hello 👋,<br><br>
                        Use the following OTP to complete your verification process.
                      </p>

                      <!-- OTP Box -->
                      <div style="margin:25px 0;">
                        <span style="
                          display:inline-block;
                          background:#f1f3f6;
                          padding:15px 25px;
                          font-size:26px;
                          letter-spacing:5px;
                          font-weight:bold;
                          color:#333;
                          border-radius:8px;
                        ">
                          ${otp}
                        </span>
                      </div>

                      <p style="color:#777; font-size:14px;">
                        This OTP will expire in <b>10 minutes</b>.
                      </p>

                      <p style="color:#999; font-size:13px; margin-top:20px;">
                        If you didn’t request this, you can safely ignore this email.
                      </p>
                    </td>
                  </tr>

                  <!-- Footer -->
                  <tr>
                    <td style="background:#f9fafc; padding:15px; text-align:center; font-size:12px; color:#aaa;">
                      © 2026 Habit Tracker. All rights reserved.
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`OTP sent to ${email}`);
    } catch (error) {
        throw error;
    }
};

module.exports = sendOTP;
