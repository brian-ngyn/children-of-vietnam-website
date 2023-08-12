import { api } from "~/utils/api";

import PastEventsRow from "~/components/Admin/PastEvents/PastEventsRow";

const PastEventsTable = () => {
  const { data, isLoading } = api.event.getAll.useQuery();

  return (
    <>
      {!isLoading && (
        <div>
          <div className="pb-2 text-2xl font-semibold">Past Events</div>
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
                  ?.filter((event) => new Date(event.eventDate) < new Date())
                  .map((event) => {
                    return <PastEventsRow key={event.id} event={event} />;
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default PastEventsTable;
