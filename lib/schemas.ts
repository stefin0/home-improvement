import { z } from "zod";
import { isValidPhoneNumber } from "libphonenumber-js";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, { message: "First Name is required." })
    .max(20, { message: "First Name must be less than 20 characters." }),
  lastName: z
    .string()
    .min(1, { message: "Last Name is required." })
    .max(20, { message: "Last Name must be less than 20 characters." }),
  primaryEmail: z.email({ message: "Invalid email address." }),
  primaryPhoneNumber: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number." }),
  services: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "Please select at least one service.",
  }),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
