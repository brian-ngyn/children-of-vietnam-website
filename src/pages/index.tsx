import { api } from "@/utils/api";
import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>The Children of Vietnam</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon?<generated>" type="image/<generated>" sizes="<generated>" />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <main className="items-center min-h-screen flex flex-col text-black bg-off-white">
        <div>
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:pt-12 sm:px-6 lg:pt-16 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
              <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
                <Image
                  fill
                  src="/logo-blended-cropped.png"
                  alt="Logo"
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="lg:py-24 text-center lg:text-left">
                <div className="text-3xl font-bold sm:text-5xl">Children of Vietnam</div>

                <div className="mt-4 text-gray-600">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic atque
                  tenetur quis eius quos ea neque sunt, accusantium soluta minus veniam tempora
                  deserunt? Molestiae eius quidem quam repellat.
                </div>

                <Link
                  href="/join-us"
                  className="mt-8 inline-block rounded bg-green px-12 py-3 text-sm font-medium text-white transition hover:bg-green/75"
                >
                  Join us today!
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Image src="/ellipsis-vertical.svg" width={12} height={55} alt="ellipsis" />
        </div>
        <div>
          <div className="min-w-screen mx-8 md:mx-24 mt-18">
            <div className="mx-auto max-w-screen-xl px-4 py-8 sm:pb-12 sm:px-6 lg:pb-16 lg:px-8">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-64 overflow-hidden rounded-lg order-last md:order-first sm:h-80 lg:h-full">
                  <Image fill src="/support.svg" alt="Logo" style={{ objectFit: "contain" }} />
                </div>

                <div className="lg:py-24 text-center lg:text-left">
                  <div className="text-3xl font-bold sm:text-5xl">Who are we?</div>

                  <div className="mt-4 text-gray-600">
                    A non-profit, student-led organization, passionate about helping Vietnamese
                    orphanages through raising awareness and donations!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
