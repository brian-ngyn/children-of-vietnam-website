import { LoadingPage } from "@/components/LoadingPage";
import { api } from "@/utils/api";
import { type NextPage } from "next";

const EventsPage: NextPage = () => {
  const { data, isLoading } = api.event.getAll.useQuery();

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="items-center min-h-screen flex flex-col pt-64 text-black bg-off-white">
          <div className="text-5xl font-bold">TODO</div>
          <div>Events Page</div>
          <div className="">
            {data?.map((event) => {
              return (
                <div key={event.id}>
                  <div className="break-all">{JSON.stringify(event)}</div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default EventsPage;
