import { api } from "@/utils/api";
import { type NextPage } from "next";

const JoinUsPage: NextPage = () => {
  const { data } = api.openExecPosition.getAll.useQuery();
  return (
    <>
      <div className="items-center min-h-screen flex flex-col justify-center text-black bg-off-white">
        <div>Join Us Page</div>
        {data?.map((openExecPosition) => {
          return (
            <div key={openExecPosition.id}>
              <div>
                {openExecPosition.positionTitle} {" -> "}
                {openExecPosition.positionDescription}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default JoinUsPage;
