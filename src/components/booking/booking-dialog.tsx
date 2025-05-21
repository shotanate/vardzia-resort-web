"use server";

import { getTranslations } from "next-intl/server";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { BookingForm } from "./booking-form";

export const BookingDialog = async () => {
  const t = await getTranslations();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="lg" className="text-md font-bold">
          {t("common.book_now")}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="border-b pb-3 mb-3">
          <DialogTitle>{t("booking.dialog_title")}</DialogTitle>
        </DialogHeader>
        <BookingForm />
        <DialogFooter className="border-t pt-3 mt-3">
          <Button
            type="submit"
            size="sm"
            form="booking-form"
            variant="outline"
            className="text-sm font-bold"
          >
            {t("common.send")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
