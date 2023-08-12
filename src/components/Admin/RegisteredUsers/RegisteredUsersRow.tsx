import { useRouter } from "next/router";

import { api } from "~/utils/api";

interface RegisteredUsersRowProps {
  userId: string;
  name: string | null;
  email: string | undefined;
  metadata: UserPublicMetadata;
}

const RegisteredUsersRow = (props: RegisteredUsersRowProps) => {
  const { userId, name, email, metadata } = props;
  const router = useRouter();
  const { mutate, isLoading: isVerifying } = api.admin.verifyUser.useMutation({
    onSuccess: () => {
      router.reload();
    },
    onError: (e) => {
      const errorMessage = e.data?.zodError?.fieldErrors.content;
      console.log(errorMessage);
    },
  });

  return (
    <>
      <tr>
        <td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
          {name}
        </td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">{email}</td>
        <td className="whitespace-nowrap px-4 py-2 text-gray-700">
          {metadata.is_admin_verified ? "Yes" : "No"}
        </td>
        {!metadata.is_admin_verified ? (
          <>
            <td className="whitespace-nowrap px-4 py-2">
              <button
                onClick={() => mutate({ userId: userId })}
                className="inline-block rounded bg-my-blue px-4 py-2 text-xs font-medium text-white hover:bg-my-blue/75"
              >
                Verify
              </button>
            </td>
          </>
        ) : null}
      </tr>
    </>
  );
};

export default RegisteredUsersRow;
