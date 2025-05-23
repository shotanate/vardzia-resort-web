"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
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

export const BookingDialog = () => {
  const t = useTranslations();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Dialog onOpenChange={(open) => setIsOpen(open)} open={isOpen}>
      <DialogTrigger asChild>
        <Button
          variant="ghost"
          size="lg"
          className="text-md font-bold"
          onClick={() => setIsOpen(true)}
        >
          {t("common.book_now")}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-h-[98vh] overflow-y-auto">
        <DialogHeader className="border-b pb-3 mb-3">
          <DialogTitle className="font-bold">
            {t("booking.dialog_title")}
          </DialogTitle>
        </DialogHeader>
        <BookingForm
          onClose={() => setIsOpen(false)}
          setIsLoading={setIsLoading}
        />
        <DialogFooter className="border-t pt-3 mt-3">
          <Button
            type="submit"
            size="sm"
            form="booking-form"
            variant="outline"
            className="text-sm font-bold"
            disabled={isLoading}
          >
            {t("common.send")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
