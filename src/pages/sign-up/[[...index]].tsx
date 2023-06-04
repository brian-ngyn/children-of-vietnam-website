import { LoadingPage } from "@/components/LoadingPage";
import { SignUp } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignUpPage: NextPage = () => {
  const { isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      void router.push("/admin");
    }
  }, [isLoaded, isSignedIn, router]);

  return (
    <>
      {isLoaded && !isSignedIn ? (
        <div className="flex min-h-screen flex-col items-center bg-off-white pt-[10%] text-black">
          <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" redirectUrl="/admin" />
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default SignUpPage;
