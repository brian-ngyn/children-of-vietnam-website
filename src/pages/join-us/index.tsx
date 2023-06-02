import ExecPositionCard from "@/components/Cards/ExecPositionCard";
import PerkCard from "@/components/Cards/PerkCard";
import Carousel from "@/components/Carousel/Carousel";
import { LoadingPage } from "@/components/LoadingPage";
import { api } from "@/utils/api";
import { type NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
};

const JoinUsPage: NextPage = () => {
  const images = [
    "temp-slides/slide1.svg",
    "temp-slides/slide2.svg",
    "temp-slides/slide3.svg",
    "temp-slides/slide4.svg",
  ];

  const [successfullySubscribed, setSuccessfullySubscribed] = useState<boolean>(false);
  const { data, isLoading } = api.openExecPosition.getAll.useQuery();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const { mutate, isLoading: isSubscribing } = api.mailchimp.subscribe.useMutation({
    onSuccess: () => {
      reset();
      setSuccessfullySubscribed(true);
      // now wait 5 seconds and set it back to false
      setTimeout(() => {
        setSuccessfullySubscribed(false);
      }, 5000);
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      console.log(errorMessage);
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
  };

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="flex min-h-screen justify-center bg-off-white text-black">
          <div className="flex flex-col items-center pt-4">
            <div className="flex max-w-screen-xl flex-col gap-y-8 px-4 py-8 pt-12 sm:px-6 lg:px-8">
              <div className="flex flex-col">
                <div className="p-4 md:p-12 lg:px-16 lg:py-8">
                  <div className="mx-auto max-w-2xl text-center">
                    <div className="text-3xl font-bold text-gray-900 sm:text-5xl">
                      Interested in being a member? Join our mailing list!
                    </div>

                    <div className="pt-4 text-gray-500">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dolor officia
                      blanditiis repellat in, vero, aperiam porro ipsum laboriosam consequuntur
                      exercitationem incidunt tempora nisi?
                    </div>
                  </div>

                  <div className="mx-auto mt-4 max-w-xl">
                    <form onSubmit={handleSubmit(onSubmit)} className="relative sm:flex sm:gap-4">
                      <div className="sm:flex-1">
                        <input
                          placeholder="Email address"
                          {...register("email", {
                            required: true,
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "invalid email address",
                            },
                          })}
                          className="w-full rounded-md border-gray-200 bg-gray-100 p-3 text-gray-700 shadow-md transition focus:border-white focus:outline-none focus:ring focus:ring-my-blue"
                        />
                      </div>

                      <button
                        type="submit"
                        className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-green px-5 py-3 text-white shadow-md transition hover:bg-green/75 focus:outline-none sm:mt-0 sm:w-auto"
                      >
                        <span className="text-sm font-medium">Sign Up</span>
                        <svg
                          className="h-5 w-5 rtl:rotate-180"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                          />
                        </svg>
                      </button>
                    </form>
                    <div className="absolute left-0 w-full items-center justify-center">
                      <div className="mt-3 flex cursor-default flex-col items-center justify-center">
                        <span
                          className={`absolute top-3 text-red-700 transition-all duration-300 ease-in-out ${
                            errors.email ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          Invalid Email
                        </span>
                        <span
                          className={`absolute top-3 text-my-blue transition-all duration-300 ease-in-out ${
                            isSubscribing ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          Adding you to the mailing list...
                        </span>
                        <span
                          className={`absolute top-3 text-green transition-all duration-300 ease-in-out ${
                            successfullySubscribed ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          Successfully subscribed!
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-3xl font-bold sm:text-5xl">Open Executive Positions</div>
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
              <div className="flex w-full flex-col items-center justify-center pb-16 md:flex-row md:gap-12">
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
                  <div className="grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 md:grid-rows-2 md:gap-6">
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
                    <PerkCard title="Perk 5" description="Work globally to help transform lives" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default JoinUsPage;
