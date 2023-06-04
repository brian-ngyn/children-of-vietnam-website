import { SignIn } from "@clerk/nextjs";
import { type NextPage } from "next";

const SignInPage: NextPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-off-white pt-[10%] text-black">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" redirectUrl="/admin" />
      </div>
    </>
  );
};

export default SignInPage;
