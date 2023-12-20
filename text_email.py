import os
import smtplib
from dotenv import load_dotenv

load_dotenv()

email_from = os.getenv("EMAIL")
password = os.getenv("PASSWORD")
email_to = 'dummyemail@test.com'
email_cc = ['cc_recipient1@example.com', 'cc_recipient2@example.com']

subject = 'Input Subject Here'
message_body = 'Message Content'
cc_header = ', '.join(email_cc)
message = f"Subject: {subject}\nTo: {email_to}\nCc: {cc_header}\n\n{message_body}"

server = smtplib.SMTP("smtp.gmail.com", 587)
server.starttls()

server.login(email_from, password)
server.sendmail(email_from, [email_to] + email_cc, message)
print(f"Email has been successfully sent to {email_to} with CC to {', '.join(email_cc)}")

server.quit()
