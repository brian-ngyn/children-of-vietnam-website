import Image from "next/image";

interface GoalCardProps {
  title: string;
  description: string;
  logo: string;
}

const GoalCard = (props: GoalCardProps) => {
  const { title, description, logo } = props;
  return (
    <>
      <div className="flex items-center gap-4 rounded-xl border-2 p-4">
        <div className={`aspect-square shrink-0 rounded-lg p-3`}>
          <div className="relative h-16 w-16">
            <Image
              src={logo}
              fill
              style={{ objectFit: "contain" }}
              alt="Icon"
            />
          </div>
        </div>

        <div>
          <div className="text-lg font-bold">{title}</div>
          <div className="mt-1 text-sm text-gray-500">{description}</div>
        </div>
      </div>
    </>
  );
};

export default GoalCard;
