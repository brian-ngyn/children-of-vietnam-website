import GoalCard from "@/components/GoalCard";
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure
                  fugit totam iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus,
                  cumque id tenetur quibusdam, quos fuga minima.
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

              <div className="mt-4 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure fugit
                totam iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus, cumque id
                tenetur quibusdam, quos fuga minima.
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-8 md:m-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <GoalCard
                title="Lorem, ipsum dolor."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
                color="bg-[#F95738]"
              />
              <GoalCard
                title="Lorem, ipsum dolor."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
                color="bg-[#4A6FA5]"
              />
              <GoalCard
                title="Lorem, ipsum dolor."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
                color="bg-[#F95738]"
              />
              <GoalCard
                title="Lorem, ipsum dolor."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
                color="bg-[#4A6FA5]"
              />
              <GoalCard
                title="Lorem, ipsum dolor."
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
                color="bg-[#F95738]"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
