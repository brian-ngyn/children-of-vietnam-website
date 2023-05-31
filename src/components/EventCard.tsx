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
      <div className="shadow-black-200 block rounded-lg bg-gray-100 p-4 shadow-lg transition hover:shadow-xl">
        {eventPicture ? (
          <div className="relative h-56 w-full">
            <Image
              alt="Home"
              src={eventPicture}
              fill
              style={{ objectFit: "cover", borderRadius: "0.375rem" }}
            />
          </div>
        ) : null}
        <div className="mt-2">
          <div>
            <div className="font-medium">{eventTitle}</div>
            <div className="text-sm text-gray-500">{eventDescription}</div>
          </div>

          <div className="mt-6 flex items-center gap-8 text-xs">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="relative h-4 w-4">
                <Image
                  alt="Where"
                  src="/icons/building.svg"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="mt-1.5 sm:mt-0">
                <div className="text-gray-500">Where</div>

                <div className="font-medium">{eventLocation}</div>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="relative h-4 w-4">
                <Image
                  alt="Where"
                  src="/icons/calendar.svg"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>

              <div className="mt-1.5 sm:mt-0">
                <div className="text-gray-500">When</div>

                <div className="font-medium">{eventDate.toDateString()}</div>
              </div>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
              <div className="relative h-4 w-4">
                <Image alt="Where" src="/icons/clock.svg" fill style={{ objectFit: "contain" }} />
              </div>

              <div className="mt-1.5 sm:mt-0">
                <div className="text-gray-500">Time</div>

                <div className="font-medium">
                  {eventTime.toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EventCard;
