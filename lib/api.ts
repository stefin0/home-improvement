async function twentyApiRequest(endpoint: string, payload: object) {
  const url = `${process.env.NEXT_PUBLIC_TWENTY_API_URL}/rest/${endpoint}`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.TWENTY_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorData = await response
      .json()
      .catch(() => ({ messages: ["An unknown API error occurred."] }));
    const errorMessage = `API Error on ${endpoint}: ${errorData.messages.join(", ")}`;
    throw new Error(errorMessage);
  }

  return response.json();
}

export async function createOnePerson(personData: {
  firstName: string;
  lastName: string;
  primaryEmail: string;
  primaryPhoneNumber: string;
}) {
  const { firstName, lastName, primaryEmail, primaryPhoneNumber } = personData;
  const personPayload = {
    name: { firstName, lastName },
    emails: { primaryEmail },
    phones: { primaryPhoneNumber },
  };
  const result = await twentyApiRequest("people", personPayload);
  const personId = result.data?.createPerson?.id;
  if (!personId)
    throw new Error("Could not retrieve Person ID from API response.");
  return personId;
}

export async function createOneNote(title: string, markdownContent: string) {
  const notePayload = {
    title,
    bodyV2: {
      markdown: markdownContent,
    },
  };
  const result = await twentyApiRequest("notes", notePayload);
  const noteId = result.data?.createNote?.id;
  if (!noteId) throw new Error("Could not retrieve Note ID from API response.");
  return noteId;
}

export async function createOneNoteTarget(noteId: string, personId: string) {
  const linkPayload = {
    noteId,
    personId,
  };
  // This function doesn't need to return anything if it succeeds.
  await twentyApiRequest("noteTargets", linkPayload);
}
