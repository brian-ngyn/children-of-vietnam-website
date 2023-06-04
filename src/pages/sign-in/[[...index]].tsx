import { LoadingPage } from "@/components/LoadingPage";
import { SignIn } from "@clerk/nextjs";
import { useUser } from "@clerk/nextjs";
import { type NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

const SignInPage: NextPage = () => {
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
          <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" redirectUrl="/admin" />
        </div>
      ) : (
        <LoadingPage />
      )}
    </>
  );
};

export default SignInPage;
