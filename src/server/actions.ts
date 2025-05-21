"use server";

import {
  BookingTemplateArgs,
  compileConfirmationTemplate,
  compileReservationTemplate,
  sendMail,
} from "@/lib/mail/mail";

export const send = async (input: BookingTemplateArgs) => {
  try {
    await sendMail({
      to: process.env.INFO_EMAIL ?? "info@vardziaresort.com",
      subject: "New Reservation Request",
      body: await compileReservationTemplate(input),
    });

    await sendMail({
      to: input.email,
      subject: "Vardziaresort - Booking Inquiry Received",
      body: await compileConfirmationTemplate(input),
    });
  } catch (error) {
    console.log(error);
  }
};
