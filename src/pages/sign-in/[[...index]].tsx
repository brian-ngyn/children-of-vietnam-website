import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center bg-off-white pt-[10%] text-black">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </>
  );
};

export default SignInPage;
