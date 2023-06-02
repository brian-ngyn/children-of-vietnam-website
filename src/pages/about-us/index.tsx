import GoalCard from "@/components/Cards/GoalCard";
import { api } from "@/utils/api";
import { type NextPage } from "next";
import Image from "next/image";

const TeamPage: NextPage = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-off-white pt-4 text-black md:pt-16">
        <div className="text-black">
          <div className="max-w-screen-xl px-4 py-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
            <div className="grid gap-y-12 md:grid-cols-2">
              <div className="flex flex-col">
                <div className="text-3xl font-bold sm:text-5xl">Mission</div>
                <div className="mt-4 text-gray-600">
                  By raising awareness and money for children, we hope to increase accessibility to
                  essential items and supplies, as well as aid in achieving a better future for
                  these children.
                </div>
              </div>
              <div className="flex h-64 justify-center">
                <div className="relative aspect-square overflow-visible">
                  <Image fill src="/images/support.svg" alt="Logo" style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>

            <div className="my-12 flex items-center justify-center">
              <Image src="/icons/ellipsis-vertical.svg" width={12} height={55} alt="ellipsis" />
            </div>

            <div className="max-w-2xl">
              <div className="text-3xl font-bold sm:text-5xl">Goals</div>
            </div>

            <div className="grid grid-cols-1 gap-8 md:mx-12 md:mt-8 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <GoalCard
                title="Donate"
                description="to as many orphanages as possible through fundraising events hosted by our club."
                logo="/icons/donate-icon.svg"
              />
              <GoalCard
                title="Impact"
                description="lives of Vietnamese youth and children by providing items that may be inaccessible."
                logo="/icons/impact-icon.svg"
              />
              <GoalCard
                title="Spread"
                description="Vietnamese tradition and culture!"
                logo="/icons/spread-icon.svg"
              />
              <GoalCard
                title="Raise"
                description="awareness and bring global support."
                logo="/icons/raise-icon.svg"
              />
              <GoalCard
                title="Inspire"
                description="others to take action."
                logo="/icons/inspire-icon.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
