import qs from "qs";

const STRAPI_API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337";

type StrapiQuery = Record<string, string | number | Record<string, unknown>>;

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to wrap the response data in
 * @returns The fetched data
 **/
export async function fetchApi<T>(
  endpoint: string,
  query?: StrapiQuery,
): Promise<T> {
  const url = new URL(`${STRAPI_API_URL}/api/${endpoint}`);

  if (query) {
    url.search = qs.stringify(query, {
      encodeValuesOnly: true,
    });
  }

  const res = await fetch(url.href, {
    headers: {
      Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}`,
    },
    next: {
      tags: [endpoint],
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch ${endpoint} data from Strapi`);
  }

  const data = await res.json();
  return data.data as T;
}
