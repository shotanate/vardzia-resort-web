export const confirmationTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reservation Confirmation</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
      body {
          font-family: 'Inter', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #f9f4f4;
          color: #333;
          line-height: 1.6;
      }
      .container {
          max-width: 600px;
          margin: 30px auto;
          padding: 30px;
          background-color: #ffffff;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
      }
      h1 {
          color: #92264a;
          text-align: center;
          margin-bottom: 30px;
          font-weight: 700;
      }
      p {
          margin-bottom: 20px;
          font-size: 16px;
      }
      .info-block {
          background-color: #f4f4f4;
          padding: 15px;
          margin-bottom: 20px;
          border-radius: 6px;
          border: 1px solid #ddd;
      }
      .info-block strong {
          color: #92264a;
      }
      .footer {
          text-align: center;
          margin-top: 30px;
          font-size: 14px;
          color: #888;
      }
    </style>
</head>
<body>
    <div class="container">
        <h1>Your Request Has Been Received</h1>
        <p>Dear {{name}},</p>
        <p>Thank you for your reservation at Vardzia Resort. We are pleased to confirm your booking details:</p>
        <div class="info-block">
            <p><strong>Name:</strong> {{name}}</p>
            <p><strong>Email:</strong> {{email}}</p>
            <p><strong>Phone:</strong> {{phone}}</p>
            <p><strong>Number of Guests:</strong> {{guests}}</p>
            <p><strong>Stay Period:</strong> {{startDate}} - {{endDate}}</p>
            <p><strong>Room:</strong> {{room}}</p>
            <p><strong>Special Requests/Comments:</strong> {{comment}}</p>
        </div>
        <p>Thank you for your enquiry - our team will reach out shortly. Please note that this is not a booking confirmation. If your requested dates are not available, we will offer you the closest alternatives.</p>
        <div class="footer">
            <p>Vardzia Resort</p>
            <p>Address: Akhalkalaki District, Village Gogasheni, “Chachkari”</p>
            <p>+995 591 321 515</p>
        </div>
    </div>
</body>
</html>
`;

export const reservationTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Reservation Received</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f9f4f4;
            color: #333;
            line-height: 1.6;
        }
        .container {
            max-width: 600px;
            margin: 30px auto;
            padding: 30px;
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #92264a;
            text-align: center;
            margin-bottom: 30px;
            font-weight: 700;
        }
        p {
            margin-bottom: 20px;
            font-size: 16px;
        }
        .info-block {
            background-color: #f4f4f4;
            padding: 15px;
            margin-bottom: 20px;
            border-radius: 6px;
            border: 1px solid #ddd;
        }
        .info-block strong {
            color: #92264a;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            font-size: 14px;
            color: #888;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>New Reservation Request</h1>
        <p>Dear Vardzia Resort Team,</p>
        <p>A new reservation has been received with the following details:</p>
        <div class="info-block">
            <p><strong>Name:</strong> {{name}}</p>
            <p><strong>Email:</strong> {{email}}</p>
            <p><strong>Phone:</strong> {{phone}}</p>
            <p><strong>Number of Guests:</strong> {{guests}}</p>
            <p><strong>Stay Period:</strong> {{startDate}} - {{endDate}}</p>
            <p><strong>Room type:</strong> {{roomType}}</p>
            <p><strong>Room:</strong> {{room}}</p>
            <p><strong>Special Requests/Comments:</strong> {{comment}}</p>
        </div>
        <p>Please review details and reach out to the guest with reservation confirmation or alternative dates.</p>
        <div class="footer">
            <p>Vardzia Resort</p>
            <p>Address: Akhalkalaki District, Village Gogasheni, “Chachkari”</p>
            <p>+995 591 321 515</p>
        </div>
    </div>
</body>
</html>
`;
