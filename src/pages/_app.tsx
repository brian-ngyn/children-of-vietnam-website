import { type AppType } from "next/app";

import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";

import { api } from "~/utils/api";

import Footer from "~/components/Navigation/Footer";
import Navbar from "~/components/Navigation/Navbar";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ClerkProvider {...pageProps}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </ClerkProvider>
  );
};

export default api.withTRPC(MyApp);
