"use server";

import { contactFormSchema, ContactFormValues } from "@/lib/schemas";
import { createOnePerson, createOneNote, createOneNoteTarget } from "@/lib/api";

type FormState = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  values: ContactFormValues,
): Promise<FormState> {
  const validatedData = contactFormSchema.safeParse(values);
  if (!validatedData.success) {
    return {
      success: false,
      message: "Invalid data provided. Please check your entries.",
    };
  }
  const { services, ...personData } = validatedData.data;

  try {
    const personId = await createOnePerson(personData);

    const noteContent = `Interested in the following services: ${services.join(", ")}.`;
    const noteId = await createOneNote(
      "New Contact Form Submission",
      noteContent,
    );

    await createOneNoteTarget(noteId, personId);

    return {
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred.";
    console.error("CRM Workflow Failed:", errorMessage);

    return {
      success: false,
      message: `We couldn't process your request fully. ${errorMessage}`,
    };
  }
}
