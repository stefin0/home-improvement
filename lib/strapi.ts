import qs from "qs";
import { Service } from "./types";

const STRAPI_API_URL =
  process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://127.0.0.1:1337";

type StrapiQuery = Record<string, unknown>;

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @returns The fetched data
 **/
export async function fetchApi<T>(
  endpoint: string,
  query?: StrapiQuery,
): Promise<{ data: T }> {
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

  return res.json();
}

export async function getServicesForNav() {
  const response = await fetchApi<Service[]>("services", {
    fields: ["title", "slug"],
  });
  return response.data.map((service) => ({
    href: `/services/${service.slug}`,
    text: service.title,
  }));
}
