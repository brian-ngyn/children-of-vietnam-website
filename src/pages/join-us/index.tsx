import { LoadingPage } from "@/components/LoadingPage";
import { api } from "@/utils/api";
import { type NextPage } from "next";

const JoinUsPage: NextPage = () => {
  const { data, isLoading } = api.openExecPosition.getAll.useQuery();
  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="items-center min-h-screen flex flex-col justify-center text-black bg-off-white">
          <div className="text-5xl font-bold">TODO</div>
          <div>Join Us Page</div>
          {data?.map((openExecPosition) => {
            return (
              <div key={openExecPosition.id}>
                <div>{JSON.stringify(openExecPosition)}</div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default JoinUsPage;
