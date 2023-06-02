interface PerkCardProps {
  title: string;
  description: string;
}

const PerkCard = (props: PerkCardProps) => {
  const { title, description } = props;
  return (
    <>
      <div className="flex flex-col justify-center rounded-xl bg-gray-100 p-4 shadow-lg transition hover:shadow-xl">
        <div className="mt-2 font-bold">{title}</div>
        <div className="text-sm text-gray-600">{description}</div>
      </div>
    </>
  );
};

export default PerkCard;
