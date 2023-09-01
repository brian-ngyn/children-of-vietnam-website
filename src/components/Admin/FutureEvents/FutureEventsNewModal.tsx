import Image from "next/image";
import { useRouter } from "next/router";
import { type SubmitHandler, useForm } from "react-hook-form";

import { api } from "~/utils/api";

interface FutureEventProps {
  toggleModal: () => void;
}

type Inputs = {
  eventTitle: string;
  eventDescription: string;
  eventDate: string;
  eventLocation: string;
};

const FutureEventsNewModal = ({ toggleModal }: FutureEventProps) => {
  const router = useRouter();
  // const { mutate, isLoading } = api.admin.newEvent.useMutation({
  //   onSuccess: (a) => {
  //     router.reload();
  //   },
  //   onError: (e) => {
  //     const errorMessage = e.data?.zodError?.fieldErrors.content;
  //     console.log(errorMessage);
  //   },
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    // mutate(data);
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/80">
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative rounded-md bg-white/100 px-48 py-60 shadow-xl">
            <div className="absolute left-0 top-0 flex h-full w-full flex-col p-8 text-xl">
              <div className="flex w-full items-center justify-between">
                <div className="text-xl font-semibold">New Event</div>
                <div onClick={toggleModal} className="hover:cursor-pointer">
                  <Image
                    src="/icons/circle-xmark.svg"
                    alt="close"
                    width={20}
                    height={20}
                  />
                </div>
              </div>
              <div className="mt-6 flex grow flex-col">
                <form
                  id="newEventForm"
                  // eslint-disable-next-line @typescript-eslint/no-misused-promises
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-4 text-sm"
                >
                  <div>
                    <div>
                      <label
                        htmlFor="eventTitle"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Title
                      </label>
                    </div>
                    <input
                      placeholder="Event Title"
                      {...register("eventTitle", {
                        required: true,
                      })}
                      className="mt-1 w-full rounded-md border border-gray-200 p-2 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-my-blue"
                    />
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor="eventDescription"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                    </div>
                    <input
                      placeholder="Description"
                      {...register("eventDescription", {
                        required: true,
                      })}
                      className="mt-1 w-full resize-none rounded-md border border-gray-200 p-2 text-sm text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-my-blue"
                    />
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor="eventDate"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Date
                      </label>
                    </div>
                    <input
                      type="datetime-local"
                      placeholder="A brief description about yourself"
                      {...register("eventDate", {
                        required: true,
                      })}
                      className="mt-1 w-full resize-none rounded-md border border-gray-200 p-2 text-sm text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-my-blue"
                    />
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor="eventLocation"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Location
                      </label>
                    </div>
                    <input
                      placeholder="Location"
                      {...register("eventLocation", {
                        required: true,
                      })}
                      className="mt-1 w-full rounded-md border border-gray-200 p-2 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-my-blue"
                    />
                  </div>
                  <div className="absolute left-0 w-full items-center justify-center">
                    <div className="mt-3 flex cursor-default flex-col items-center justify-center">
                      <span
                        className={`text-red-700 absolute top-3 transition-all duration-300 ease-in-out ${
                          errors.eventTitle ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        Something went wrong... Try again
                      </span>
                    </div>
                  </div>
                </form>
                <div className="flex w-full grow items-end justify-center self-end">
                  <button
                    form="newEventForm"
                    type="submit"
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-green px-5 py-3 text-white shadow-md transition hover:bg-green/75 focus:outline-none sm:mt-0 sm:w-auto"
                  >
                    <span className="text-sm font-medium">Update</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FutureEventsNewModal;
