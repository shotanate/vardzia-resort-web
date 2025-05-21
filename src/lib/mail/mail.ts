"use server";

import * as handlebars from "handlebars";
import nodemailer from "nodemailer";
import { confirmationTemplate, reservationTemplate } from "./template";

type Args = {
  to: string;
  subject: string;
  body: string;
};

export const sendMail = async ({ to, subject, body }: Args) => {
  const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: SMTP_EMAIL,
      pass: SMTP_PASSWORD,
    },
  });

  try {
    const testResult = await transport.verify();
    console.log(testResult);
  } catch (error) {
    console.log(error);
  }

  try {
    const sendResult = await transport.sendMail({
      from: SMTP_EMAIL,
      to,
      subject,
      html: body,
    });

    console.log(sendResult);
  } catch (error) {
    console.log(error);
  }
};

export type BookingTemplateArgs = {
  name: string;
  email: string;
  phone: string;
  guests: number;
  startDate: string;
  endDate: string;
  roomType?: string;
  room: string;
  comment?: string;
};

export const compileReservationTemplate = async (
  input: BookingTemplateArgs
) => {
  const template = handlebars.compile(reservationTemplate);

  return template(input);
};

export const compileConfirmationTemplate = async (
  input: BookingTemplateArgs
) => {
  const template = handlebars.compile(confirmationTemplate);

  return template(input);
};
