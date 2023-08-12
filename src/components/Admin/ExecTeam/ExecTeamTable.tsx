import { api } from "~/utils/api";

import ExecTeamRow from "~/components/Admin/ExecTeam/ExecTeamRow";

const ExecTeamTable = () => {
  const { data, isLoading } = api.teamMember.getAll.useQuery();

  return (
    <>
      {!isLoading && (
        <div>
          <div className="pb-2 text-2xl font-semibold">Executive Team</div>
          <div className="overflow-x-auto rounded-md bg-white p-2 shadow-lg">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
              <thead>
                <tr className="text-left">
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="max-w-sm px-4 py-2 font-medium text-gray-900">
                    Role
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Description
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {data?.map((teamMember) => {
                  return (
                    <ExecTeamRow key={teamMember.id} teamMember={teamMember} />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </>
  );
};

export default ExecTeamTable;
