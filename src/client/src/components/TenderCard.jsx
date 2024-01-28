import { useNavigate } from "react-router-dom";

export const TenderCard = ({ tender }) => {
  const {
    number,
    status,
    closingDate,
    title,
    buyer,
    winner,
    startDate,
    endDate,
    budget,
  } = tender;
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-4 bg-white p-4 rounded-[6px] text-blue-700 text-[20px]">
      <div className="flex justify-between">
        <span className="tender-id bg-green-300 text-green-700 rounded-lg p-2">
          {number}
        </span>
        <div className="flex gap-4">
          <span className="tender-status bg-green-400 p-2 rounded-lg text-white">
            {status}
          </span>
          <span className="tender-created-date">{closingDate}</span>
        </div>
      </div>
      <p className="tender-description">{title}</p>
      <div className="flex justify-between">
        <div className="flex gap-6">
          <div className="flex flex-col">
            <span>Organizer</span>
            <span className="font-bold text-green-500">
              {buyer?.organization?.name}
            </span>
          </div>

          <div className="flex flex-col">
            <span>Tender winner</span>
            <span className="font-bold text-green-500">
              {winner?.organization?.name}
            </span>
          </div>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col">
            <span>Start</span>
            <span>{startDate}</span>
          </div>
          <div className="flex flex-col">
            <span>End</span>
            <span>{endDate}</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <span>Budget</span>
          <span className="text-blue-800 font-bold">
            {`${budget?.amount} ${budget?.currency}`}
          </span>
        </div>
        <button
          onClick={() => navigate("/bid")}
          className="w-[150px] p-2 bg-green-400 rounded-lg text-white hover:bg-green-500 active:ring"
        >
          Bid
        </button>
      </div>
    </div>
  );
};
