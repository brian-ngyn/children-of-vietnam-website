import { LoadingPage } from "@/components/LoadingPage";
import { api } from "@/utils/api";
import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

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
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-off-white">
          <div className="max-w-3xl text-center">
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
          <div className="flex flex-col items-center pt-4 md:pt-16">
            <div className="flex max-w-screen-xl flex-col gap-y-8 px-4 py-8 sm:px-6 sm:pt-12 lg:px-8 lg:pt-16">
              You are verified
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminPage;
