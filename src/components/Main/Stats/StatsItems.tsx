type statsDataObj = {
  icon: JSX.Element;
  statNumber: string;
  description: string;
};
const StatsItems = ({ icon, statNumber, description }: statsDataObj) => {
  return (
    <>
      {icon}
      <div>
        <h2 className="text-3xl font-bold text-gray-700">{statNumber}</h2>
        <p className="text-left text-gray-500">{description}</p>
      </div>
    </>
  );
};

export default StatsItems;
