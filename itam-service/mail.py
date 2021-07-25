import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
def Mail(email, name):

    gmail_user = 'scared.edge@gmail.com'
    gmail_password = 'human being'
    msg = MIMEMultipart()
    msg['From'] = gmail_user
    msg['To'] = email
    msg['Subject'] = "Registration Successful"
    body = '''
     Dear {},
        Congratulations, your registration is successful. Welcome to the ITAM Ecosystem!!


    helloworld.py
    '''.format(name)

    body = MIMEText(body)
    msg.attach(body)



    server = smtplib.SMTP('smtp.gmail.com', 587)
    server.ehlo()
    server.starttls()
    server.login(gmail_user, gmail_password)
    server.sendmail(gmail_user, email, msg.as_string())
    server.close()

    print('Email sent!')