import { type OpenExecPosition } from "@prisma/client";
import Link from "next/link";

interface OpenExecPositionCardProps {
  openExecPosition: OpenExecPosition;
}

const OpenExecPositionCard = ({ openExecPosition }: OpenExecPositionCardProps) => {
  const { id, positionTitle, positionDescription, positionLink } = openExecPosition;

  return (
    <>
      <div className="flex h-full w-full flex-col items-stretch rounded-lg border bg-gray-100 p-4 shadow-lg transition hover:shadow-xl sm:p-6">
        <div className="grow">
          <div>
            <div className="mt-0.5 text-lg font-medium text-black">{positionTitle}</div>
          </div>

          <div className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {positionDescription}
          </div>
        </div>

        <div className="self-start">
          <Link
            href={positionLink ? positionLink : "https://www.instagram.com/thechildrenofvietnam/"}
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
          >
            Apply
            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default OpenExecPositionCard;
