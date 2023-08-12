import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { useUser } from "@clerk/nextjs";

import { api } from "~/utils/api";

import ExecTeamTable from "~/components/Admin/ExecTeam/ExecTeamTable";
import FutureEventsTable from "~/components/Admin/FutureEvents/FutureEventsTable";
import PastEventsTable from "~/components/Admin/PastEvents/PastEventsTable";
import RegisteredUsersTable from "~/components/Admin/RegisteredUsers/RegisteredUsersTable";
import { LoadingPage } from "~/components/LoadingPage";

const AdminPage: NextPage = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      void router.push("/sign-in");
    }
  }, [isLoaded, isSignedIn, router]);

  const { mutate, isLoading: isVerifying } = api.admin.verifyUser.useMutation({
    onSuccess: () => {
      router.reload();
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      console.log(errorMessage);
    },
  });

  if (isLoaded && user && !user?.publicMetadata.is_admin_verified) {
    return (
      <>
        <div className="flex h-screen w-full flex-col items-center justify-center bg-off-white">
          <div className="max-w-3xl px-4 text-center">
            <div className="text-3xl font-semibold">
              {"You are not authorized to the Admin Portal."}
            </div>
            <div className="mt-1 text-lg text-gray-700">
              {
                "If you believe this is incorrect please contact an executive who can grant you access. 💌"
              }
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      {!isLoaded ? (
        <LoadingPage />
      ) : (
        <div className="flex min-h-screen justify-center bg-off-white text-black">
          <div className="flex flex-col items-center pt-10 md:pt-0">
            <div className="flex w-screen flex-col gap-y-8 px-3 md:max-w-6xl lg:px-8 lg:pt-16">
              <div className="space-y-8 px-4 pb-24">
                <RegisteredUsersTable />
                <ExecTeamTable />
                <FutureEventsTable />
                <PastEventsTable />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPage;
