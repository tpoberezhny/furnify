import createMiddleware from "next-intl/middleware";
import { locales } from "./config";

export default createMiddleware({
  locales,
  defaultLocale: "cz",
});

export const config = {
  matcher: ["/", "/(cz|en)/:path*"],
};
