import { type NextPage } from "next";

import imgLoader from "~/hooks/imgLoader";
import { api } from "~/utils/api";

import EventCard from "~/components/Cards/EventCard";
import { LoadingPage } from "~/components/LoadingPage";

const EventsPage: NextPage = () => {
  const { data, isLoading } = api.event.getAll.useQuery();

  return (
    <>
      {isLoading ? (
        <LoadingPage />
      ) : (
        <div className="flex min-h-screen justify-center bg-off-white text-black">
          <div className="flex flex-col items-center pt-4 md:pt-16">
            <div className="flex max-w-screen-xl flex-col gap-y-8 px-4 py-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
              <div className="text-3xl font-bold sm:text-5xl">
                Upcoming Events
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

              <div className="pt-16 text-3xl font-bold sm:text-5xl">
                Past Events
              </div>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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
