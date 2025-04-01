import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    BOOKING_ROOMS_BASE_URL:
      "https://www.booking.com/hotel/ge/vardziaresort.en-gb.html?activeTab=main",
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
