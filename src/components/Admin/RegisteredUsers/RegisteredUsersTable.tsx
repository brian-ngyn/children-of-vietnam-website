import { api } from "~/utils/api";

import RegisteredUsersRow from "~/components/Admin/RegisteredUsers/RegisteredUsersRow";

const RegisteredUsersTable = () => {
  const { data: userList, isLoading } = api.admin.getAllUsers.useQuery();
  return (
    <>
      {!isLoading && (
        <div>
          <div className="pb-2 text-2xl font-semibold">Registered Users</div>
          <div className="overflow-x-auto rounded-md bg-white p-2 shadow-lg">
            <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
              <thead>
                <tr className="text-left">
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Name
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Email
                  </th>
                  <th className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Verified?
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200">
                {userList?.map((user) => {
                  return (
                    <RegisteredUsersRow
                      key={user.id}
                      userId={user.id}
                      name={[user.firstName, user.lastName].join(" ")}
                      email={user.emailAddresses[0]?.emailAddress}
                      metadata={user.publicMetadata}
                    />
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

export default RegisteredUsersTable;
