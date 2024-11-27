
export const SectionTitle = ({ text }:{ text: string }) => {
  return (
    <div className="border-b border-gray-200 pb-5">
      <h2 className="text-3xl font-mono tracking-wide font-bold capitalize">{text}</h2>
    </div>
  );
};
