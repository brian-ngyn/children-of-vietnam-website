import { useRouter } from "next/router";
import { useState } from "react";

import { type TeamMember } from "@prisma/client";

import ExecTeamEditModal from "~/components/Admin/ExecTeam/ExecTeamEditModal";

interface TeamMemberProps {
  teamMember: TeamMember;
}

const ExecTeamRow = ({ teamMember }: TeamMemberProps) => {
  const { memberName, memberRole, memberDescription } = teamMember;
  const [modalOpen, setModalOpen] = useState(false);

  const toggleModal = () => {
    setModalOpen(!modalOpen);
  };

  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {memberName}
        </td>
        <td className="max-w-sm px-4 py-2 text-gray-700">{memberRole}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {memberDescription}
        </td>
        <td className="flex justify-end whitespace-nowrap px-4 py-2 md:pr-12">
          <button
            onClick={toggleModal}
            className="rounded bg-my-blue px-4 py-2 text-xs font-medium text-white hover:bg-my-blue/75"
          >
            Edit
          </button>
        </td>
        <div className={`${modalOpen ? "" : "hidden"}`}>
          <ExecTeamEditModal
            toggleModal={toggleModal}
            teamMember={teamMember}
          />
        </div>
      </tr>
    </>
  );
};

export default ExecTeamRow;
