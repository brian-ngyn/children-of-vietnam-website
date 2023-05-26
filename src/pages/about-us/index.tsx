import GoalCard from "@/components/GoalCard";
import { api } from "@/utils/api";
import { type NextPage } from "next";
import Image from "next/image";

const TeamPage: NextPage = () => {
  return (
    <>
      <div>
        <div className="items-center flex flex-col pt-4 md:pt-16 text-black bg-off-white">
          <div className="text-black">
            <div className="max-w-screen-xl px-4 py-8 sm:pt-12 sm:px-6 lg:pt-16 lg:px-8">
              <div className="grid md:grid-cols-2 gap-y-12">
                <div className="flex flex-col">
                  <div className="text-3xl font-bold sm:text-5xl">Mission</div>
                  <div className="mt-4 text-gray-600">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure
                    fugit totam iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus,
                    cumque id tenetur quibusdam, quos fuga minima.
                  </div>
                </div>
                <div className="flex justify-center h-64">
                  <div className="relative aspect-square overflow-visible">
                    <Image fill src="/support.svg" alt="Logo" style={{ objectFit: "cover" }} />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center my-12">
                <Image src="/ellipsis-vertical.svg" width={12} height={55} alt="ellipsis" />
              </div>

              <div className="max-w-2xl">
                <div className="text-3xl font-bold sm:text-5xl">Goals</div>

                <div className="mt-4 text-gray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat dolores iure
                  fugit totam iste obcaecati. Consequatur ipsa quod ipsum sequi culpa delectus,
                  cumque id tenetur quibusdam, quos fuga minima.
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 gap-8 md:m-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
                <GoalCard
                  title="Lorem, ipsum dolor."
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
                  color="#F95738"
                />
                <GoalCard
                  title="Lorem, ipsum dolor."
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
                  color="#4A6FA5"
                />
                <GoalCard
                  title="Lorem, ipsum dolor."
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
                  color="#F95738"
                />
                <GoalCard
                  title="Lorem, ipsum dolor."
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
                  color="#4A6FA5"
                />
                <GoalCard
                  title="Lorem, ipsum dolor."
                  description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Error cumque tempore est ab
            possimus quisquam reiciendis tempora animi! Quaerat, saepe?"
                  color="#F95738"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
