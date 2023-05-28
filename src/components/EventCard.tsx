import { type Event } from "@prisma/client";
import Image from "next/image";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const { id, eventTitle, eventDescription, eventDate, eventTime, eventPicture, eventLocation } =
    event;
  return (
    <>
      <div className="bg-gray-100 block rounded-lg p-4 shadow-lg shadow-black-200">
        {eventPicture ? (
          <div className="h-56 w-full relative">
            <Image
              alt="Home"
              src={eventPicture}
              fill
              style={{ objectFit: "cover", borderRadius: "0.375rem" }}
            />
          </div>
        ) : null}
        <div className="mt-2">
          <dl>
            <div>
              <dd className="font-medium">{eventTitle}</dd>
            </div>

            <div>
              <dd className="text-sm text-gray-500">{eventDescription}</dd>
            </div>
          </dl>

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="relative h-4 w-4">
                <Image alt="Where" src="/building.svg" fill style={{ objectFit: "contain" }} />
              </div>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Where</p>

                <p className="font-medium">{eventLocation}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="relative h-4 w-4">
                <Image alt="Where" src="/calendar.svg" fill style={{ objectFit: "contain" }} />
              </div>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">When</p>

                <p className="font-medium">{eventDate.toDateString()}</p>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="relative h-4 w-4">
                <Image alt="Where" src="/clock.svg" fill style={{ objectFit: "contain" }} />
              </div>

              <div className="mt-1.5 sm:mt-0">
                <p className="text-gray-500">Time</p>

                <p className="font-medium">
                  {eventTime.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
