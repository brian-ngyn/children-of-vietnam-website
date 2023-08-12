import { useRouter } from "next/router";

import { type Event } from "@prisma/client";

import { api } from "~/utils/api";

interface EventProps {
  event: Event;
}

const FutureEventsRow = ({ event }: EventProps) => {
  const {
    id,
    eventTitle,
    eventDescription,
    eventDate,
    eventTime,
    eventPicture,
    eventLocation,
  } = event;
  const router = useRouter();

  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {eventTitle}
        </td>
        <td className="max-w-sm px-4 py-2 text-gray-700">{eventDescription}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {new Date(eventDate).toLocaleDateString()}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {eventTime.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          })}
        </td>
        {/* <td className="whitespace-nowrap px-4 py-2 text-gray-700">{eventPicture?.toString()}</td> */}
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {eventLocation}
        </td>
        <td className="flex justify-end whitespace-nowrap px-4 py-2 md:pr-12">
          <button
            onClick={() => alert("work in progress")}
            className="inline-block rounded bg-my-blue px-4 py-2 text-xs font-medium text-white hover:bg-my-blue/75"
          >
            Edit
          </button>
        </td>
      </tr>
    </>
  );
};

export default FutureEventsRow;
