import { api } from "@/utils/api";
import { type NextPage } from "next";

const EventsPage: NextPage = () => {
  const { data } = api.event.getAll.useQuery();

  return (
    <>
      <div className="items-center min-h-screen flex flex-col justify-center text-black bg-off-white">
        <div>Events Page</div>
        <div>
          {data?.map((event) => {
            console.log(event);
            return (
              <div key={event.id}>
                <div>{event.eventTitle}</div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default EventsPage;
