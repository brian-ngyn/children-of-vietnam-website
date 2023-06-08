import { api } from "@/utils/api";
import { type TeamMember } from "@prisma/client";
import { useRouter } from "next/router";

interface TeamMemberProps {
  teamMember: TeamMember;
}

const ExecTeamRow = ({ teamMember }: TeamMemberProps) => {
  const { id, memberName, memberRole, memberDescription, memberImage } = teamMember;
  const router = useRouter();

  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">{memberName}</td>
        <td className="max-w-sm px-4 py-2 text-gray-700">{memberRole}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{memberDescription}</td>
        <td className="flex justify-end whitespace-nowrap px-4 py-2 md:pr-12">
          <button
            onClick={() => alert("work in progress")}
            className="rounded bg-my-blue px-4 py-2 text-xs font-medium text-white hover:bg-my-blue/75"
          >
            Edit
          </button>
        </td>
      </tr>
    </>
  );
};

export default ExecTeamRow;
