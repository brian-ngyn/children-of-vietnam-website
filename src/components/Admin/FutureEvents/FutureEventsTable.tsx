import { useState } from "react";

import { api } from "~/utils/api";

import FutureEventsNewModal from "~/components/Admin/FutureEvents/FutureEventsNewModal";
import FutureEventsRow from "~/components/Admin/FutureEvents/FutureEventsRow";

const EventsTable = () => {
  const { data, isLoading } = api.event.getAll.useQuery();
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      {!isLoading && (
        <div>
          <div className="flex justify-between pb-2 text-2xl font-semibold">
            <div>Future Events</div>
            <button
              onClick={toggleModal}
              className="rounded bg-green px-4 py-2 text-xs font-medium text-white hover:bg-green/75"
            >
              New Event
            </button>
          </div>
          <div className="overflow-x-auto rounded-md bg-white p-2 shadow-lg">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
              <thead>
                <tr className="text-left">
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Title
                  </th>
                  <th className="max-w-sm px-4 py-2 font-medium text-gray-900">
                    Description
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Date
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Time
                  </th>
                  {/* <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Image</th> */}
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Location
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {data
                  ?.filter((event) => new Date(event.eventDate) >= new Date())
                  .map((event) => {
                    return <FutureEventsRow key={event.id} event={event} />;
                  })}
              </tbody>
            </table>
          </div>
          <div className={`${modalOpen ? "" : "hidden"}`}>
            <FutureEventsNewModal toggleModal={toggleModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default EventsTable;
