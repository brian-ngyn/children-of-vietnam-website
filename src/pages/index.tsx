import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

const Home: NextPage = () => {
  const { user, isLoaded } = useUser();

  return (
    <>
      <Head>
        <title>The Children of Vietnam</title>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link
          rel="icon"
          href="/icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
        <link
          rel="apple-touch-icon"
          href="/apple-icon?<generated>"
          type="image/<generated>"
          sizes="<generated>"
        />
      </Head>
      <main className="flex min-h-screen flex-col items-center bg-off-white text-black">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full">
              <Image
                fill
                src="/logos/logo-blended-cropped.png"
                alt="Logo"
                style={{ objectFit: "contain" }}
              />
            </div>

            <div className="text-center lg:py-24 lg:text-left">
              <div className="text-3xl font-bold sm:text-5xl">
                Children of Vietnam
              </div>

              <div className="mt-4 text-gray-600">
                A non-profit, student-led organization, passionate about helping
                Vietnamese orphanages through raising awareness and donations!
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <Image
            src="/icons/ellipsis-vertical.svg"
            width={12}
            height={55}
            alt="ellipsis"
          />
        </div>
        <div className="mx-8 md:mx-24">
          <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:pb-12 lg:px-8 lg:pb-16">
            <div className="grid grid-cols-1 gap-8">
              <div className="flex h-full w-full flex-col items-center justify-center gap-y-4">
                <div className="text-3xl font-bold sm:text-5xl">
                  Who are we?
                </div>
                <div className="relative h-[250px] w-[300px] overflow-hidden rounded-lg md:h-[350px] md:w-[400px]">
                  <Image
                    fill
                    src="/images/groupphoto.svg"
                    alt="Logo"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <div>
                  <Link
                    href="/join-us"
                    className="rounded bg-green px-12 py-3 text-sm font-medium text-white transition hover:bg-green/75"
                  >
                    Join us today!
                  </Link>
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
