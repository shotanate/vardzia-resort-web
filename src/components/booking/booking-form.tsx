"use client";

import { send } from "@/server/actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { DateRange } from "react-day-picker";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { StayPeriodPicker } from "./stay-period-picker";

const formSchema = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  email: z.string().email(),
  phone: z.string(),
  guestsCount: z.number().min(1),
  stayPeriod: z.object({
    from: z.date().optional(),
    to: z.date().optional(),
  }),
  comment: z.string().optional(),
});

export type FormValues = z.infer<typeof formSchema>;

type Props = {
  onClose: () => void;
  setIsLoading: (isLoading: boolean) => void;
};

export const BookingForm = ({ onClose, setIsLoading }: Props) => {
  const t = useTranslations();
  const { room_type } = useParams<{ room_type: string }>();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      guestsCount: 1,
      stayPeriod: {
        from: new Date(),
        to: new Date(),
      },
      comment: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    setIsLoading(true);
    try {
      await send({
        name: `${values.firstName} ${values.lastName}`,
        email: values.email,
        phone: values.phone,
        guests: values.guestsCount,
        startDate: values.stayPeriod.from
          ? format(values.stayPeriod.from, "dd/MM")
          : "",
        endDate: values.stayPeriod.to
          ? format(values.stayPeriod.to, "dd/MM")
          : "",

        roomType: room_type,
        room: t(`room_types.${room_type}.title`),
        comment: values.comment,
      });
      toast.success(t("booking.toast_success"));
      onClose();
    } catch (error) {
      console.log(error);
      toast.error(t("booking.toast_error"));
    }
    setIsLoading(false);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
        id="booking-form"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("booking.form.first_name")}</FormLabel>
              <FormControl>
                <Input placeholder="Jon" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("booking.form.last_name")}</FormLabel>
              <FormControl>
                <Input placeholder="Doe" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("booking.form.email")}</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="info@vardziaresort.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("booking.form.phone")}</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="+995 5XX XX XX XX" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="guestsCount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("booking.form.number_of_guests")}</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  value={field.value}
                  onChange={(event) =>
                    field.onChange(Number(event.target.value))
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="stayPeriod"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("booking.form.stay_period")}</FormLabel>
              <FormControl>
                <StayPeriodPicker
                  date={field.value as DateRange}
                  setDate={field.onChange}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="comment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t("booking.form.comment")}</FormLabel>
              <FormControl>
                <Textarea placeholder="comment..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
