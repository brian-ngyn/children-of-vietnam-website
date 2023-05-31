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
        <div className="flex min-h-screen justify-center bg-off-white text-black">
          <div className="flex flex-col items-center pt-4 md:pt-16">
            <div className="flex max-w-screen-xl flex-col gap-y-12 px-4 py-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
              <div className="text-3xl font-bold sm:text-5xl">Meet the Team</div>

              <div className="">
                <div className="flex flex-col gap-x-24 gap-y-10 md:flex-row">
                  {data?.map((teamMember) => {
                    return (
                      <div className="flex flex-col gap-2" key={teamMember.id}>
                        <div className="flex flex-row gap-6">
                          <div className="relative h-[130px] w-[130px] md:h-[175px] md:w-[175px]">
                            <Image
                              src={
                                teamMember.memberImage
                                  ? teamMember.memberImage
                                  : "/images/female-avatar.svg"
                              }
                              fill
                              style={{ objectFit: "cover", borderRadius: "999px" }}
                              alt="Photo"
                            />
                          </div>
                          <div className="flex w-48 flex-col">
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
