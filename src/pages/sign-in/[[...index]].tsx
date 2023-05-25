import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <>
      <div className="items-center min-h-screen flex flex-col pt-[10%] text-black bg-off-white">
        <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
      </div>
    </>
  );
};

export default SignInPage;
