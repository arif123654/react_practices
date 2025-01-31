import { FC } from "react";
import { ProcessCardProps } from "../lib/services/ProcessesCardProps";

const ProcessCard: FC<ProcessCardProps> = ({ icon, title, description, number }) => (
  <div className="p-6 bg-gray-100 shadow-lg rounded-xl border border-gray-200 relative text-center max-w-xs">
    <span className="absolute top-4 right-4 text-4xl font-bold text-gray-300">{number}</span>
    <div className="flex justify-center items-center w-16 h-16 bg-white rounded-xl shadow-md mx-auto mb-4">
      <img className="p-3" src={icon} alt={title} />
    </div>
    <h4 className="text-lg font-bold text-gray-900">{title}</h4>
    <div className="flex justify-center gap-2 my-2">
      <span className="w-12 h-1 bg-red-500 rounded"></span>
      <span className="w-6 h-1 bg-red-500 rounded"></span>
    </div>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
);

export default ProcessCard;