import Carousel from "@/components/Carousel";
import ExecPositionCard from "@/components/ExecPositionCard";
import { LoadingPage } from "@/components/LoadingPage";
import PerkCard from "@/components/PerkCard";
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
        <div className="flex min-h-screen justify-center bg-off-white text-black">
          <div className="flex flex-col items-center pt-4 md:pt-16">
            <div className="flex max-w-screen-xl flex-col gap-y-8 px-4 py-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
              <div className="text-3xl font-bold sm:text-5xl">Open Executive Positions</div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {data?.map((openExecPosition) => {
                  return (
                    <div key={openExecPosition.id}>
                      <ExecPositionCard openExecPosition={openExecPosition} />
                    </div>
                  );
                })}
              </div>

              <div className="pt-16 text-3xl font-bold sm:text-5xl">Member Perks</div>
              <div className="flex justify-center items-center w-full flex-col md:flex-row md:gap-12">
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
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-6 grid-flow-row">
                    <PerkCard
                      title="Perk 1"
                      description="Develop skills for advocacy and activism"
                    />
                    <PerkCard title="Perk 2" description="Create opportunities to impact lives" />
                    <PerkCard title="Perk 3" description="Participate in and create fun events" />
                    <PerkCard
                      title="Perk 4"
                      description="Participate learn and experience vietnamese culture, history and traditions"
                    />
                    <PerkCard
                      title="Perk 5"
                      description="Work globally to help transform lives"
                    />
                  </div>
                </div>
              </div>

              <div className="pt-16 text-3xl font-bold sm:text-5xl">Interested?</div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
