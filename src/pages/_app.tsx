import Footer from "@/components/Navigation/Footer";
import Navbar from "@/components/Navigation/Navbar";
import "@/styles/globals.css";
import { api } from "@/utils/api";
import { ClerkProvider } from "@clerk/nextjs";
import { type AppType } from "next/app";

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
