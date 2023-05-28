import EventCard from "@/components/EventCard";
import { LoadingPage } from "@/components/LoadingPage";
import imgLoader from "@/hooks/imgLoader";
import { api } from "@/utils/api";
import { type NextPage } from "next";

const EventsPage: NextPage = () => {
  const { data, isLoading } = api.event.getAll.useQuery();

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="flex justify-center min-h-screen min-w-screen text-black bg-off-white">
          <div className="items-center flex flex-col md:pt-16 pt-4">
            <div className="flex flex-col gap-y-8 max-w-screen-xl px-4 py-8 sm:pt-12 sm:px-6 lg:pt-16 lg:px-8">
              <div className="text-3xl font-bold sm:text-5xl">Upcoming Events</div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                {data
                  ?.filter((event) => new Date(event.eventDate) >= new Date())
                  .map((event) => {
                    return (
                      <>
                        <div key={event.id}>
                          <EventCard event={event} />
                        </div>
                      </>
                    );
                  })}
              </div>

              <div className="text-3xl font-bold sm:text-5xl pt-16">Past Events</div>
              <div className="grid md:grid-cols-2 grid-cols-1 gap-6">
                {data
                  ?.filter((event) => new Date(event.eventDate) < new Date())
                  .map((event) => {
                    return (
                      <>
                        <div key={event.id}>
                          <EventCard event={event} />
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EventsPage;
