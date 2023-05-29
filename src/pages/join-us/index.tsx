import Carousel from "@/components/Carousel";
import ExecPositionCard from "@/components/ExecPositionCard";
import { LoadingPage } from "@/components/LoadingPage";
import { api } from "@/utils/api";
import { type NextPage } from "next";
import Image from "next/image";

const JoinUsPage: NextPage = () => {
  const { data, isLoading } = api.openExecPosition.getAll.useQuery();
  const images = [
    "temp-slides/slide1.svg",
    "temp-slides/slide2.svg",
    "temp-slides/slide3.svg",
    "temp-slides/slide4.svg",
  ];

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="flex justify-center min-h-screen min-w-screen text-black bg-off-white">
          <div className="items-center flex flex-col md:pt-16 pt-4">
            <div className="flex flex-col gap-y-8 max-w-screen-xl px-4 py-8 sm:pt-12 sm:px-6 lg:pt-16 lg:px-8">
              <div className="text-3xl font-bold sm:text-5xl">Open Executive Positions</div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                {data?.map((openExecPosition) => {
                  return (
                    <div key={openExecPosition.id}>
                      <ExecPositionCard openExecPosition={openExecPosition} />
                    </div>
                  );
                })}
              </div>

              <div className="text-3xl font-bold sm:text-5xl pt-16">Member Perks</div>
              <div className="flex flex-col md:flex-row w-full md:gap-24">
                <Carousel loop>
                  {images.map((src, i) => {
                    return (
                      <div className="relative h-64 flex-[0_0_100%]" key={i}>
                        <Image src={src} fill alt="alt" style={{ objectFit: "cover" }} />
                      </div>
                    );
                  })}
                </Carousel>
                <div className="grow">
                  <div className="grid md:grid-cols-2 md:grid-rows-2 grid-cols-1 md:gap-12 gap-4">
                    <div className="bg-gray-100 rounded-xl p-4 shadow-lg transition hover:shadow-xl">
                      <div className="mt-2 font-bold">First Perk</div>

                      <div className="text-sm text-gray-600">
                        description of 1st perk i got lazy with the styling here, ill change it up
                        to look nicer later
                      </div>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-4 shadow-lg transition hover:shadow-xl">
                      <div className="mt-2 font-bold">second Perk</div>

                      <div className="text-sm text-gray-600">description of 2nd perk</div>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-4 shadow-lg transition hover:shadow-xl">
                      <div className="mt-2 font-bold">Third Perk</div>

                      <div className="text-sm text-gray-600">description of 3rd perk</div>
                    </div>
                    <div className="bg-gray-100 rounded-xl p-4 shadow-lg transition hover:shadow-xl">
                      <div className="mt-2 font-bold">fourth Perk</div>

                      <div className="text-sm text-gray-600">description of 4th perk</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-3xl font-bold sm:text-5xl pt-16">Interested?</div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                Subscribe to our mailing list ill add a forum to put in your email address to sign
                up later
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinUsPage;
