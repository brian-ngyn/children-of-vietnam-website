import { SignUp } from "@clerk/nextjs";
import { type NextPage } from "next";

const SignUpPage: NextPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-off-white pt-[10%] text-black">
        <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" redirectUrl="/admin" />
      </div>
    </>
  );
};

export default SignUpPage;
