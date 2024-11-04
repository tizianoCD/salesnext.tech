import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import { locales } from "./config";

export default getRequestConfig(async ({ locale }) => {
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) notFound();

  // Dynamically import the messages for the given locale
  const messages = await import(`./messages/${locale}.json`);

  return {
    messages: messages.default,
  };
});
