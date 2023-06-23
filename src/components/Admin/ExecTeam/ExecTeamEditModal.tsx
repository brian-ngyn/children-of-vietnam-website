import { type TeamMember } from "@prisma/client";
import Image from "next/image";
import { useForm, type SubmitHandler } from "react-hook-form";

interface TeamMemberProps {
  teamMember: TeamMember;
  toggleModal: () => void;
}

type Inputs = {
  memberName: string;
  memberRole: string;
  memberDescription: string;
};

const ExecTeamEditModal = ({ teamMember, toggleModal }: TeamMemberProps) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-screen w-screen bg-black/80">
        <div className="flex h-full w-full items-center justify-center">
          <div className="relative rounded-md bg-white/100 px-48 py-60 shadow-xl">
            <div className="absolute left-0 top-0 flex h-full w-full flex-col p-8 text-xl">
              <div className="flex w-full items-center justify-between">
                <div className="text-xl font-semibold">Edit Member</div>
                <div onClick={toggleModal} className="hover:cursor-pointer">
                  <Image src="/icons/circle-xmark.svg" alt="close" width={20} height={20} />
                </div>
              </div>
              <div className="mt-6 flex grow flex-col">
                <form className="space-y-4 text-sm">
                  <div>
                    <div>
                      <label
                        htmlFor="memberName"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                    </div>
                    <input
                      defaultValue={teamMember.memberName}
                      {...register("memberName", {
                        required: false,
                      })}
                      className="mt-1 w-full rounded-md border border-gray-200 p-2 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-my-blue"
                    />
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor="memberRole"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                    </div>
                    <input
                      defaultValue={teamMember.memberRole}
                      {...register("memberRole", {
                        required: false,
                      })}
                      className="mt-1 w-full rounded-md border border-gray-200 p-2 text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-my-blue"
                    />
                  </div>
                  <div>
                    <div>
                      <label
                        htmlFor="memberDescription"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Description
                      </label>
                    </div>
                    <textarea
                      defaultValue={
                        teamMember.memberDescription ? teamMember.memberDescription : ""
                      }
                      {...register("memberDescription", {
                        required: false,
                      })}
                      rows={3}
                      className="mt-1 w-full resize-none rounded-md border border-gray-200 p-2 text-sm text-gray-700 shadow-sm transition focus:border-white focus:outline-none focus:ring focus:ring-my-blue"
                    />
                  </div>
                </form>
                <div className="flex w-full grow items-end justify-center self-end">
                  <button
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    className="mt-4 flex w-full items-center justify-center gap-2 rounded-md bg-green px-5 py-3 text-white shadow-md transition hover:bg-green/75 focus:outline-none sm:mt-0 sm:w-auto"
                  >
                    <span className="text-sm font-medium">Submit</span>
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

export default ExecTeamEditModal;
