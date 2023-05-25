import { api } from "@/utils/api";
import { type NextPage } from "next";

const TeamPage: NextPage = () => {
  const { data } = api.teamMember.getAll.useQuery();
  return (
    <>
      <div>
        <div className="items-center min-h-screen flex flex-col justify-center text-black bg-off-white">
          <div>Team Page</div>
          <div>
            {data?.map((teamMember) => {
              return (
                <div key={teamMember.id}>
                  <div>
                    {teamMember.memberName} {" -> "}{" "}
                    {teamMember.memberDescription}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
