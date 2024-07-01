type AddInfoTableProps = {
  title: string;
  value: string;
};

export const AddInfoTableEl = ({ title, value }: AddInfoTableProps) => {
  return (
    <div className="flex gap-2 ">
      <p>{title}</p>
      <p className="bg-gray-800 rounded-full px-2">{value}</p>
    </div>
  );
};
