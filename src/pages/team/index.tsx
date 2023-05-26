import { LoadingPage } from "@/components/LoadingPage";
import { api } from "@/utils/api";
import { type NextPage } from "next";
import Image from "next/image";

const TeamPage: NextPage = () => {
  const { data, isLoading } = api.teamMember.getAll.useQuery();

  if (isLoading) return <LoadingPage />;

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="flex justify-center min-h-screen min-w-screen text-black bg-off-white">
          <div className="items-center flex flex-col pt-16">
            <div className="flex flex-col gap-y-12 max-w-screen-xl px-4 py-8 sm:pt-12 sm:px-6 lg:pt-16 lg:px-8">
              <div className="text-3xl font-bold sm:text-5xl">Meet the Team</div>

              <div className="pt-18">
                <div className="flex flex-col md:flex-row gap-y-10 gap-x-24">
                  {data?.map((teamMember) => {
                    return (
                      <div className="flex flex-col gap-2" key={teamMember.id}>
                        <div className="flex flex-row gap-6">
                          <div className="relative h-[130px] w-[130px] md:h-[175px] md:w-[175px]">
                            <Image
                              src={
                                teamMember.memberImage
                                  ? teamMember.memberImage
                                  : "/female-avatar.svg"
                              }
                              fill
                              style={{ objectFit: "cover", borderRadius: "999px" }}
                              alt="Photo"
                            />
                          </div>
                          <div className="flex flex-col w-48">
                            <div className="text-3xl font-semibold">{teamMember.memberName}</div>
                            <div className="">{teamMember.memberRole}</div>
                            <div className="text-gray-500">{teamMember.memberDescription}</div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TeamPage;
